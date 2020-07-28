import 'styled-components'

declare module 'styled-components' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      background: {
        main: string
        paper: string
      }
    }
    spacing: (...args: number[]) => string
  }
}
