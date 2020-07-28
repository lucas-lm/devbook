import { createGlobalStyle } from 'styled-components'

export { dark } from './dark'

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

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Ubuntu', sans-serif;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 5em;
  }

  p {
    font-size: 1em;
  }

`
