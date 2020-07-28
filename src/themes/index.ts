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
    color: #fff;
  }

  div#__next {
    min-height: 100vh;
    background-image: ${({ theme }) => theme.colors.background.main};
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: flex-start;
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
