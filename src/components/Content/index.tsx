
import { useState } from 'react';
import { ContentData } from './contentData';
import styles from './styles.module.scss'

interface SlidesProps {
  slides: {},

}

export function Content({ slides }: SlidesProps) {
  const [current, setCurrent] = useState(0);
  const lenght = Object.keys(slides).length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1)
  }

  console.log(current)

  return (
    <>
      <div className={styles.container}>
        <img className={styles.leftArrow} src="../images/left.svg" alt="Seta para voltar slide" onClick={prevSlide} />
        {ContentData.map((slide, index) => {
          return (
            <img className={styles.img} src={slide.img} alt={slide.alt} />
          )
        })}
        <img className={styles.rightArrow} src="../images/right.svg" alt="Seta para voltar slide" onClick={nextSlide} />
      </div>
    </>
  );
}