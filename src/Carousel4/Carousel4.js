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

function Carousel4() {
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
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/img32.webp" alt="" /></SwiperSlide>
               <SwiperSlide><img src="https://gleritaly.sirv.com/gler/img34.webp" alt="" /></SwiperSlide>
            </Swiper>
           
        </div>


    )
}
export default Carousel4
