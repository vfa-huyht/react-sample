import './style.scss'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Router } from './router'
import { store } from './store/store'
import { Spinner } from './components/common/Spinner'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </React.StrictMode>
      </Provider>
    </>
  )
}
