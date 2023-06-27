import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormOutlined, LogoutOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useAuth } from '../../context/authProvider/useAuth';
import { getUserLocalStorage } from '../../context/authProvider/utils';

interface MenuProps {
  children: React.ReactNode;
}

function MenuComponent({ children }: MenuProps) {
  const location = useLocation();
  const { Logout } = useAuth();
  const [selected, setSelected] = useState<string>(location.pathname);
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const gerente = getUserLocalStorage().user.gerente;

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (key: string) => {
    setSelected(key);
    if (key === '3') {
      Logout();
    }
  };

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={[selected]} onClick={({ key }) => handleMenuClick(key)}>
          <Menu.Item key="/budget" icon={<FileSearchOutlined />}>
            <Link to="/budget">Consultar orçamento</Link>
          </Menu.Item>
          <Menu.Item key="/registerBudget" icon={<FormOutlined />} disabled={gerente === 0 ? false : true}>
            <Link to={gerente === 0 ? "/registerBudget": '/budget'}>Cadastrar Orçamento</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
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
