import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Apply from './pages/Apply/Apply'
import Home from './pages/Home/Home'
import './fonts/fonts.css'
import './styles/app.css'
import './styles/transitions.css'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import history from './util/history'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div />}>
          <ScrollToTop />
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
