import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media screen and (min-width: 900px) {
    margin-bottom: 2rem;
    flex-wrap: nowrap;
  }
`

const ToolbarDirection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const ToolbarLeft = styled(ToolbarDirection)`
  justify-content: flex-start;
`

export const ToolbarRight = styled(ToolbarDirection)`
  justify-content: flex-end;
  margin-left: auto;
`
export const ToolbarCenter = styled(ToolbarDirection)`
  margin: 0 auto;
  justify-content: center;
`
