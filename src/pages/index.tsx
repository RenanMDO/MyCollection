
import Head from 'next/head'
import { useRouter } from "next/router";
import styles from '../styles/home.module.scss'


export default function Home() {
  const router = useRouter();
  const handleSignin = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/store');
  }
  return (
    <>
      <Head>
        <title>Login | MyCollection</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <text>My<span>Collection</span></text>
          <form action="#">
            <input className={styles.input} type='email' placeholder='E-MAIL' required />
            <input className={styles.input} type='password' placeholder='SENHA' required />
          </form>
          <button type='submit'>ENTRAR</button>
          <div className={styles.toggle}>
            <input type="checkbox" id="bar" />
            <label htmlFor="bar"></label>
            <p>PERMANECER LOGADO</p>
          </div>
          <div className={styles.registration}>
            <a>cadastro</a>
          </div>
        </div>
      </div>
    </>
  )
}
