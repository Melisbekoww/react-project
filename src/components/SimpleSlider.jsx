import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const SimpleSlider = ({ images }) => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {images.map((el) => (
          <SwiperSlide key={el.id}>
            <div
              className="slide-bg"
              style={{
                backgroundImage: `url(${el.largeImageURL})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Контент поверх фона */}
      <div className="hero-content">
        <h1>Find Beautiful Images</h1>
      </div>
    </div>
  );
};

export default SimpleSlider;
