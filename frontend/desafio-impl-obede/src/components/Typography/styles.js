import styled from 'styled-components'
import { getVariable } from '../../common/styles/global'

export const TotalBooks = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.selected === 'dark' ? getVariable('white') : 'black'};
`;

export const NoProductsFond = styled.h2`
  font-weight: 400;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.selected === 'dark' ? getVariable('white') : 'black'}
`