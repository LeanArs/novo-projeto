import './index.css'

function App() {
  return (
    <div className='container'>
      <header>
        <nav id='zero'>
          <a class='logo' href='/'>Leandro Almeida</a>
          <ul class="nav-list">
            <li><a href='#um'>Sobre mim</a></li>
            <li><a href='#dois'>Conhecimentos</a></li>
            <li><a href='#tres'>Experiências</a></li>
            <li><a href='#quatro'>Redes Sociais</a></li>
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

        <div id='um'></div>
        <div class='Sobremim'>
          <h2>Quem é Leandro Almeida?</h2>
          <div class='texto'>
            <h4>
              <p>Bom, meu nome é Leandro, mas todos me chamam de Léo. Exceto o pessoal da Orc'estra porque deu uma falha na matrix.</p><br></br><p>Atualmente sou estudante do 2° semestre de Engenharia pela Universidade de Brasília. E pretendo seguir o curso estudando a área de Engenharia de Software...</p><br></br><p>Sempre fui o menino dos compiuter. Se liga só.</p><br></br>
            </h4>
            <img src="https://raw.githubusercontent.com/LeanArs/novo-projeto/master/src/assets/Captura%20de%20tela%202022-06-10%20000638.jpg" alt='Eu sentado na frente do computador quando criança'></img>
          </div>
        </div>

        <div id='dois'></div>
        <div class='conhecimentos'>
          <h2>Conhecimentos</h2>
          <div class='texto'>
            <h3>Formação Acadêmica</h3>
            <h4>
            Universidade de Brasília - UnB<br></br>
            Bacharelado em Engenharias - 2021 a 2026<br></br>
            Fundação Bradesco <br></br>
            Ensino Médio | Concluído em 2020<br></br>
            </h4>
            <h3>Idiomas</h3>
            <h4>
              Francês - Avançado<br></br>
              Centro Interescolar de Línguas de Ceilândia - 2017 a 2021<br></br>
              Inglês Avançado<br></br>
              Centro de Ensino Open House - 2012 a 2018
            </h4>
            <h3>Tecnologias</h3>  
            <h4>
            Noções de React<br></br>
            Python básico<br></br>
            Noções de HTML e CSS<br></br>
            Pacote Office Avançado<br></br>
            </h4>
          </div>
        </div>

        <div id='tres'></div>
        <div class='Experiências'>
          <h2>Minhas Experiências</h2>
          <div class='texto'>
            <h3>
              <p>Estágio - Assistente Administrativo</p>
            </h3>
            <h4>
            Agenseg Corretora de Seguros Vida e Previdência LTDA | Maio/2021 - Agosto/2021.<br></br>
            Responsabilidades: produção, organização e arquivamento de documentos e planilhas, atendimento e apoio ao cliente, envio de boletos e e-mails, alimentação do banco de dados além de realizar cadastro nas seguradoras.<br></br>
            </h4>
            <h3>
              <p>Jovem Aprendiz</p>
            </h3>
            <h4>
            Banco do Brasil Tecnologia e Serviços | Outubro/2019 - Janeiro/2021<br></br>
            Responsabilidades: produção, organização e arquivamento de documentos, planilhas e arquivos.
            </h4>
          </div>
        </div>

        <div id='quatro'></div>
        <div class='Redes Sociais'>
          <h2>Tá aqui o meu zap e outras formas <br></br>de contato, caso queira falar comigo ;)</h2>
          <div class='texto1'>
            <h3>
              <div class='box'>
                <a href='https://www.instagram.com/lean.ars/'>Instagram</a><br></br>
                <a href='https://wa.me/61995858878'>WhatsApp</a><br></br>
                <a href='https://www.linkedin.com/in/leanars/'>LinkedIn</a><br></br>
              </div>
              E-mail: leo.leandro.ars@gmail.com<br></br>

              <a href='zero'><button class='botao2'>Voltar ao Início</button></a>
            </h3>
          </div>
        </div>
        
        
        
      </main>
    </div>
  );
}

export default App;
