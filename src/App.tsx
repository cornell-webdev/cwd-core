import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Apply from './pages/Apply/Apply'
import Home from './pages/Home/Home'
import './fonts/fonts.css'
import { createBrowserHistory } from 'history'
import './app.css'

function App() {
  const history = createBrowserHistory()

  return (
    <div>
      <Suspense fallback={<div />}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/apply' component={Apply} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
