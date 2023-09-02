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
// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   borderRadius: "7px",
// };
import EventCard from "./eventCard";
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
        style={{
          padding: "5%",
        }}
      >
        {images.map((img) => {
          return (
            <SwiperSlide
              style={{
                borderRadius: "10px",
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                borderRadius: "32px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
              key={img}
            >
              <EventCard img={img}></EventCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
