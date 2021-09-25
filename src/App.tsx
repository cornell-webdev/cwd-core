import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Apply from './pages/Apply/Apply'
import Home from './pages/Home/Home'
import './fonts/fonts.css'
import { createBrowserHistory } from 'history'
import './styles/app.css'
import './styles/transitions.css'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div />}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/apply' component={Apply} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default App
