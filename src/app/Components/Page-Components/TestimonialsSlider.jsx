// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import qoutes from '../../../../public/images/qoutes.webp'
// import leftarrow from '../../../../public/images/leftarrow.webp'
// import sliderrightarrow from '../../../../public/images/sliderrightarrow.webp'
// import leaf1 from "../../../../public/images/leaf.webp";
// import leaf2 from "../../../../public/images/leaf2.webp";


// const TestimonialsSlider = () => {
//     const data = [
//         {
//             id: 1,
//             name: "Aditya Kapoor",
//             image: "/images/sliderdpman.webp",
//             stars: 5,
//             review:
//                 "Hi My name is Aditya Kapoor. I have completed my graduation then I joined Web Designing course in B2B Campus. I think it the best institute for learning web designing and faculty is very very good. The way they are teaching the subject is awesome. So if you want to join web designing course B2B Campus is the Best.",
//         },
//         {
//             id: 2,
//             name: "Aditya Kapoor",
//             image: "/images/sliderdpman.webp",
//             stars: 5,
//             review:
//                 "Hi My name is Aditya Kapoor. I have completed my graduation then I joined Web Designing course in B2B Campus. I think it the best institute for learning web designing and faculty is very very good. The way they are teaching the subject is awesome. So if you want to join web designing course B2B Campus is the Best.",
//         },
//         // Add more slides if needed
//     ];

//     const statsData = [
//         {
//             leaf1: leaf1,
//             value: "1500+",
//             text: "Learners trained with practical skills",
//             leaf: leaf2,
//         },
//         {
//             leaf1: leaf1,
//             value: "10,000+",
//             text: "Hours of real project based learning",
//             leaf: leaf2,
//         },
//         {
//             leaf1: leaf1,
//             value: "12+",
//             text: "Industry-focused courses available",
//             leaf: leaf1,
//         },
//         {
//             leaf1: leaf1,
//             value: "98%",
//             text: "Student satisfaction & positive feedback",
//             leaf: leaf2,
//         },
//     ];

//     return (
//         //    
//         <div>
//             <div className="w-full flex justify-center py-10">
//                 <div className="w-[90%] md:w-[85%] bg-[#EFE8FF] rounded-3xl py-8 px-6 
//                       flex flex-col md:flex-row items-center justify-between gap-8">

//                     {statsData.map((item, index) => (
//                         <div key={index} className="flex items-center gap-8">


//                             <div className="leaf1">
//                                 <Image
//                                     src={item.leaf1}
//                                     width={22}
//                                     height={77}
//                                     className="mt-2 opacity-70"
//                                     alt=""
//                                 />
//                             </div>


//                             {/* Item */}
//                             <div className="flex flex-col items-center text-center">
//                                 <h2 className="text-3xl font-bold text-[#5A3DFA]">{item.value}</h2>
//                                 <p className="text-gray-700 text-sm mt-1">{item.text}</p>
//                             </div>

//                             <div className="leaf2">
//                                 <Image
//                                     src={item.leaf}
//                                     width={22}
//                                     height={77}
//                                     className="mt-2 opacity-70"
//                                     alt=""
//                                 />
//                             </div>

//                             {/* Divider (only show between items in desktop) */}
//                             {index !== statsData.length - 1 && (
//                                 <div className="hidden md:block w-[1px] h-16 bg-[#C9B8FF]"></div>
//                             )}
//                         </div>
//                     ))}

//                 </div>
//             </div>
//             <div className="relative w-full flex justify-center py-10">

//                 <div className="w-[90%] md:w-[70%] relative">

//                     {/* Custom Left Arrow */}
//                     <div className="custom-prev hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 left-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
//                         <Image
//                             src={leftarrow}
//                             width={1000}
//                             height={500}
//                             className="w-[10px] h-[10px]"
//                             alt="Prev"
//                         />
//                     </div>

//                     {/* Custom Right Arrow */}
//                     <div className="custom-next hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 right-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
//                         <Image
//                             src={sliderrightarrow}
//                             width={100}
//                             height={500}
//                             className="w-[10px] h-[10px]"
//                             alt="Next"
//                         />
//                     </div>


//                     {/* Swiper Slider */}
//                     <Swiper
//                         modules={[Navigation, Pagination]}
//                         navigation={{
//                             nextEl: ".custom-next",
//                             prevEl: ".custom-prev",
//                         }}
//                         pagination={{ clickable: true }}
//                         loop={true}
//                         className="mySwiper"
//                     >
//                         {data.map((item) => (
//                             <SwiperSlide key={item.id}>
//                                 <div className="bg-white  rounded-[44px] p-[11%] border-2 border-[#6346FA80] shadow-md transition-transform duration-500 hover:shadow-xl hover:-translate-y-2">
//                                     <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

//                                         <Image
//                                             src={item.image}
//                                             width={90}
//                                             height={90}
//                                             className="rounded-full transition-transform duration-500 hover:scale-110"
//                                             alt="user"
//                                         />

//                                         <div className="text-center sm:text-left">
//                                             <h2 className="text-[27px] font-bold text-[#5D38DE]">{item.name}</h2>
//                                             <div className="flex justify-center sm:justify-start">
//                                                 {Array(item.stars).fill().map((_, i) => (
//                                                     <span key={i} className="text-yellow-500 text-[30px]">★</span>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                     </div>

//                                     <p className="mt-4 text-gray-700 text-[18px] sm:text-[20px] leading-relaxed text-center sm:text-left">
//                                         {item.review}
//                                     </p>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                 </div>

//                 {/* Top Right Quotes Icon */}
//                 <div className="absolute right-[14%] top-[20px] z-10 hidden sm:block">
//                     <Image
//                         src={qoutes}
//                         width={149}
//                         height={128}
//                         alt="quotes"
//                         className="transition-transform duration-500 hover:scale-110"
//                     />
//                 </div>

//                 {/* Swiper Default Arrows Already Styled */}
//                 <style jsx global>{`
//     .swiper-button-prev,
//     .swiper-button-next {
//       width: 35px;
//       height: 35px;
//       background: white;
//       border-radius: 50%;
//       border: 2px solid #4A3AFF;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: #000 !important;
//       transition: transform 0.3s, background 0.3s;
//     }
//     .swiper-button-prev:hover,
//     .swiper-button-next:hover {
//       background: #4A3AFF;
//       color: #fff !important;
//       transform: scale(1.1);
//     }

//     .swiper-pagination-bullet {
//       background: #a78bfa;
//       opacity: 1;
//     }
//     .swiper-pagination-bullet-active {
//       background: #4A3AFF;
//       width: 25px;
//       border-radius: 10px;
//     }
//   `}</style>

//             </div>
//         </div>
//     );
// };

// export default TestimonialsSlider;

"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import qoutes from '../../../../public/images/qoutes.webp';
import leftarrow from '../../../../public/images/leftarrow.webp';
import sliderrightarrow from '../../../../public/images/sliderrightarrow.webp';
import leaf1 from "../../../../public/images/leaf.webp";
import leaf2 from "../../../../public/images/leaf2.webp";

const TestimonialsSlider = () => {
    const data = [
        {
            id: 1,
            name: "Sanjeev Kumar",
            image: "/images/sanjeevkumar.webp",
            stars: 5,
            review:
                "I have joined B2B CAMPUS for training in video editing, and I am fully satisfied. Qualified and cooperative staff. Specially, my trainer's teaching style is very easy to understand. According to my opinion, this is the best IT training centre.",
        },
        {
            id: 2,
            name: "Babli",
            image: "", // No image, placeholder will show
            stars: 5,
            review:
                "I completed a 3-month Digital Marketing course at B2B Campus. It was a fantastic learning experience. The curriculum was well-structured, covering Google Ads, Meta Ads, SEO, etc. Trainers were knowledgeable and supportive.",
        },
        {
            id: 3,
            name: "Sushmita Sharma",
            image: "", // No image, placeholder will show
            stars: 5,
            review:
                "Im currently learning the Digital Marketing course at B2B Campus, and its been a great experience so far The trainers are knowledgeable, and the course covers practical, realworld strategies",
        },
        {
            id: 3,
            name: "Tanish Kumar",
            image: "", // No image, placeholder will show
            stars: 5,
            review:
                "Excellent training at B2B Campus! The instructors were knowledgeable and supportive.The program was designed in a very practical and hands-on manner, which helped me gain valuable skills that I can use in",
        },
        // Add more slides here
    ];

    const statsData = [
        {
            leaf1: leaf1,
            value: "1485+",
            text: "Learners trained with practical skills",
            leaf: leaf2,
        },
        {
            leaf1: leaf1,
            value: "9,874+",
            text: "Hours of real project based learning",
            leaf: leaf2,
        },
        {
            leaf1: leaf1,
            value: "12+",
            text: "Industry-focused courses available",
            leaf: leaf1,
        },
        {
            leaf1: leaf1,
            value: "98%",
            text: "Student satisfaction & positive feedback",
            leaf: leaf2,
        },
    ];

    return (
        <div>
            {/* Stats Section */}
            <div className="w-full flex justify-center py-10">
                <div className="w-[90%] md:w-[85%] bg-[#EFE8FF] rounded-3xl py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
                    {statsData.map((item, index) => (
                        <StatItem key={index} item={item} isLast={index === statsData.length - 1} />
                    ))}
                </div>
            </div>

            {/* Testimonials Slider */}
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
                    <div className="custom-next hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 right-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
                        <Image
                            src={sliderrightarrow}
                            width={100}
                            height={500}
                            className="w-[10px] h-[10px]"
                            alt="Next"
                        />
                    </div>

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
                                <div className="bg-white rounded-[44px] p-[11%] border-2 border-[#6346FA80] shadow-md transition-transform duration-500 hover:shadow-xl hover:-translate-y-2">
                                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

                                        {/* User Image or Placeholder */}
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                width={90}
                                                height={90}
                                                className="rounded-full transition-transform duration-500 hover:scale-110"
                                                alt={item.name}
                                            />
                                        ) : (
                                            <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-purple-200 text-white text-3xl font-bold">
                                                {item.name[0].toUpperCase()}
                                            </div>
                                        )}

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

                {/* Swiper Custom Styling */}
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
        </div>
    );
};

function StatItem({ item, isLast }) {
    const parseValue = (val) => {
        if (typeof val === "number") return val;
        let cleaned = val.replace(/[+, %]/g, "").replace(/,/g, "");
        return parseInt(cleaned) || 0;
    };

    const numericValue = parseValue(item.value);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const duration = 1500;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const progressPercent = Math.min(progress / duration, 1);
            setCount(Math.floor(progressPercent * numericValue));
            if (progress < duration) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [numericValue]);

    const suffix = item.value.replace(/[0-9,]/g, "");

    return (
        <div className="flex items-center gap-8">
            <div className="leaf1">
                <Image
                    src={item.leaf1}
                    width={22}
                    height={77}
                    className="mt-2 opacity-70"
                    alt=""
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-[#5A3DFA]">{count.toLocaleString()}{suffix}</h2>
                <p className="text-gray-700 text-sm mt-1">{item.text}</p>
            </div>

            <div className="leaf2">
                <Image
                    src={item.leaf}
                    width={22}
                    height={77}
                    className="mt-2 opacity-70"
                    alt=""
                />
            </div>

            {!isLast && <div className="hidden md:block w-[1px] h-16 bg-[#C9B8FF]"></div>}
        </div>
    );
}

export default TestimonialsSlider;

