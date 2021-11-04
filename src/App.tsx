import { GlueProvider, Footer } from 'cornell-glue-ui'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import './fonts/fonts.css'
import Apply from './pages/Apply/Apply'
import Home from './pages/Home/Home'
import './styles/app.css'
import './styles/transitions.css'
import history from './util/history'

function App() {
  return (
    <Router history={history}>
      <GlueProvider>
        <Suspense fallback={<div />}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/apply' component={Apply} />
          </Switch>
          <Footer
            logo={<Logo variant='dark' />}
            navs={[
              {
                heading: 'Organization',
                routes: [
                  {
                    label: 'Apply',
                    url: '/apply',
                  },
                ],
              },
              {
                heading: 'Products',
                routes: [
                  {
                    label: 'Glue',
                    url: '/products/glue',
                  },
                  {
                    label: 'RSVP',
                    url: '/products/rsvp',
                  },
                ],
              },
            ]}
          />
        </Suspense>
      </GlueProvider>
    </Router>
  )
}

export default App
