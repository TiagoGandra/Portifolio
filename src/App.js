import './App.css';
import CardAboutMe from './components/cardAbMe';
import CardContact from './components/cardContact';
import CardProjects from './components/cardProjects';
import CardTech from './components/cardTech';
import MyFooter from './components/myFooter';
import TopMenu from './components/topMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenu></TopMenu>
      </header>
      <body className='App-body'>
        <div className="profile">
          <CardAboutMe></CardAboutMe>
        </div>
        <h2>Technologies</h2>
        <div className='Techs'>
          <div className='Techs-column'>
          <CardTech></CardTech>
          <CardTech></CardTech>
          </div>
          <div className='Techs-column'>
          <CardTech></CardTech>
          <CardTech></CardTech>
          </div>
          <div className='Techs-column'>
          <CardTech></CardTech>
          <CardTech></CardTech>
          </div>
        </div>
        <h2>Projetos</h2>
        <div className="Projects">
          <div className='Projects-column'>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
          </div>
          <div className='Projects-column'>
            <CardProjects></CardProjects>
            <CardProjects></CardProjects>
          </div>
        </div>
        <div className="contact-me">
          <CardContact></CardContact>
        </div>
      </body>
      <footer className='App-footer'>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
