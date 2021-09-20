import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

 html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: #f1e7de7a;
 }

 body {
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
 }
 
 html, body, #root {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 100vh;
 }

h1, h3 {
    font-family: 'Exo', sans-serif;
}
`

export default GlobalStyles