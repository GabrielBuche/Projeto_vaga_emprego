import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, FormOutlined, LogoutOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

interface MenuProps {
  children: React.ReactNode;
}

function MenuComponent({ children }: MenuProps) {
  const location = useLocation();
  const [selected, setSelected] = useState<string>(location.pathname);
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (key: string) => {
    setSelected(key);
  };

  // Atualiza o estado 'selected' quando a rota muda
  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={[selected]} onClick={({ key }) => handleMenuClick(key)}>
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/budget" icon={<FileSearchOutlined />}>
            <Link to="/budget">Consultar orçamento</Link>
          </Menu.Item>
          <Menu.Item key="/registerBudget" icon={<FormOutlined />}>
            <Link to="/registerBudget">Cadastrar Orçamento</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            <Link to="/">Sair</Link>
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
