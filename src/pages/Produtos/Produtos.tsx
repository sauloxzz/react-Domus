import { useEffect, useState } from 'react'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import gel1 from '../../assets/imgs/Geladeira Brastemp Frost Free Branca.png'
import gel2 from '../../assets/imgs/Geladeira Electrolux Frost Free .png'
import gel3 from '../../assets/imgs/Geladeira Electrolux Frost Free Inverter 540L.png'
import gel4 from '../../assets/imgs/Geladeira French Door Premiun.png'
import gel5 from '../../assets/imgs/Geladeira Frost Free Branca Panasonic.png'
import gel6 from '../../assets/imgs/Geladeira Frost Free French Door 554L.png'
import './Produtos.css';
import type { Geladeira } from '../../types/Geladeira'
import { getGeladeiras } from '../../services/GeladeiraService'




export default function Produtos() {

  const [Geladeiras, setGeladeiras] = useState<Geladeira[]>([]);

  const fetchGeladeiras = async () => {
    try {
      const dados = await getGeladeiras();
      console.log("Lista de Geladeiras vinda da API: ", dados);
      setGeladeiras(dados);
    } catch (error) {
      console.error("Erro ao executar getGeladeiras: ", error);
    }
  }

  useEffect(() => {
    fetchGeladeiras();
  }, [])

  return (

    <main>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
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

      <section className='container'>
        <h1 className="acessivel">produtos de geladeiras</h1>
        <div className="titulo">
          <span>Geladeiras</span>
          <hr />
        </div>
      </section>

      <section className='cards'>
        {
          Geladeiras.map((g: Geladeira) => (
            <div className='card_produto'>
              <img src={`http://localhost:3000/static/${g.imagens[0]}`} alt={"Imagem do produto: " + g.descricao} />
              <h2>{g.nome}</h2>
              <p>{g.descricao}</p>
              <span>{g.preco}</span>
            </div>
          ))
        }
        </section>

    </main>
  )
}