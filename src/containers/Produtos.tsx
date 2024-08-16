import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { Produto as ProdutoType } from '../App'
import { RootState } from '../store'
import { adicionarOuRemover } from '../store/reducers/favoritos'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const favoritar = (produto: ProdutoType) => {
    dispatch(adicionarOuRemover(produto))
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((p) => p.id === produto.id)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
