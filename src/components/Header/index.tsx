import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../../utils/format'
import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc: number, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
      </div>
    </S.Header>
  )
}

export default Header
