import './style.scss'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Router } from './router'
import { store } from './store/store'
import { Loader } from './components/common/Loader'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
        </React.StrictMode>
      </Provider>
    </>
  )
}
