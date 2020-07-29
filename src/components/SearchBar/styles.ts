import styled from 'styled-components'

interface Generic {
  borderRadius?: number
}

interface RootProps extends Generic {
  padding?: number
}

interface ButtonProps extends Generic {
  width?: number
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
  width: 100%;
  flex: 1;

  &::placeholder {
    color: #00000080;
  }
`

export const Button = styled.button.attrs(() => ({
  type: 'submit',
}))<ButtonProps>`
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(4.5)};
  border-radius: ${({ theme, borderRadius = 1 }) =>
    theme.spacing(borderRadius)};
  background-color: ${({ theme }) => theme.colors['primary']};
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
  color: #fff;
`
