import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { App } from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Barlow Semi Condensed', sans-serif;
    }
`

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('app')
)
