import styled from 'styled-components'

export const Root = styled.main<{ margin: number }>`
  background-color: ${({ theme }) => theme.colors.background.paper};
  margin: ${({ theme, margin = 0 }) => theme.spacing(margin, 0)};
  padding: ${({ theme }) => theme.spacing(2)};
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const Illustration = styled.img`
  width: 400px;
  height: auto;

  @media only screen and (max-width: 1024px) {
    width: 320px;
  }

  @media only screen and (max-width: 768px) {
    width: 280px;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`

export const HeadlineContainer = styled.div`
  width: 40%;
  max-width: 512px;
  min-width: 320px;

  h1 {
    font-size: 4em;
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 3em;
    }
  }

  @media only screen and (max-width: 768) {
    min-width: 280px;
  }

  @media only screen and (max-width: 425px) {
    min-width: 90%;
    h1 {
      font-size: 2em;
    }
  }
`
