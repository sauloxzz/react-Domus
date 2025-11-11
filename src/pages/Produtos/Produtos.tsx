import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import gela1 from '../../assets/imgs/Geladeira Brastemp Frost Free Inverse 588 Litros Branca Com Cor Branco.png'
import gela2 from '../../assets/imgs/Geladeira Electrolux Frost Free 431L Efficient AutoSense Duplex Inox Look (TF70S) _ Shopee Brasil.png'
import gela3 from '../../assets/imgs/Geladeira Electrolux Frost Free Inverter 540L Dispenser Água e Gelo 3 Portas Cor Inox Look (IM8IS) - Geladeira _ Refrigerador French Door - Magazine Luiza.png'
import gela4 from '../../assets/imgs/Geladeira French Door + Lava-louças 14 Ser + Forno elétrico Porta Dupla + Coifa Power Ventilation + Cooktop Black Inox (1).png'
import gela5 from '../../assets/imgs/Geladeira Frost Free French Door 554L Inox - BRO85AK - Brastemp Oficial - É outro mundo.png'
import gela6 from '../../assets/imgs/Geladeira Frost Free Nr-bt71pv4wa 483l Branca Panasonic.png'
import './Produtos.css';




export default function Produtos () {
    return (

  <main> 

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src= {banner2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src= {banner3} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <section className="container"/>
      <h1 className="acessivel">produtos de geladeiras</h1>
      <div className="titulo">
        <span>Geladeiras</span>
        <hr/>
      </div>

      <section className="cards"/>
        <div className="card">
          <img src="../assets/261273-removebg-preview 1.svg" alt=""/>
          <h2>Geladeira Brastemp</h2>
          <p>Geladeira duplex em inox, com design moderno, freezer superior amplo, boa organização interna e alta
            durabilidade.</p>
          <span>R$ 4.000</span>
        </div>

        <div className="card">
          <img src="../assets/transferir-removebg-preview (1) 1.png" alt=""/>
          <h2>Geladeira Smart LG Side by Side UVnano</h2>
          <p>Geladeira em inox escuro, com dispenser de água e gelo na porta e tela inteligente touch para controle e
            funções interativas.</p>
          <span>R$ 10.000</span>
        </div>

        <div className="card">
          <img
            src="../assets/geladeira-refrigerador-electrolux-degelo-pr-tico-240-litros-cycle-defrost-branco-re31-1201_nlkiffgvlopnhhed-removebg-preview 1.png"
            alt=""/>
          <h2>Geladeira Electrolux Cycle Defrost </h2>
          <p>Geladeira compacta de 240L, prática para cozinhas pequenas, com degelo fácil e durabilidade Electrolux.</p>
          <span>R$ 3.500</span>
        </div>

        <div className="card">
          <img
            src="../assets/geladeira-lg-frost-free-side-by-side-inverter-647l-instaview-preta-2-removebg-preview 1.svg"
            alt=""/>
          <h2>Geladeira smart LG</h2>
          <p>Geladeira side by side com duas portas verticais, oferecendo amplo espaço interno e design sofisticado,
            geralmente com dispenser na porta.</p>
          <span>R$ 8.000</span>
        </div>

        <div className="card">
          <img src="../assets/17244451204089-removebg-preview 2.svg" alt=""/>
          <h2>Geladeira LG Side by Side</h2>
          <p>Geladeira em inox com portas francesas, amplo espaço interno, dispenser de água na porta e design
            sofisticado.</p>
          <span>R$ 5.500</span>
        </div>

        <div className="card">
          <img src="../assets/geladeira_1f60_300x300-removebg-preview 1.svg" alt=""/>
          <h2>Refrigerador Domest Brastemp</h2>
          <p>Boa tecnologia: muitos são frost-free, com funções de controle automático de temperatura, luz LED interna,
            dispensers etc.</p>
          <span>R$ 8.000</span>
        </div>


        <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
          target="_blank">
          <img src="../assets/WhatsApp.svg.png" alt="icone do whatsapp"/>
        </a>
  </main>
    )
}