import { Home } from '../pages/Home'
import { Error } from '../pages/Error'
import { Test } from '../pages/Test'

export const route = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '*',
    component: Error,
  },
]
