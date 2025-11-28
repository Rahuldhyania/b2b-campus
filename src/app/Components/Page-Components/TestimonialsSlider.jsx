"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import qoutes from '../../../../public/images/qoutes.webp'
import leftarrow from '../../../../public/images/leftarrow.webp'
import sliderrightarrow from '../../../../public/images/sliderrightarrow.webp'

const TestimonialsSlider = () => {
    const data = [
        {
            id: 1,
            name: "Aditya Kapoor",
            image: "/images/sliderdpman.webp",
            stars: 5,
            review:
                "Hi, My name is Aditya Kapoor. I have completed my graduation then I joined Web Designing course in B2B Campus. I think it's the best institute for learning web designing and faculty is very very good. The way they are teaching the subject is awesome. So if you want to join web designing course, B2B Campus is the Best.",
        },
        {
            id: 2,
            name: "Aditya Kapoor",
            image: "/images/sliderdpman.webp",
            stars: 5,
            review:
                "Hi, My name is Aditya Kapoor. I have completed my graduation then I joined Web Designing course in B2B Campus. I think it's the best institute for learning web designing and faculty is very very good. The way they are teaching the subject is awesome. So if you want to join web designing course, B2B Campus is the Best.",
        },
        // Add more slides if needed
    ];

    return (
        //    
        <div className="relative w-full flex justify-center py-10">

            <div className="w-[90%] md:w-[70%] relative">

                {/* Custom Left Arrow */}
                <div className="custom-prev hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 left-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
                    <Image
                        src={leftarrow}
                        width={1000}
                        height={500}
                        className="w-[10px] h-[10px]"
                        alt="Prev"
                    />
                </div>

                {/* Custom Right Arrow */}
                <div className="custom-next hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 right-[-50px] -translate-y-1/2 cursor-pointer z-20
    transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
                    <Image
                        src={sliderrightarrow}
                        width={100}
                        height={500}
                        className="w-[10px] h-[10px]"
                        alt="Next"
                    />
                </div>


                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white p-8 rounded-[44px] p-[11%] border-2 border-[#6346FA80] shadow-md relative
                          transition-transform duration-500 hover:shadow-xl hover:-translate-y-2">
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

                                    <Image
                                        src={item.image}
                                        width={90}
                                        height={90}
                                        className="rounded-full transition-transform duration-500 hover:scale-110"
                                        alt="user"
                                    />

                                    <div className="text-center sm:text-left">
                                        <h2 className="text-[27px] font-bold text-[#5D38DE]">{item.name}</h2>
                                        <div className="flex justify-center sm:justify-start">
                                            {Array(item.stars).fill().map((_, i) => (
                                                <span key={i} className="text-yellow-500 text-[30px]">★</span>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                <p className="mt-4 text-gray-700 text-[18px] sm:text-[20px] leading-relaxed text-center sm:text-left">
                                    {item.review}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* Top Right Quotes Icon */}
            <div className="absolute right-[14%] top-[20px] z-10 hidden sm:block">
                <Image
                    src={qoutes}
                    width={149}
                    height={128}
                    alt="quotes"
                    className="transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Swiper Default Arrows Already Styled */}
            <style jsx global>{`
    .swiper-button-prev,
    .swiper-button-next {
      width: 35px;
      height: 35px;
      background: white;
      border-radius: 50%;
      border: 2px solid #4A3AFF;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000 !important;
      transition: transform 0.3s, background 0.3s;
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      background: #4A3AFF;
      color: #fff !important;
      transform: scale(1.1);
    }

    .swiper-pagination-bullet {
      background: #a78bfa;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #4A3AFF;
      width: 25px;
      border-radius: 10px;
    }
  `}</style>

        </div>

    );
};

export default TestimonialsSlider;
