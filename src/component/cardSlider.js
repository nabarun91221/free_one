"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "7px",
};
export default function CardSlider({ images }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        initialSlide={1}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ paddingLeft: "5%", paddingRight: "5%" }}
      >
        {images.map((img) => {
          return (
            <SwiperSlide style={{ borderRadius: "7px" }} key={img}>
              <Image
                style={slideStyles}
                placeholder="blur"
                src={img}
                alt="image"
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
