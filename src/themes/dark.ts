import { Theme } from 'styled-components'

export const dark: Theme = {
  colors: {
    primary: '#6C80EA',
    secondary: '#A7A5EC',
    background: {
      main: 'linear-gradient(to bottom, #000, #00030f)',
      paper: 'rgba(255, 255, 255, 0.25)',
    },
  },
  spacing(...args: number[]) {
    return args.map((n) => `${n * 8}px`).join(' ')
  },
}
