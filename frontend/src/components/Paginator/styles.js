import styled from 'styled-components'
import { getVariable } from '../../common/styles/global'

const PaginatorControl = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer; 
`

const PaginatorNumber = styled.div`
  font-size: 1.8rem;
  cursor: pointer;

  letter-spacing: .5rem;

font-weight: ${props => props.selected ? 700 : 300 }
`
export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white' : 'black')}
`

export const PaginatorNextIcon = styled(PaginatorControl)`
  margin-left: .5rem;
  color: inherit;
`
export const PaginatorPrevIcon = styled(PaginatorControl)`
  margin-right: .5rem;
  color: inherit;
`

export const PaginatorTotal = styled(PaginatorNumber)`
  /* margin-left: .2rem; */
  ::before {
    content: '...';
    display: block;
    line-height: 2rem;
    margin: 0 1rem;
  }
`
export const PaginatorPages = styled.div`
    display: flex;
    font-size: 2rem;
    align-items: center;
`

export const PaginatorSeparator = styled.span`
  line-height: 2rem;
  font-size: 1.8rem;
  color: #fff;
  ::before {
    content: '...';
    display: block;
    line-height: 2rem;
    margin: 0 1rem 0 .5rem;
  }
`

export const PaginatorPage = styled(PaginatorNumber)`
  letter-spacing: .5rem;
  font-weight: ${props => props.selected ? 700 : 300 }
`