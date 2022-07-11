import styles from './styles.module.scss'

interface sidebarItemProps {
  item: {
    title: string,
    path: string,
    icon: string,
    alt: string,
  },
}

export function SidebarItem({ item }: sidebarItemProps) {

  return (
    <>
      <a className={styles.container} href={item.path}>
        <div className={styles.itemMenu}>
          <img src={item.icon} alt={item.alt} />
          <p>{item.title}</p>
        </div>
        <img src='./images/right.svg' alt='Seta para direita' />
      </a>
    </>
  );
}

