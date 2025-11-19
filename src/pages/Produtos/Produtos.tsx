import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Produtos.css';
import type { Geladeira } from '../../types/Geladeira'
import { getGeladeiras } from '../../services/GeladeiraService'
import CardProduto from '../../components/CardProduto/CardProduto'
import Carrossel from '../../components/Carrossel/Carrossel'
import Header from '../../components/Header/Header'

export default function Produtos() {
  const [Geladeiras, setGeladeiras] = useState<Geladeira[]>([]);
  const location = useLocation();

  const parametrosPesquisados = new URLSearchParams(location.search);
  const termo_pesquisado = parametrosPesquisados.get('query');

  const fetchGeladeiras = async () => {
    try {
      const dados = await getGeladeiras();
      if (termo_pesquisado) {
        const dados_filtrados = dados.filter(g =>
          g.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
          g.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
          g.categorias.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
        );
        setGeladeiras(dados_filtrados);
      } else {
        setGeladeiras(dados);
        console.log("Dados retornados da API: ", dados);
      }
    } catch (error) {
      console.error("Erro ao executar getGeladeiras: ", error);
    }
  }

  useEffect(() => {
    fetchGeladeiras();
    console.log("Termo pesquisado:", termo_pesquisado);
  }, [termo_pesquisado]);

  return (
    <>
      <Header />
      <main>
        <Carrossel />
        <section className='container'>
          <h1 className="acessivel">produtos de geladeiras</h1>
          <div className="titulo">
            <span>Geladeiras</span>
            <hr />
          </div>
        </section>
        <section className="cards">
          {
            Geladeiras.map((g: Geladeira) => (
              <CardProduto
                key={g.nome}
                nome={g.nome}
                descricao={g.descricao}
                preco={g.preco}
                imagem={g.imagens[0] ?? ""}
              />
            ))
          }
        </section>
      </main>
    </>
  )
}