import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
// import './styles.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ThemeProvider theme={theme}>
<CssBaseline />
<App />
</ThemeProvider>
</React.StrictMode>
)