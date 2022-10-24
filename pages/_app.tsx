import React from 'react';
import type { AppProps } from 'next/app';

import { EmptyLayout } from '@/layouts/index';
import { AppPropsWithLayout } from '../interfaces';

import { Provider } from 'react-redux';

import store from 'redux/store';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}
