import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
};

export default function Slider({ settings, children }: SliderProps) {
  return (
    <div className="swiper-custom">
      <Swiper modules={[Navigation, A11y]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}