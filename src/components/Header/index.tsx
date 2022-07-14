import styles from './styles.module.scss';

interface HeaderProps {
  handleSlide: () => void,
};

export function Header({ handleSlide }: HeaderProps) {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.menu}>
          <img src='../images/menu.svg' alt="Hamburguer Menu" onClick={handleSlide} />
          <p>My<span>Collection</span></p>
        </div>
        <div className={styles.content}>
          <img src='../images/Shopping-cart.svg' alt="Carrrinho de compras" className={styles.cart} />
          <img src='../images/avatar.svg' alt="Perfil cliente" className={styles.avatar} />
        </div>
      </header>
    </div>
  );
}