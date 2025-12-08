
// import React from 'react'
// import certificateone from '../../../../public/images/certificateone.webp'
// import certificate2 from '../../../../public/images/certificate2.webp'
// import certificate3 from '../../../../public/images/certificate3.webp'
// import certificate4 from '../../../../public/images/certificate4.webp'
// import Image from 'next/image'

// const Certificate = () => {
//     return (
//         <div>
//             <div className="wrap-card flex flex-col md:flex-row flex-wrap justify-center md:justify-evenly items-center gap-6 px-4">

//                 <div className="border-none rounded-[19px] card-img flex flex-col md:flex-col items-center gap-4
//                   transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg  p-[10px]">
//                     <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center  p-[10px]  border-1 border-[#6346FA80] rounded-[29px]
//                     transition-all duration-300 hover:bg-[#F5F0FF]">
//                         <p className='text-[#5D38DE]'>
//                             10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
//                         </p>
//                     </div>
//                     <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
//                         <Image
//                             src={certificateone}
//                             alt="Certificate"
//                             width={1000}
//                             height={500}
//                             className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
//                         />
//                     </div>
//                 </div>

//                 <div className="border-none rounded-[19px] card-img flex flex-col md:flex-col items-center gap-4
//                   transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-[10px] ">
//                     <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
//                         <Image
//                             src={certificate2}
//                             alt="Certificate"
//                             width={1000}
//                             height={500}
//                             className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
//                         />
//                     </div>
//                     <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center p-[10px]  border-1 border-[#6346FA80] rounded-[29px]
//                     transition-all duration-300 hover:bg-[#F5F0FF]">
//                         <p className='text-[#5D38DE]'>
//                             10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
//                         </p>
//                     </div>
//                 </div>

//                 <div className="border-none rounded-[19px] card-img flex flex-col items-center gap-4
//                   transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-[10px]">
//                     <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
//                         <Image
//                             src={certificate3}
//                             alt="Certificate"
//                             width={1000}
//                             height={500}
//                             className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
//                         />
//                     </div>
//                 </div>

//                 <div className="border-none rounded-[19px] card-img flex flex-col md:flex-col items-center gap-4
//                   transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg  p-[10px]">
//                     <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
//                         <Image
//                             src={certificate4}
//                             alt="Certificate"
//                             width={1000}
//                             height={500}
//                             className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
//                         />
//                     </div>
//                     <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center p-[10px]  border-1 border-[#6346FA80] rounded-[29px]
//                     transition-all duration-300 hover:bg-[#F5F0FF]">
//                         <p className='text-[#5D38DE]'>
//                             10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
//                         </p>
//                     </div>
//                 </div>

//             </div>


//         </div>
//     )
// }

// export default Certificate
"use client";

import React from "react";
import certificateone from "../../../../public/images/certificateone.webp";
import certificate2 from "../../../../public/images/certificate2.webp";
import certificate3 from "../../../../public/images/certificate3.webp";
import certificate4 from "../../../../public/images/certificate4.webp";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const items = [
    {
        img: certificateone,
        text: "Learners have gained hands-on coding skills, empowering them to build innovative web and software solutions.",
        layout: "text-top",
    },
    {
        img: certificate2,
        text: "Learners mastered digital marketing strategies that help brands grow and succeed in competitive markets.",
        layout: "img-top",
    },
    {
        img: certificate3,
        text: "Handling real dispatch operations with confidence and great performance.",
        layout: "text-top",
    },
    {
        img: certificate4,
        text: "Learners acquired practical logistics knowledge to optimize transport routes and improve freight management.",
        layout: "img-top",
    },
];

const Certificate = () => {
    return (
        <div className="w-full mt-10">

            {/* ⭐ DESKTOP/LAPTOP GRID (4 Cards) */}
            <div
                className="
                    hidden lg:grid 
                    grid-cols-4 
                    gap-6 xl:gap-4 2xl:gap-4 
                    px-6 xl:px-4 2xl:px-4
                    max-w-[1500px] mx-auto
                "
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border-none rounded-[19px] flex flex-col items-center gap-4
                            transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-[10px]
                            max-w-[330px] xl:max-w-[350px] 2xl:max-w-[380px]
                            w-full mx-auto"
                    >

                        {/* ---- TEXT TOP ---- */}
                        {item.layout === "text-top" && item.text && (
                            <div className="text-card text-[18px] sm:text-[20px] max-w-[300px] text-center p-[10px] border-1 border-[#6346FA80] rounded-[29px]
                                transition-all duration-300 hover:bg-[#F5F0FF]"
                            >
                                <p className="text-[#5D38DE]">
                                    <span className="text-black">{item.text}</span>
                                </p>
                            </div>
                        )}

                        {/* ---- IMAGE ---- */}
                        <div className="overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105 w-full">
                            <Image
                                src={item.img}
                                alt="Certificate"
                                width={600}
                                height={380}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* ---- TEXT BOTTOM ---- */}
                        {item.layout === "img-top" && item.text && (
                            <div className="text-card text-[18px] sm:text-[20px] max-w-[300px] text-center p-[10px] border-1 border-[#6346FA80] rounded-[29px]
                                transition-all duration-300 hover:bg-[#F5F0FF]"
                            >
                                <p className="text-[#5D38DE]">
                                    {i == 0 ? "10+" : ""}{" "}
                                    <span className="text-black">{item.text}</span>
                                </p>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            {/* ⭐ MOBILE/TABLET SLIDER */}
            <div className="lg:hidden px-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                    }}
                >
                    {items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="border-none rounded-[19px] flex flex-col items-center gap-4
                                    transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-[10px]"
                            >

                                {/* ---- TEXT TOP ---- */}
                                {item.layout === "text-top" && item.text && (
                                    <div className="text-card text-[18px] sm:text-[20px] max-w-[260px] text-center p-[10px] border-1 border-[#6346FA80] rounded-[29px]
                                        transition-all duration-300 hover:bg-[#F5F0FF]"
                                    >
                                        <p className="text-[#5D38DE]">
                                            10+ <span className="text-black">{item.text.replace("10+ ", "")}</span>
                                        </p>
                                    </div>
                                )}

                                {/* ---- IMAGE ---- */}
                                <div className="overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105 w-full">
                                    <Image
                                        src={item.img}
                                        alt="Certificate"
                                        width={500}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* ---- TEXT BOTTOM ---- */}
                                {item.layout === "img-top" && item.text && (
                                    <div className="text-card text-[18px] sm:text-[20px] max-w-[260px] text-center p-[10px] border-1 border-[#6346FA80] rounded-[29px]
                                        transition-all duration-300 hover:bg-[#F5F0FF]"
                                    >
                                        <p className="text-[#5D38DE]">
                                            10+ <span className="text-black">{item.text.replace("10+ ", "")}</span>
                                        </p>
                                    </div>
                                )}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Certificate;
