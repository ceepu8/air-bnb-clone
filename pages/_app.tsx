import React from "react";
import type { AppProps } from "next/app";

import { EmptyLayout } from "@/layouts/index";
import { AppPropsWithLayout } from "../interfaces";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
