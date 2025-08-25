// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              // core styles
import 'swiper/css/pagination';   // pagination module styles
import 'swiper/css/navigation';   // navigation module styles
import "./Carousel.css"; 
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const MySwiperAddOns = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={70}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2},
        1024: { slidesPerView: 3},
        1440: { slidesPerView: 4},
      }}
      autoplay={{delay: 3000, disableOnInteraction: true}}
      pagination={{ clickable: true }}
      navigation loop={true}
    >
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614845/EAA2F68F-6D0C-4747-9392-7F03DEC62C1C_dhfpse.jpg"} alt="flowers"/>
        <div className="slide_caption">
            <h3>toppers & ribbon banner</h3>
            <p>decorative pieces placed on top of the flowers, along with a ribbon with personalized phrases</p>
            <p>$3 - $10</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614841/IMG_3518_h7y5ii.jpg"} alt="flowers" />
        <div className="slide_caption">
            <h3>candy</h3>
            <p>sweet treats tucked in among the flowers, arranged into a shape</p>
            <p>$3 - $10</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614842/IMG_3996_hd5dvj.jpg"} alt="flowers" />
        <div className="slide_caption">
            <h3>glitter flowers & crown</h3>
            <p>flowers topped with glitter, along with a crown tucked in</p>
            <p>$5 - $15</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614842/IMG_3122_g91hvy.jpg"} alt="flowers" />
                <div className="slide_caption">
            <h3>butterflies, faux diamonds, toppers, ribbon banner, crown</h3>
            <p>flowers topped with paper butterflies, diamond imitations, decorative figures, a personalized ribbon banner, & a crown</p>
            <p>$10 - $20</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperAddOns;
