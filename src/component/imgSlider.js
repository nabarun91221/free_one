"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Carousel = ({ images }) => {
  return (
    <>
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image style={slideStyles} placeholder="blur" src={images[0]}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image style={slideStyles} placeholder="blur" src={images[1]}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image style={slideStyles} placeholder="blur" src={images[2]}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
