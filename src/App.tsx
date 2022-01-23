import { GlueProvider, Footer } from 'cornell-glue-ui'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Apply from './pages/Apply/Apply'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
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
            <Route path='/products' component={Products} />
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
                    url: '/products',
                  },
                  {
                    label: 'RSVP',
                    url: '/products',
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
