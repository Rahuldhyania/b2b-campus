// import React from 'react'
// import Title from '../UiUx/Title'
// import Globaltitle from '../UiUx/Globaltitle';
// import CourseCard from './CourseCard';
// import smallbublebg from "../../../../public/images/smallbublebg.webp";
// import Buttons from '../UiUx/Buttons';
// import ServicesSection from './ServiceCard';


// export const Coursesbtn = [
//     {
//         id: 1,
//         btn: "All Courses",

//     },
//     {
//         id: 1,
//         btn: "Development",

//     },
//     {
//         id: 2,
//         btn: "Truck Dispatch",

//     },
//     {
//         id: 3,
//         btn: "Video Editing",

//     },
//     {
//         id: 4,
//         btn: "Graphic Design ",

//     },
//     {
//         id: 5,
//         btn: "Digital Marketing",

//     },
// ];

// const PopularCourses = () => {
//     return (
//         <div className=' main-bg'>
//             <div className="skill-title-container bg-no-repeat   bg-bottom py-6"
//                 style={{
//                     backgroundImage: `url(${smallbublebg.src}) `,
//                     backgroundSize: '732px auto'
//                 }}
//             >
//                 <Title
//                     title={'Popular  <sapn class="text-primary"> Courses </span>'}
//                     text_color={'text-secondary'}
//                 />
//             </div>
//             <div className="w-full ">
//                 <div className="flex flex-wrap justify-center items-center gap-[10px] w-[70%]
//                   p-[11px] m-auto border-none rounded-[30px] place-items-center bg-[#CEC5FF]">

//                     {Coursesbtn.map((item) => (
//                         <div key={item.id} className="cursor-pointer">
//                             <p className="bg-[#E4DFFF] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 
//     p-[16px] sm:p-[17px] md:p-[18px] coures-btn rounded-[20px] transition-all duration-300 ease-in-out 
//     hover:bg-[#6346FA] hover:text-white hover:scale-105 hover:shadow-lg">
//                                 {item.btn}
//                             </p>
//                         </div>
//                     ))}

//                 </div>
//             </div>


//             <ServicesSection />

//             <div className="buttons text-[25px] flex justify-center m-auto sm:mb-0">
//                 <Buttons btnname='Start Your Career Journey Today!' text_color={'text-white'} />
//             </div>

//         </div>
//     )
// }

// export default PopularCourses

"use client";

import React, { useState } from "react";
import ServicesSection from "./ServiceCard";

import GraphicIcon from "../../../../public/images/GraphicIcon.webp";
import TruckIcon from "../../../../public/images/TruckIcon.webp";
import VideoIcon from "../../../../public/images/VideoIcon.webp";
import DevIcon from "../../../../public/images/deveicon.webp";
import MarketingIcon from "../../../../public/images/MarketingIcon.webp";

import arrow1 from "../../../../public/images/arrow1.webp";
import arrows2 from "../../../../public/images/arrows2.webp";
import arrows3 from "../../../../public/images/arrows3.webp";
import arrows4 from "../../../../public/images/arrows4.webp";
import arrows5 from "../../../../public/images/arrows5.webp";

export const Coursesbtn = [
    { id: 1, btn: "All Courses" },
    { id: 2, btn: "Development" },
    { id: 3, btn: "logistics" },
    { id: 4, btn: "Graphics" },
    { id: 5, btn: "Marketing & Bussiness" },
];

const allCourses = [
    { id: 1, title: "Graphic Design", category: "Graphics", icon: GraphicIcon, color: "#FBBF24", img: arrow1 },
    { id: 2, title: "Video Editing", category: "Graphics", icon: GraphicIcon, color: "#FBBF24", img: arrow1 },

    { id: 3, title: "Truck Dispatch", category: "logistics", icon: TruckIcon, color: "#60A5FA", img: arrows2 },
    { id: 4, title: "Freight Broker", category: "logistics", icon: TruckIcon, color: "#60A5FA", img: arrows2 },




    { id: 5, title: "Full Stack Development", category: "Development", icon: DevIcon, color: "#10B981", img: arrows4 },
    { id: 6, title: "Web Development", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 7, title: "Python / Java ", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 8, title: "Web Designing ", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 9, title: "Wordpress", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 10, title: "C & C++", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 11, title: "IOT", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },
    { id: 12, title: "AI Course", category: "Development", icon: DevIcon, color: "#0A9DFF", img: arrows4 },

    { id: 13, title: "Digital Marketing", category: "Marketing & Bussiness", icon: MarketingIcon, color: "#8B5CF6", img: arrows5 },
];

export default function PopularCourses() {

    const [activeTab, setActiveTab] = useState("All Courses");
    const [filteredCourses, setFilteredCourses] = useState(allCourses);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === "All Courses") {
            setFilteredCourses(allCourses);
        } else {
            setFilteredCourses(allCourses.filter(c => c.category === tab));
        }
    };

    return (
        <div className="main-bg py-9">

            {/* Tabs */}
            <div className="w-[55%] m-auto flex flex-wrap justify-center gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
                {Coursesbtn.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            handleTabClick(item.btn);
                            setActiveTab(item.btn);
                        }}
                        className={`
                    px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ease-in-out
                    ${activeTab === item.btn
                                ? "bg-[#6346FA] text-white"
                                : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"}
                `}
                    >
                        {item.btn}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <ServicesSection courses={filteredCourses} />
        </div>



    );
}
