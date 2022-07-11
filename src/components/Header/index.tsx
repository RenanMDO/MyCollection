import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import styles from './styles.module.scss'

interface HeaderProps {
  active: boolean,
}

export function Header() {
  const [active, setActive] = useState(false)

  const handeslide = () => {
    setActive(!active)
  }
  return (
    <>
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          {/* <Sidebar active={active} /> */}
          <div className={styles.menu}>
            <img src='../images/menu.svg' alt="Hamburguer Menu" onClick={handeslide} />
            <text>My<span>Collection</span></text>
          </div>
          <div className={styles.content}>
            <img src='../images/Shopping-cart.svg' alt="Carrrinho de compras" className={styles.cart} />
            <img src='../images/avatar.svg' alt="Perfil cliente" className={styles.avatar} />
          </div>
        </header>
      </div>
    </>
  );
}