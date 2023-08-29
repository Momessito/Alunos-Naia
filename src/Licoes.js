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
        </div>
    );
}