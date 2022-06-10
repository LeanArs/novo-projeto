import './index.css'

function App() {
  return (
    <div className='container'>
      <header>
        <nav>
          <a class='logo' href='/'>Leandro Almeida</a>
          <ul class="nav-list">
            <li><a href='#um'>Sobre mim</a></li>
            <li><a href='#dois'>Experiências</a></li>
            <li><a href='#tres'>Redes Sociais</a></li>
          </ul>
        </nav>
      </header>
      <main>

        <div class='capa'>
          <h1>
          Uma tentativa<br></br>
          de me resumir
          </h1>
          <a href='#um'><button class='botao1'>Scroll Down</button></a>
        </div>

        <div class='Sobremim'>
          <h2 id='um'>Quem é Leandro Almeida?</h2>
          <div class='texto'>
            <h3>
              <p>Bom, meu nome é Leandro, mas todos me chamam de Léo. Exceto o pessoal da Orc'estra porque deu uma falha na matrix.</p><br></br><p>Atualmente sou estudante do 2° semestre de Engenharia pela Universidade de Brasília. E pretendo seguir o curso estudando a área de Engenharia de Software...</p><br></br><p>Sempre fui o menino dos compiuter. Se liga só.</p><br></br>
            </h3>
            <img src="C:\Users\leo_a\Desktop\Captura de tela 2022-06-10 000638.jpg"></img>
          </div>
        </div>

        <div class='Experiências'>
          <h2 id='dois'>Minhas Experiências</h2>
          <div class='texto'>
            <h3>
              <p></p>
            </h3>
          </div>
        </div>

        <div class='Redes Sociais'>
          <h2 id='tres'>Tá aqui o meu zap e outras formas de contato, se quiser falar comigo ;)</h2>
        </div>

      </main>
      <footer>
        <div class='foot'>
        </div>
      </footer>


    </div>
  );
}

export default App;
