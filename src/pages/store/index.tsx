import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { parseCookies } from 'nookies';
import { Content } from "../../components/Content";
import { ContentData } from "../../components/Content/contentData";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import styles from './store.module.scss';
import { getApiClient } from "../../services/axios";


export default function Store() {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    // api.get('/users');
  }, [])

  return (
    <>
      <Head>
        <title>Jogos | MyCollection</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.body}>
          <div className={styles.highlights}>
            <div className={styles.title}>
              <h1>DESTAQUES</h1>
              <hr />
            </div>
            <Content slides={ContentData} />
          </div>
          <div className={styles.highlights}>
            <div className={styles.title}>
              <h1>Mais Vendidos</h1>
              <hr />
            </div>
            <Content slides={ContentData} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx)
  const { ['nextAuth.token']: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  // await apiClient.get('/users')
  return {
    props: {}
  }
}