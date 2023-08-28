import Logo from '../Captura_de_tela_2023-08-28_113129-removebg-preview.png'

export default function Hero(){
    return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Bem Vindo ao Naia Alunos!</h1>
      <p className="py-6">
Bem-vindo ao Naia Alunos! Aqui, oferecemos quizzes desafiadores, lições interativas e apostilas abrangentes para tornar o aprendizado envolvente. Acompanhe seu progresso, conecte-se com outros alunos na nossa comunidade e acesse o conteúdo de qualquer lugar. Comece sua jornada educacional hoje mesmo!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}