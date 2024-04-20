import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { slide } from "../../Data/Data";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="mySwiper"
        >
          {slide.map((slider) => (
            <SwiperSlide>
              <div key={slider.id}>
                <img src={slider.cover} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
