import { createGlobalStyle } from 'styled-components'

export { dark } from './dark'

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

`
