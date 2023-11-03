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

function Carousel2() {
    return (
        <div className='carousel2'>
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
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/tseries2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/t3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://gleritaly.sirv.com/gler/t4.png" alt="" /></SwiperSlide>  
            </Swiper>
        </div>

        
    )
}
export default Carousel2
