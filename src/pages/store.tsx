import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useState } from 'react';
import styles from '../styles/store.module.scss'
import { Content } from "../components/Content";
import { ContentData } from "../components/Content/contentData";


export default function Store() {


  return (
    <>
      <Head>
        <title>Jogos | MyCollection</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <Sidebar active={false} />
          <div className={styles.main}>
            <Header />
            <div className={styles.body}>
              <div className={styles.highlights}>
                <Content slides={ContentData} />
              </div>
              <div className={styles.bestSeller}>
                <Content slides={ContentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
