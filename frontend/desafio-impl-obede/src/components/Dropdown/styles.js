import styled from 'styled-components'
import { getVariable } from '../../common/styles/global'

export const Dropdown = styled.div.attrs(() => ({
  className: 'dropdown'
}))`
  background-color: ${({ theme }) => getVariable(`grey-${theme.selected}-1`)};
  border: 1px solid ${({ theme }) => getVariable(theme.selected === 'dark' ? 'bg-header-dark': 'color-grey-1')};
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  position: relative;
  height: 4rem;
  font-size: 1.6rem;
  display: flex;
  width: 100%;


  @media screen and (min-width: 400px) {
    max-width: 50%;
  }

  @media screen and (min-width: 900px) {
    max-width: 15rem;
    margin-left: auto;
 
  }

  :hover > .dropdown-content {
    display: block;
    backface-visibility: visible;
    visibility: visible;
  }
`

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-left: 2rem;
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white' : 'grey-light-4')};
  overflow: hidden;
  cursor: pointer;
  span {
    font-size: 1.4rem;
  }
`

export const DropdownIconButton = styled.div`
  width: 4rem;
  height: 100%;
  margin-left: auto;
  border-left: 1px solid ${({ theme }) => getVariable(theme.selected === 'dark' ? 'bg-header-dark': 'color-grey-1')};
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'blue-dark-1': 'grey-light-2')};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.5rem;
    color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white': 'color-grey-1')};
  }


`

export const DropdownContent = styled.div.attrs(() => ({ className: 'dropdown-content'}))`
  position: absolute;
  right: -1px;
  top: 100%;
  min-height: 15rem;
  background: red;
  padding: 1.5rem .5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);

  backface-visibility: hidden;
  visibility: hidden;

  background-color: ${({ theme }) => getVariable(`bg-search-${theme.selected}`)};
  border: 1px solid ${({ theme }) => getVariable(theme.selected === 'dark' ? 'bg-header-dark': 'color-grey-1')};

  width: 20rem;
`

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const DropdownListItem = styled.li`
  padding: 5px 0;
  cursor: pointer;
  background: transparent;
  font-size: 1.4rem;
  text-decoration: ${props => props.checked ? 'line-through' : 'none' };
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white': 'grey-light-4')};
  :not(:last-child) {
    margin-bottom: .5rem;
    border-bottom: 1px solid ${({ theme }) => getVariable(theme.selected === 'dark' ? 'bg-header-dark': 'color-grey-1')};
  }
`