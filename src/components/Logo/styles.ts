import styled from 'styled-components'
import { Theme } from '~/themes'

interface Props {
  theme: Theme
  color: 'primary' | 'secondary'
}

export const Root = styled.div`
  display: inline-block;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing(1)};
`

export const Text = styled.span`
  pointer-events: none;
  font-size: 4em;
  line-height: 1;
  font-weight: 500;
  color: ${({ theme, color }: Props) => theme.colors[color]};
`

Text.defaultProps = {
  color: 'primary',
}
