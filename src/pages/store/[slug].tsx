import { useRouter } from "next/router";

import Head from "next/head";
import styles from './styles.module.scss'




export default function Game() {
  const router = useRouter();
  const content = router.query;


  return (
    <>
      <Head>
        <title>{content.title} | MyCollection</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.body}>
          <div className={styles.topo}>
            <h1>{content.title}</h1>
            <img src={content.img} alt={content.alt} />
          </div>
          <div className={styles.title}>
            <h1>HOME / {content.tag} / {content.title}</h1>
            <hr />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.description}>
              <h2>DESCRICAO:</h2>
              <p>{content.description}</p>
            </div>
            <div className={styles.info}>
              <div>
                <div className={styles.box}>
                  <p>TIPO</p>
                  <p>{content.tag}</p>
                </div>
                <div className={styles.box}>
                  <p>VALOR</p>
                  <p>{content.price}</p>
                </div>
              </div>
              <div className={styles.buttons}>
                <button>ADICIONAR AO CARRINHO</button>
                <button>COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


