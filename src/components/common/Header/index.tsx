import React from 'react'

import 'antd/dist/antd.css'
import { Menu, Avatar, Layout, Button, Dropdown } from 'antd'
import {
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
const { SubMenu } = Menu

const Header = () => {
  const { t, i18n } = useTranslation()

  const currentMenuKey = (key: string) => {
    if (location.pathname.search(key) > 0) {
      return location.pathname
    } else {
      return key
    }
  }
  //nav bar
  const navBar = (
    <Menu mode="vertical" selectedKeys={[location.pathname]}>
      <Menu.Item key={currentMenuKey('/app')} style={{ background: '#FFFFFF' }}>
        <Link to="estimate">Estimates</Link>
      </Menu.Item>
    </Menu>
  )
  //language menu
  const languageMenu = (
    <Menu>
      <Menu.Item key="ja">
        <Button type="text" onClick={() => i18n.changeLanguage('ja')}>
          日本
        </Button>
      </Menu.Item>
      <Menu.Item key="en">
        <Button type="text" onClick={() => i18n.changeLanguage('en')}>
          English
        </Button>
      </Menu.Item>
    </Menu>
  )
  //rightContent (user area)
  const rightContent = [
    <Menu key="user" mode="horizontal" onClick={() => <h1>Logout function</h1>}>
      <SubMenu
        key="header-submenu"
        style={{
          background: '#FFFFFF',
        }}
        title={
          <>
            <span style={{ marginRight: 10 }}> 佐藤雄介 </span>

            <Avatar
              size="large"
              icon={<UserOutlined style={{ fontSize: '1em' }} />}
              style={{
                color: 'black',
                border: '2px solid black',
                background: '#FFFFFF',
              }}
            />
          </>
        }
      >
        <Menu.Item key="SignOut" icon={<LogoutOutlined />}>
          <span>Logout</span>
        </Menu.Item>
      </SubMenu>
    </Menu>,
  ]

  return (
    <Layout.Header className={styles.header} id="layoutHeader">
      <div className={styles.brand}>{navBar}</div>
      <div className={styles.rightContainer}>
        <Dropdown
          arrow
          placement="bottom"
          overlay={languageMenu}
          trigger={['click', 'hover']}
        >
          <GlobalOutlined
            style={{
              cursor: 'pointer',
              marginTop: '1.1em',
              marginRight: '1em',
              fontSize: '1.5em',
            }}
          />
        </Dropdown>
        <QuestionCircleOutlined
          style={{
            cursor: 'pointer',
            marginTop: '1.1em',
            marginRight: '1em',
            fontSize: '1.5em',
          }}
        />
        <BellOutlined
          style={{
            cursor: 'pointer',
            marginTop: '1.1em',
            marginRight: '1em',
            fontSize: '1.5em',
          }}
        />
        {rightContent}
      </div>
    </Layout.Header>
  )
}

export default Header
