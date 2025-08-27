// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              // core styles
import 'swiper/css/pagination';   // pagination module styles
import 'swiper/css/navigation';   // navigation module styles
import "./Carousel.css"; 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const MySwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={60}
      slidesPerView= {1}
      breakpoints={{
        768: { slidesPerView: 2},
        1024: { slidesPerView: 3},
        1440: { slidesPerView: 3},
      }}
      autoplay={{delay: 3000, disableOnInteraction: true}}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.custom_next',
        prevEl: '.custom_prev',
      }} loop={true}
    >
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614839/E7D31B80-11D4-4BC6-A61A-CBABCFDF2F5C_j7hw5r.jpg"} alt="flowers"/>
        <div className="slide_caption">
            <h3 className="style_name">flat style</h3>
            <p className="caption_desc">flowers arranged in layers </p>
            <p className="caption_desc">$30 - $50</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614838/IMG_6442_lxzihi.jpg"} alt="flowers" />
        <div className="slide_caption">
            <h3 className="style_name">round style</h3>
            <p className="caption_desc">flowers arranged in a balanced, circular design</p>
            <p className="caption_desc">$30 - $50</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"https://res.cloudinary.com/dtnwfs6nm/image/upload/v1755614843/BCE0BF1D-20D3-4782-BAB0-F4BBA79FD6B5_zt3jsj.jpg"} alt="flowers" />
        <div className="slide_caption">
            <h3 className="style_name">shaped style</h3>
            <p className="caption_desc">flowers arranged to form a shape of choice</p>
            <p className="caption_desc">$30 - $50</p>
        </div>
      </SwiperSlide>

            <button className="custom_prev"   
        style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            outline: 'none'
        }}>
        <ArrowCircleLeftOutlinedIcon style={{fontSize: 40}}/>
      </button>
      <button className="custom_next"
        style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            outline: 'none'
        }}>
        <ArrowCircleRightOutlinedIcon style={{fontSize: 40}} />
      </button>
    </Swiper>

  );
};

export default MySwiper;
