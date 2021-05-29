import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getVariable } from '../../common/styles/global'

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white' : 'grey-dark-1')}
`

export const CustomLinkIconWrapper = styled.div`
  width: 1.8rem;
  margin-right: .5rem;
`