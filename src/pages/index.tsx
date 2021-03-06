
import Head from 'next/head';
import router from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../styles/home.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
});

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>Login | MyCollection</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <text>My<span>Collection</span></text>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <input
              className={styles.input}
              type='email'
              placeholder='E-MAIL'
              {...register('email')}
            />
            {errors.email && <span>E-mail obrigatório</span>}
            <input
              className={styles.input}
              type='password'
              placeholder='SENHA'
              {...register('password')}
            />
            {errors.password && <span>Senha obrigatória</span>}
            <button type='submit'>ENTRAR</button>
          </form>
          <div className={styles.toggle}>
            <input type="checkbox" id="bar" />
            <label htmlFor="bar"></label>
            <p>PERMANECER LOGADO</p>
          </div>
          <div className={styles.registration}>
            <Link href="#">cadastro</Link>
          </div>
        </div>
      </div>
    </>
  )
}
