import styled, { Theme } from 'styled-components'

const size = '40px'

interface RootProps {
  borderRadius?: number
  padding?: number
}

export const Root = styled.form<RootProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  background-color: #dddddddd;
  border: 2px solid ${({ theme }) => theme.colors['primary']};
  border-radius: ${({ theme, borderRadius = 0 }) =>
    theme.spacing(borderRadius)};
  padding: ${({ theme, padding = 0 }) => theme.spacing(0, 0, 0, padding)};

  &:focus-within {
    border-width: 3px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  display: block;
  font-size: 1.3em;
  flex: 0;

  &::placeholder {
    color: #00000080;
  }
`

export const Button = styled.button.attrs(() => ({
  type: 'submit',
}))`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors['primary']};
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
`
