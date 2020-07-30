import styled from 'styled-components'

export const Root = styled.footer`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.background.paper};
  text-align: center;
`

const anchorColor = '#ffe082'

export const Anchor = styled.a`
  display: inline-block;
  color: ${anchorColor};

  &::after {
    content: '';
    display: block;
    margin-left: -16px;
    background-color: ${anchorColor};
    width: 20px;
    height: 2px;
    transition: 200ms;
  }

  &:hover::after {
    margin: 0;
    width: 100%;
  }
`
