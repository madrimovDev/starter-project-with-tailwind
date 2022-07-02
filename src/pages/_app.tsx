import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.layout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

