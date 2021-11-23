import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { PropsWithChildren, useState } from 'react';
import { AppContext } from '../domain/models';
import { HeaderToolbar } from './header-profile.component';
import { SideMenu } from './side-menu.component';

const { Header, Sider, Content } = Layout;

interface LayoutComponentProps {
  appContext?: AppContext;
}
export function LayoutComponent(
  props: PropsWithChildren<LayoutComponentProps>,
) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <SideMenu
          organisations={props.appContext?.organisations || []}
        ></SideMenu>
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              onClick={() => setCollapsed(false)}
            ></MenuUnfoldOutlined>
          ) : (
            <MenuFoldOutlined
              className="trigger"
              onClick={() => setCollapsed(true)}
            ></MenuFoldOutlined>
          )}
          <HeaderToolbar></HeaderToolbar>
        </Header>
        <Content
          className="background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
