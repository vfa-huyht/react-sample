import React from 'react'
import { Layout } from 'antd'

import Header from '../Header'

const { Content } = Layout

type Props = {
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
