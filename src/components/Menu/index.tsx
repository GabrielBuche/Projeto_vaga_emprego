import React from 'react';
import { UserOutlined, FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';


interface MenuProps {
  children: React.ReactNode;
}

export function MenuComponent({ children }: MenuProps) {
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<FormOutlined />}>
            Cadastrar Orçamento
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Github Gabriel.buche</Footer>
      </Layout>
    </Layout>
  );
};
