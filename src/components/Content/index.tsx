import { Slide, Slider, SliderProps } from '../Slider';
import { Card } from './card';
import useWindowDimensions from '../useWindowDimension';


type card = {
  title: string,
  price: string,
  slug: string,
  img: string,
  alt: string,
}

interface SlidesProps {
  slides: card[]
}

export function Content({ slides }: SlidesProps) {
  const { width } = useWindowDimensions();

  const settings: SliderProps = {
    spaceBetween: 110,
    slidesPerView: (width >= 768 ? 3 : 1),
    navigation: slides.length >= 3,
    loop: true,

  }

  return (
    <>
      <Slider settings={settings}>
        {slides.map((card) => {
          return (
            <Slide key={card.slug}>
              <Card card={card} />
            </Slide>
          )
        })}

      </Slider>
    </>
  );
}