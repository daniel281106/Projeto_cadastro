import React from 'react'
import ReactDOM from 'react-dom/client'
import  { ThemeProvider } from "styled-components"
import { theme } from './styles/theme.js'
import { Global } from './styles/Global.js'
import { Routes } from './router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
