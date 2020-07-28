import styled from 'styled-components'

export const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1, 4)};
`
