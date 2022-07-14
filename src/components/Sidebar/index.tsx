import { SearchBox } from './SearchBox/SearchBox';
import { SidebarData } from './SidebarData';
import { SidebarItem } from './SiderbarItem/SidebarItem';

import styles from './styles.module.scss';

interface sidebarProps {
  active: boolean,
  handleSlide: () => void,
};

export function Sidebar({ active, handleSlide }: sidebarProps) {
  return (
    <div className={active ? (styles.container) : (styles.close)}>
      <div className={styles.wrapperClose}>
        <img className={styles.svg} src="../images/left.svg" alt="Botão para fechar menu" onClick={handleSlide} />
      </div>
      <div className={styles.wrapper}>
        <span />
        <SearchBox />
        <div className={styles.item}>
          {SidebarData.map((item, index) => {
            return <SidebarItem item={item} key={index} />
          })}
        </div>
      </div>
    </div>
  );
};