
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

import '/src/styles/App.scss'
import styles from './store/store.module.scss'




function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false)

  const handleSlide = () => {
    setActive(!active)
  }
  return (
    <>
      <div className={styles.header}>
        <Sidebar active={active} handleSlide={handleSlide} />
        <div className={styles.main}>
          <Header handleSlide={handleSlide} />
        </div>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
