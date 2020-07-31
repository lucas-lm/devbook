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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  display: none;
  height: 48px;
  width: 48px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`
