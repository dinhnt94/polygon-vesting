import React, {useCallback} from 'react'
import { Layout as AntdLayout, Menu} from 'antd'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const {Content, Header} = AntdLayout

const Wrapper = styled.div`
  .active-menu {
    background-color: cadetblue;
  }
`

export default function Application({children}) {
  let location = useLocation();
  const activeLink = useCallback(
    (pathName) => {
      return location.pathname.includes(pathName) ? "active-menu" : "";
    },
    [location.pathname]
  );

  return (
    <Wrapper>
      <AntdLayout>
        <AntdLayout id="inner-layout">
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
              <Link to='/private' className={activeLink('private')}>
                <Menu.Item key='private'>Private Sales</Menu.Item>
              </Link>
              <Link to='/dex' className={activeLink('dex')}>
                <Menu.Item key='dex'>Dex</Menu.Item>
              </Link>
              <Link to='/team' className={activeLink('team')}>
                <Menu.Item key='team'>Team</Menu.Item>
              </Link>
              <Link to='/marketing' className={activeLink('marketing')}>
                <Menu.Item key='marketing'>Marketing</Menu.Item>
              </Link>
              <Link to='/ecosystem' className={activeLink('ecosystem')}>
                <Menu.Item key='ecosystem'>Ecosystem</Menu.Item>
              </Link>
              <Link to='/reserve' className={activeLink('reserve')}>
                <Menu.Item key='reserve'>Reserves</Menu.Item>
              </Link>
            </Menu>
          </Header>
          <Content style={{paddingLeft: 20, paddingRight: 20}}>
            {children}
          </Content>
        </AntdLayout>
      </AntdLayout>
    </Wrapper>
  )
}
