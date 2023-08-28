import Logo from '../Captura_de_tela_2023-08-28_135637-removebg-preview.png'

export default function HeroQuiz(){
    return(
        <div  className="hero min-h-screen bg-base-200">
  <div style={{background: '#ee9ca7',
        background: '-webkit-linear-gradient(to bottom, #ffdde1, #ee9ca7)',
        background: 'linear-gradient(to bottom, #ffdde1, #ee9ca7)'
        }} className="hero-content flex-col lg:flex-row">
    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Bem Vindo aos Quizes!</h1>
    </div>
  </div>
</div>
    )
}