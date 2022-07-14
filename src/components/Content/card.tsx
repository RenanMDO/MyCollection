
import { useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

interface SlidesProps {
  card: {
    title: string,
    price: string,
    slug: string,
    img: string,
    alt: string,
  }
};

export function Card({ card }: SlidesProps) {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container} onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className={hover ? (styles.hover) : (styles.none)}>
        <div className={styles.header}>
          <h1>{card.title}</h1>
          <p>{card.price}</p>
        </div>
        <div className={styles.btt}>
          <div className={styles.button}>
            <Link href={{
              pathname: `/store/${card.slug}`,
              query: card,
            }}>
              <button>ADD CART</button>
            </Link>
            <Link href={{
              pathname: `/store/${card.slug}`,
              query: card,
            }}>
              <button >DETALHES</button>
            </Link>
          </div>
        </div>
      </div>
      <img className={styles.img} src={card.img} alt={card.alt} />
    </div>
  )
}

