import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../Carousel/carousel.css"




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel3() {
    return (
        <div className='carousel3'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/p1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/p3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/p2.png" alt="" /></SwiperSlide>
            </Swiper>

        </div>


    )
}
export default Carousel3
