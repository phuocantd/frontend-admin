import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage({ children, nameAccount, location, role }) {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState();

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="xs"
        collapsedWidth={width}
        onBreakpoint={broken => {
          if (broken) {
            setWidth(0);
          } else {
            setWidth(80);
          }
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={() => onCollapse()}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${location.pathname}`]}
          mode="inline"
        >
          <Menu.Item key="/">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          {role === 'root' ? (
            <Menu.Item key="/admins">
              <Link to="/admins">
                <Icon type="table" />
                <span>Manage admins</span>
              </Link>
            </Menu.Item>
          ) : (
            <Redirect to="/" />
          )}
          <Menu.Item key="/users">
            <Link to="/users">
              <Icon type="table" />
              <span>Manage users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/tags">
            <Link to="/tags">
              <Icon type="table" />
              <span>Manage Skill</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/specializations">
            <Link to="/specializations">
              <Icon type="table" />
              <span>Manage specializations</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/contracts">
            <Link to="/contracts">
              <Icon type="table" />
              <span>Manage contracts</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/complaints">
            <Link to="/complaints">
              <Icon type="table" />
              <span>Manage complaints</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/statistics">
            <Link to="/statistics">
              <Icon type="bar-chart" />
              <span>Statistics</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/tops">
            <Link to="/tops">
              <Icon type="pie-chart" />
              <span>Top</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/log-out">
              <Icon type="logout" />
              <span>Log Out</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {nameAccount ? `Hello, ${nameAccount}` : ''}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ margin: '16px 0' }} />
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default connect(state => {
  return {
    nameAccount: state.nameAccountReducer,
    role: state.roleAccountReducer
  };
})(withRouter(LayoutPage));
