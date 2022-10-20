import React from 'react';
import type { AppProps } from 'next/app';

import { EmptyLayout } from '@/layouts/index';
import { AppPropsWithLayout } from '../interfaces';

import { Provider } from 'react-redux';

import store from 'redux/store';

import 'react-day-picker/dist/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

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
