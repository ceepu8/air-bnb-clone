import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `history.scrollRestoration = "manual"`,
            }}
          />
        </NextScript>
      </body>
    </Html>
  )
}
