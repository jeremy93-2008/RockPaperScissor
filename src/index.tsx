import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {App} from './app'
import {createGlobalStyle} from 'styled-components'
import './index.css'

const GlobalStyles = createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Barlow Semi Condensed', sans-serif;
      user-select: none;
    }
`

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('app')
)
