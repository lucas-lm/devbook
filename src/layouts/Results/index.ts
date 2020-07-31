import styled from 'styled-components'

const Root = styled.div`
  width: 85%;
  max-width: 1920px;
  margin: 24px auto;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: 95%;
  }

  @media only screen and (max-width: 425px) {
    font-size: 10px;
    width: 95%;
  }
`

export const UsersContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: ${({ theme }) => theme.spacing(2)};

    @media only screen and (max-width: 1024px) {
      margin: ${({ theme }) => theme.spacing(1)};
    }

    @media only screen and (max-width: 425px) {
      margin: ${({ theme }) => theme.spacing(0.5)};
    }
  }
`

export default Root
