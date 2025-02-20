"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MoveLeft, MoveRight, Quote } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";

export default function TestimonialSlider({testimonials}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (mainSwiperRef.current && prevRef.current && nextRef.current) {
            mainSwiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            mainSwiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            mainSwiperRef.current.swiper.navigation.init();
            mainSwiperRef.current.swiper.navigation.update();
        }
    }, [thumbsSwiper]);

    return (
        <section className="testimonials is__section">
            <div className="container text__center">
                <span className="border-accent"></span>
                <h2 className="heading is__heading text__thin">
                    Why customers love <br /> <strong className="highlight">Working with us</strong>
                </h2>
                <Swiper
                    ref={mainSwiperRef}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs, Navigation]}
                    className="testimonial-slider"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <p className="review_text">
                                <span className="quote_1"><Quote /></span>
                                {testimonial.review}
                                <span className="quote_2"><Quote /></span>
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={7}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="testimonial-slider-thumbs"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="client_data has__flex flex__column items__center">
                                <div className="reviewer_image">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="reviewer-img"
                                    />
                                </div>
                                <p>{"⭐".repeat(testimonial.rating)}</p>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <span ref={prevRef} className="left navigation">
                    <MoveLeft />
                </span>
                <span ref={nextRef} className="right navigation">
                    <MoveRight />
                </span>
            </div>
        </section>
    );
}