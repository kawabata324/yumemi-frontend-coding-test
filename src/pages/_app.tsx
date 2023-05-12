import type { AppProps } from "next/app"
import "../styles/global.scss"
import "ress"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
