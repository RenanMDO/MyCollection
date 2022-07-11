
import { useRef } from "react";
import styles from './styles.module.scss'


export function SearchBox() {

  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.label}>
      <img src='../images/search.svg' alt="Lupa de busca" />
      <input className={styles.input} placeholder="BUSCAR" ref={searchInputRef} />
    </div>
  );
}