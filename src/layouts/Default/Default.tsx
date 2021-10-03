import cx from 'classnames';
import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';

import { FooterNav } from '@/components';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';

import styles from './styles.module.less';

const { Footer, Content } = Layout;

export interface IProps extends ILayoutBaseProps {
  disableNav?: boolean;
}

export const DefaultLayout: React.FC<IProps> = (props) => (
  <Layout className={cx(styles['comp-wrapper'])}>
    <Content>
      <div
        className={cx(styles['layout-container'], 'g-layout-container--test')}
      >
        {props.disableNav ? null : (
          <div className={styles['nav']}>
            <Link href="/home">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Back</a>
            </Link>
          </div>
        )}

        <props.mainComp router={props.routeProps} pageProps={props.pageProps} />
      </div>
    </Content>
    <Footer>
      <div className={cx(styles['layout-footer'], 'g-layout-footer--test')}>
        <FooterNav />
      </div>
    </Footer>
  </Layout>
);
