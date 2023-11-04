//Função calculate que irá calcular se for o botão ou enter
export default function calculate() {
  const resultInput = document.getElementById("result");
  //Sempre apresenta mensagem de error, porém se for valido, mostra tão rapido
  //que não é possivel de se ver
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  //Se não for um calculo valido, irá parar aqui e a mensagem de error ficara sendo mostrada
  const result = eval(input.value);

  resultInput.value = result;
  resultInput.classList.remove("error");
}
