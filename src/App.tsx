import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { TransactionsProvider } from './contexts/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
