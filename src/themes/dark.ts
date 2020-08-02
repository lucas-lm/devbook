import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
  colors: {
    primary: '#6C80EA',
    secondary: '#A7A5EC',
    background: {
      main: '#131325',
      paper: 'rgba(255, 255, 255, 0.25)'
    }
  },
  spacing (...args: number[]) {
    return args.map((n) => `${n * 8}px`).join(' ')
  }
}
