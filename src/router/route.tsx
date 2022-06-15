import { Suspense } from 'react'

import { Outlet } from 'react-router'

import { Spinner } from '../components/common/Spinner'
import MainLayout from '../components/common/MainLayout'
import { NotFoundPage } from '../pages/404NotFound'

export const route = [
  {
    path: '/app',
    element: MainLayout,
    // children: [
    //   { path: 'estimate/*', element: <EstimateRoutes /> },
    //   { index: true, element: <Home /> },
    // ],
  },
  {
    path: '*',
    element: NotFoundPage,
  },
]
