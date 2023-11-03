import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Carousel/carousel.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

 function Carousel5() {
  return (
    <div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
     >
       <SwiperSlide><img src="https://gleritaly.sirv.com/gler/cardy.jpg" className="img-fluid" alt="..."/></SwiperSlide>
        <SwiperSlide><img src="https://gleritaly.sirv.com/gler/office.png" className="img-fluid" alt="..."/></SwiperSlide>
        <SwiperSlide><img src="https://gleritaly.sirv.com/gler/img2.png" className="img-fluid" alt="..."/></SwiperSlide>
        <SwiperSlide> <img src="https://gleritaly.sirv.com/gler/lab.png" className="img-fluid" alt="..."/></SwiperSlide>
        <SwiperSlide><img src="https://gleritaly.sirv.com/gler/46.png" className="img-fluid" alt="..."/></SwiperSlide> 
      </Swiper>
    </div>
  );
}
export default Carousel5