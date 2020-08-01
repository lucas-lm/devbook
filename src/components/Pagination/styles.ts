import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Count = styled.a<{ current?: boolean }>`
  margin: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  color: #ededed;
  background-color: ${({ theme, current = false }) =>
    theme.colors.secondary + (current ? 'cc' : '20')};
  display: inline-block;
  border: 1px solid #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary + '50'};
  }
`
