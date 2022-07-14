import Head from "next/head";
import { Content } from "../../components/Content";
import { ContentData } from "../../components/Content/contentData";
import styles from './store.module.scss';


export default function Store() {
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
