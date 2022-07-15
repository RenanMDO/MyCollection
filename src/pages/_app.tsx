
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import '/src/styles/App.scss';
import styles from './store/store.module.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);

  const handleSlide = () => {
    setActive(!active);
  };

  const router = useRouter();

  return (
    <AuthProvider>
      {router.pathname !== "/" ? <div className={styles.header}>
        <Sidebar active={active} handleSlide={handleSlide} />
        <div className={styles.main}>
          <Header handleSlide={handleSlide} />
        </div>
      </div> : ""}
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
