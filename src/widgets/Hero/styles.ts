import styled from 'styled-components'

export const Root = styled.main<{ margin: number }>`
  background-color: ${({ theme }) => theme.colors.background.paper};
  margin: ${({ theme, margin }) => theme.spacing(margin, 0)};
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Illustration = styled.img`
  width: 400px;
  height: auto;
`

export const HeadlineContainer = styled.div`
  width: 40%;
  max-width: 512px;

  h1 {
    font-size: 4em;
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`
