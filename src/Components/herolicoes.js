import Logo from '../Captura_de_tela_2023-08-28_135637-removebg-preview.png'

export default function HeroLicoes(){
    return(
        <div  className="hero min-h-screen bg-base-200">
  <div style={{background: '#355C7D',  
background: '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
background: 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)'

        }} className="hero-content flex-col lg:flex-row">
    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Bem Vindo as lições!</h1>
    </div>
  </div>
</div>
    )
}