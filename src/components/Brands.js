import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './brands.css';
// import required modules
import { Pagination } from 'swiper';
import styled from 'styled-components';
// all brands images
import Brand1 from '../images/image29.png';
import Brand2 from '../images/image30.png';
import Brand3 from '../images/image31.png';
import Brand4 from '../images/image33.png';
import Brand5 from '../images/image32.png';

const Brands = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Brand1} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand2} style={{ width: '200px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand3} style={{ width: '120px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand4} style={{ width: '230px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand5} style={{ width: '200px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand1} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand2} style={{ width: '200px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand3} style={{ width: '120px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand4} style={{ width: '230px' }} alt="Brand1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Brand5} style={{ width: '200px' }} alt="Brand1" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Brands;
