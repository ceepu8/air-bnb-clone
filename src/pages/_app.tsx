import "@/styles/main.css"
import "@fontsource/roboto"
import "keen-slider/keen-slider.min.css"
import "react-day-picker/dist/style.css"
import "react-toastify/dist/ReactToastify.css"

import ProgressBar from "@badrap/bar-of-progress"
import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import nookies from "nookies"

import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import AlertProvider from "@/components/base/Alert/AlertProvider"
import { setDefaultHeaders } from "@/configs/axios"
import { TOKEN_CYBERSOFT } from "@/constants"
import { ReactQueryProvider } from "@/contexts"
import { propsInterface } from "@/interfaces"
import { useStore } from "@/store"
import { NotificationProvider } from "@/store/contexts/NotificationContext"

const progress = new ProgressBar({
  size: 1,
  color: "var(--primary)",
  className: "bar-of-progress",
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
  progress.start()
  progress.finish()
}

Router.events.on("routeChangeStart", () => progress.start())
Router.events.on("routeChangeComplete", () => progress.finish())
Router.events.on("routeChangeError", () => progress.finish())

const Noop = ({ children }: propsInterface) => <>{children}</>

function MyApp({ Component, pageProps, token }: propsInterface) {
  const store = useStore(pageProps.initialReduxState)
  const Layout = Component.Layout || Noop

  const persistor = persistStore(store, {}, () => {
    persistor.persist()
  })

  setDefaultHeaders({ tokenCybersoft: TOKEN_CYBERSOFT })

  if (token) {
    setDefaultHeaders({
      Authorization: `Bearer ${token}`,
    })
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {() => (
            <ReactQueryProvider {...pageProps}>
              <NotificationProvider>
                <AlertProvider>
                  <Layout {...pageProps} token={token}>
                    <Component {...pageProps} />
                  </Layout>
                </AlertProvider>
              </NotificationProvider>
            </ReactQueryProvider>
          )}
        </PersistGate>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const { token } = nookies.get(appContext.ctx)
  setDefaultHeaders({
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  })

  const appProps = await App.getInitialProps(appContext)
  return {
    token,
    locale: appContext.ctx.locale,
    ...appProps,
  }
}

export default MyApp
