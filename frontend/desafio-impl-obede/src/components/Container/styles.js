import styled from 'styled-components'

const BaseContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`

export const Container = styled(BaseContainer)`
 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    padding: 2rem 0;
  } 
`

export const ContainerFluid = styled(Container)`
  max-width: 100%;
`

export const ContainerDetail = styled(BaseContainer)`
  max-width: 75rem;
`

