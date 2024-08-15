import { useState } from 'react'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { Produto as ProdutoType } from '../App'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const [favoritos, setFavoritos] = useState<ProdutoType[]>([])

  const favoritar = (produto: ProdutoType) => {
    if (favoritos.find((p) => p.id === produto.id)) {
      setFavoritos(favoritos.filter((p) => p.id !== produto.id))
    } else {
      setFavoritos([...favoritos, produto])
    }
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
