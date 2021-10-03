import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Spin } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'next/router';

import { ErrorBoundary, LoadingSpinner } from '@/components';
import { MasterLayout, DefaultLayout } from '@/layouts';
import { isServer } from '@/utils';
import { ILayout } from '@/interfaces/jsx.interface';

require('@/styles/global.less');

Spin.setDefaultIndicator(<LoadingSpinner />);

// avoid CSS animation transition flashing
export const DISABLE_SSR_TRANSITION = 'disable-SSR-transition';
export interface ICustomApp {
  Component: React.FC & {
    getLayout: any;
  };
  pageProps: {
    layout?: ILayout;
    name?: string;
  };
  routeProps: Router;
  err?: Error;
}

export default function CustomApp(props: ICustomApp) {
  const avoidCssAnimationFlashing = () => {
    if (!isServer()) {
      const disableTransitionDom = document.getElementById(
        DISABLE_SSR_TRANSITION,
      );

      if (disableTransitionDom) disableTransitionDom.remove();
    }
  };

  useEffect(() => {
    avoidCssAnimationFlashing();
  }, []);

  let layoutDom = null;

  if (props.pageProps?.layout === 'master') {
    layoutDom = (
      <MasterLayout
        mainComp={props.Component}
        routeProps={props.routeProps}
        pageProps={props.pageProps}
      />
    );
  }

  if (props.pageProps?.layout === 'default') {
    layoutDom = (
      <DefaultLayout
        mainComp={props.Component}
        routeProps={props.routeProps}
        pageProps={props.pageProps}
      />
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        {/* ⚠️⚠️⚠️ FK! Next.js does not support IconContext.Provider */}
        {/* <IconContext.Provider value={{ className: 'rcicon g-rcicon' }}> */}
        {layoutDom || <span />}
        {/* </IconContext.Provider> */}
      </HelmetProvider>
    </ErrorBoundary>
  );
}
