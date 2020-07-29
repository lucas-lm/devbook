import styled from 'styled-components'

interface Props {
  size: number
  weight: number
  color: string
}

const Text = styled.h1<Props>`
  font-size: ${({ size = 1 }) => `${size}em`};
  font-weight: ${({ weight = 400 }) => `${weight}em`};
  color: ${({ color = '#fff' }) => color};
`

export default Text
