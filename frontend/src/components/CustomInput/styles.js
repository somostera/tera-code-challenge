import styled from 'styled-components'
import { getVariable } from '../../common/styles/global'

const InputTheme = styled.input`
  outline: none;
  color:${({ theme }) => getVariable(theme.selected === 'dark' ? `white` : 'black')};
  background-color: ${({ theme }) => getVariable(`grey-${theme.selected}-1`)};
  border: 1px solid ${({ theme }) => getVariable(theme.selected === 'dark' ? 'blue-dark-1': 'grey-light-2')};
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  ::placeholder {
    color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white': 'grey-light-4')};
  }

  width: 100%;
  height: 4rem;
`

export const InputSearch = styled(InputTheme)`

  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  outline: none;
  font-size: 1.6rem;
  padding: 0 2.5rem;

  @media screen and (min-width: 400px) {
    max-width: calc(50% - 1rem);
    margin-bottom: 0;
    margin-right: 1rem;
  }

  @media screen and (min-width: 900px) {
    max-width: 40rem;
    margin-right: 0;
  }
  
`


export const InputCategoryFilter = styled(InputTheme)`


  font-size: 1.6rem;
  padding: 0 1.5rem;
  width: 100%;
  display: ${({ show }) => show ? 'block' : 'none' };

  margin-top: 1rem;

  @media screen and (min-width: 900px) {
    max-width: 20rem;
    margin-left: 1rem;
    margin-top: 0;
  }
`