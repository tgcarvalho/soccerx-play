import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/app.module.scss'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <div className={styles.system}>
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  )
}

export default MyApp
