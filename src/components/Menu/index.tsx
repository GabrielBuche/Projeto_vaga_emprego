import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, FormOutlined, LogoutOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useAuth } from '../../context/authProvider/useAuth';

interface MenuProps {
  children: React.ReactNode;
}

function MenuComponent({ children }: MenuProps) {
  const location = useLocation();
  const { Logout } = useAuth()
  const [selected, setSelected] = useState<string>(location.pathname);
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (key: string) => {
    setSelected(key);
    if (key === '4') {
      Logout()
    }
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={[selected]} onClick={({ key }) => handleMenuClick(key)}>
          <Menu.Item  icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="/budget" icon={<FileSearchOutlined />}>
            <Link to="/budget">Consultar orçamento</Link>
          </Menu.Item>
          <Menu.Item key="/registerBudget" icon={<FormOutlined />}>
            <Link to="/registerBudget">Cadastrar Orçamento</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<LogoutOutlined />}

          >
            Sair
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Github Gabriel.buche</Footer>
      </Layout>
    </Layout>
  );
}

export default React.memo(MenuComponent);
