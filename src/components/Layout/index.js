import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { children } = props;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse()}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admins">
              <Icon type="team" />
              <span>Manage admins</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/users">
              <Icon type="team" />
              <span>Manage users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/tags">
              <Icon type="bulb" />
              <span>Manage Skill</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/log-out">
              <Icon type="logout" />
              <span>Log Out</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
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

export default LayoutPage;
