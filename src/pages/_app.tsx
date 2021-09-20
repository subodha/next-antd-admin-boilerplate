import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';

require('@/styles/global.less');

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
export default MyApp;
