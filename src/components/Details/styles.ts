import styled from 'styled-components'

export const Root = styled.details<{ margin?: number | number[] }>`
  margin: ${({ theme, margin = 0 }) =>
    Array.isArray(margin) ? theme.spacing(...margin) : theme.spacing(margin)};
`

export const Summary = styled.summary`
  background-color: ${({ theme }) => theme.colors.background.paper};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`
