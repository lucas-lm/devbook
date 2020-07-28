import styled from 'styled-components'

interface TextProps {
  color?: 'primary' | 'secondary'
}

export const Root = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
`

export const Text = styled.span<TextProps>`
  pointer-events: none;
  font-size: 4em;
  line-height: 1;
  font-weight: 500;
  color: ${({ theme, color = 'primary' }) => theme.colors[color]};
`
