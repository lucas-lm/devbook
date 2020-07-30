import styled from 'styled-components'

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const UsersContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: ${({ theme }) => theme.spacing(2)};
  }
`

export default Root
