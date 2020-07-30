import styled from 'styled-components'

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  width: 240px;
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.spacing(2)};
  text-align: center;
`

export const Avatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`
