import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js";
import tema from "./tema.js";
//Definindo constantes que serão usadas mais para frente

const input = document.getElementById("input");

//Criando a lista com as palavras chaves permitidas
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];
//Dando funcionalidade ao botão clear para limpar o input
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});
//Reconhecendo todos os botões com a classe .charKey e adicionando uma função de
//click para cada uma delas
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
    input.focus();
  });
});
//Reconhendo a opçao de escrita do teclado no input com keydown
//Adicionando função que previne ação defalt e inclue, apaga e entra com os dados
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});
//Criando evento de click no qual o botão igual irá calcular o input com a função calculate
document.getElementById("equal").addEventListener("click", calculate);

//Reconhecendo botão de copiar e adicionando evento a ele, no qual copia e deixa com a
//mensagem de copiado e se cliado na mensagem, volta ao padrão
document
  .getElementById("copyToClipBoard")
  .addEventListener("click", copyToClipBoard);

//Reconhecendo botão para troca de tema do site e adicionando evento ao mesmo
//Irá reconhecer o dataset atual e rodará a condição condizente a ele
document.getElementById("themeSwitchBtn").addEventListener("click", tema);
