import type { AppProps } from 'next/app'
import Header from '../components/header'
import { Provider } from 'react-redux'
import store from '../state/store'
import '/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Header />
    <Component {...pageProps} />
  </Provider>
}