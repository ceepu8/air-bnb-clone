import React from "react";
import type { AppProps } from "next/app";

import { EmptyLayout } from "@/layouts/index";
import { AppPropsWithLayout } from "../interfaces";

import { Provider } from "react-redux";

import "../styles/global.css";
import store from "redux/store";

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
