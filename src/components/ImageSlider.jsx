"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ImageSlider = () => {
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);

    const images = Array(8).fill("/image.png");

    const handleMouseEnter = (swiperRef) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = (swiperRef) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (
        <section className="image-slider-section is__section">
            <Swiper
                ref={swiperRef1}
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onMouseEnter={() => handleMouseEnter(swiperRef1)}
                onMouseLeave={() => handleMouseLeave(swiperRef1)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-wrapper">
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                ref={swiperRef2}
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onMouseEnter={() => handleMouseEnter(swiperRef2)}
                onMouseLeave={() => handleMouseLeave(swiperRef2)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-wrapper">
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-2" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ImageSlider;