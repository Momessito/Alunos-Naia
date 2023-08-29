import HeroLicoes from "./Components/herolicoes";

export default function Licoes(){
    return(
        <div className="licoes">
            <HeroLicoes />
            <div className="licoes-meio">

            <p>Bem-vindo às Apostilas de Informática para Iniciantes! Neste guia abrangente, iremos desbravar o mundo da tecnologia de forma simples e acessível. Das noções básicas sobre hardware e software até a navegação na internet e segurança online, estas apostilas foram cuidadosamente elaboradas para ajudar você a se sentir confiante ao explorar o universo da informática. Não importa se você é um novato completo ou está apenas procurando consolidar seu conhecimento, este recurso será o seu companheiro confiável em sua jornada pelo mundo digital. Vamos começar a explorar o fascinante mundo da informática juntos!</p>
            <br/>
            <br/>
            <br/>
            <p>Para começarmos, um filme muito interessante que sempre passo:</p>
            <h1>O filme o jogo da imitação</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lRid96uWpqo?si=3uoCIrKy1CHg-tqS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br/>
            <br/>
            <br/>
            <p>Alem disso temos tambem o site que sempre utilizamos que é o :</p>
            <a className="tooltip tooltip-open tooltip-right" data-tip="Clique para abrir!" href="https://www.typingclub.com/sportal/program-3.game">Typing Club</a>         </div>
            <br/>
            <br/>
            <br/>
            <h1>Aulas Conteudos</h1>

            <div className="flex divisão">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-do-dia-da-internet_114360-5303.jpg?w=2000" height='300px' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      internet o que é?
      <div className="badge badge-secondary">NOVO</div>
    </h2>
    <p>A internet é uma rede global de computadores interconectados, que permite às pessoas em todo o mundo compartilhar informações, comunicar-se, acessar sites, enviar e receber e-mails e participar de diversas atividades online. Ela funciona por meio de protocolos de comunicação que garantem a troca de dados entre dispositivos conectados.




</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Informatica</div> 
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img  height='300px' src="https://blog.bbbaterias.com.br/wp-content/uploads/2018/06/199658-conheca-os-4-principais-tipos-de-hardware.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Hardware o que é?
      <div className="badge badge-secondary">NOVO</div>
    </h2>
    <p>Hardware é a parte física de um computador, incluindo componentes como a tela, teclado, mouse e circuitos internos. É o que você pode tocar e ver, permitindo que o computador funcione e realize tarefas.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Informatica</div> 
      <div className="badge badge-outline">Manutenção de Hardware</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img  height='300px' src="https://audcontcontabilidade.com.br/wp-content/uploads/Como-Abrir-uma-Empresa-de-Software.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Software o que é?
      <div className="badge badge-secondary">NOVO</div>
    </h2>
    <p>
Software é o conjunto de programas, aplicativos e instruções que permitem ao computador executar tarefas específicas. É a parte invisível do computador que controla o hardware e permite que ele realize diferentes funções, como navegar na internet, editar documentos e jogar jogos.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Informatica</div> 
      <div className="badge badge-outline">Manutenção de Hardware</div>
    </div>
  </div>
</div>
            </div>

        </div>
    );
}