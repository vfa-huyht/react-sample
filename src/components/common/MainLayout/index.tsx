import React from 'react'
import { Layout } from 'antd'

import Header from '../Header'
import styles from './index.module.scss'

const { Content } = Layout

type Props = {
  children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className={styles.layoutDashboard}>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
