import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getVariable } from '../../common/styles/global'

export const Header = styled.header`
  height: 7rem;
  background-color: red;
  box-shadow: 0 3px 3px rgba(0,0,0,.25);
  background-color: ${({theme}) => getVariable(`blue-${theme.selected}-1`)};
  display: flex;
  align-items: center;

`;

export const HeaderTitle = styled(Link)`

  color: ${() => getVariable('white')};
  font-weight: 400;
  display: inline-block;
  font-size: 1.8rem;
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;


export const HeaderToggleTheme = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  margin-left: auto;
  color: ${() => getVariable('white')};
  border: none;
  cursor: pointer;
  font-size: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;

  }
`