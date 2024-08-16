import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    font-style: italic;
    color: ${cores.corFundo};
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px; /* Espaçamento entre os elementos */

    span {
      color: ${cores.corFundo};
    }

    img {
      width: 18px;
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    div {
      margin-top: 16px;
      width: 100%; /* Garante que o div ocupe toda a largura disponível */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px; /* Espaçamento vertical entre os elementos */
    }
  }
`
