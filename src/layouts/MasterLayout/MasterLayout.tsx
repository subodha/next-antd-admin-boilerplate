import cx from 'classnames';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { FooterNav, HeaderNavbar } from '@/components';
import { useDarkMode } from '@/hooks';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';

import styles from './styles.module.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const MasterLayout: React.FC<IProps> = (props) => {
  // const [collapsed, setCollapsed] = useState<Boolean>(false);

  const handleClick = (e: any) => {
    console.log('click ', e);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const onCollapse = (collapsed) => {
  //   console.log(collapsed);
  //   setCollapsed({ collapsed });
  // };

  return (
    <Layout className={cx(styles['comp-wrapper'])}>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className="logo" />
        {/* {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: this.toggle,
            },
          )} */}
      </Header>
      <Layout>
        <Sider
          collapsible
          breakpoint="lg"
          collapsedWidth="64"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu onClick={handleClick} defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div
              id={`g-layout--${MasterLayout?.displayName}`}
              className={cx(
                styles['comp-wrapper'],
                `g-comp--${MasterLayout?.displayName}`,
              )}
            >
              {props?.disableHeader ? null : (
                <div
                  className={cx(
                    styles['layout-header'],
                    'g-layout-header--master',
                  )}
                >
                  aa
                </div>
              )}

              <div
                className={cx(
                  styles['layout-container'],
                  'g-layout-container--master',
                )}
              >
                <props.mainComp
                  router={props.routeProps}
                  pageProps={props.pageProps}
                />
              </div>

              {props?.disableFooter ? null : (
                <div
                  className={cx(
                    styles['layout-footer'],
                    'g-layout-footer--master',
                  )}
                >
                  {/* <FooterNav /> */}
                </div>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
