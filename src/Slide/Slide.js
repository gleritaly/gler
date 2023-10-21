import { img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30 } from '../image/image.js'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Slide/slide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slide() {
  return (
    <>

      <Swiper data-aos="fade-up"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img18} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img22} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img23} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img24} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img25} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img27} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img28} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img29} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img30} />
        </SwiperSlide>
      </Swiper>

    </>
  );
}