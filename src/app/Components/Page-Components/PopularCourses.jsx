"use client";

import React, { useState } from "react";
import ServicesSection from "./ServiceCard";

import GraphicIcon from "../../../../public/images/icon1.webp";
import TruckIcon from "../../../../public/images/icon3.webp";
import icon4 from "../../../../public/images/icon4.webp";
import VideoIcon from "../../../../public/images/icon2.webp";
import DevIcon from "../../../../public/images/icon5.webp";
import icon6 from "../../../../public/images/icon6.webp";
import icon7 from "../../../../public/images/icon7.webp";
import icon8 from "../../../../public/images/icon8.webp";
import icon9 from "../../../../public/images/icon9.webp";
import icon10 from "../../../../public/images/icon10.webp";
import icon11 from "../../../../public/images/icon11.webp";
import icon12 from "../../../../public/images/icon12.webp";
import arrowicon from "../../../../public/images/arrowicon.webp";
import MarketingIcon from "../../../../public/images/MarketingIcon.webp";

import arrow1 from "../../../../public/images/arrow1.webp";
import arrows2 from "../../../../public/images/arrows2.webp";
import arrows3 from "../../../../public/images/arrows3.webp";
import arrows4 from "../../../../public/images/arrows4.webp";
import arrows5 from "../../../../public/images/arrows5.webp";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";

export const Coursesbtn = [
    { id: 1, btn: "All Courses" },
    { id: 2, btn: "Logistics" },
    { id: 5, btn: "Marketing & Bussiness" },
    { id: 3, btn: "Development" },
    { id: 4, btn: "Graphics" },

];

const allCourses = [
    { id: 1, title: "Graphic Design", des: "Create visuals that stand out", category: "Graphics", icon: GraphicIcon, color: "#0A9DFF", buttonText: "Learn more", img: arrowicon },
    { id: 2, title: "Truck Dispatch", des: "Optimized trips, better earnings", category: "logistics", icon: TruckIcon, color: "#60A5FA", buttonText: "Learn more", img: arrows2 },
    { id: 3, title: "IOT", des: "Automate, connect, and control", category: "Development", icon: icon11, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },
    { id: 4, title: "AI Course", des: "Master future-ready skills", category: "Development", icon: icon12, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },
    { id: 8, title: "Web Development", des: "Your vision—built for the web", category: "Development", icon: DevIcon, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },
    { id: 7, title: "Full Stack Development", des: "Building end-to-end digital solutions", category: "Development", icon: icon7, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },
    { id: 11, title: "Wordpress", des: "Build websites fast and easy ", category: "Development", icon: icon9, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },
    { id: 13, title: "ReactJs", des: "Automate, connect, and control", category: "Development", icon: icon11, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },

    { id: 10, title: "Web Designing", des: "Designs that shape great websites", category: "Development", icon: icon8, color: "#0A9DFF", buttonText: "Learn more", img: arrows4 },

    { id: 5, title: "Video Editing", des: "Edit that tells your story", category: "Graphics", icon: VideoIcon, color: "#0A9DFF", buttonText: "Learn more", img: arrow1 },
    { id: 6, title: "Freight Broker", des: "Connecting shippers and carriers", category: "logistics", icon: icon4, color: "#60A5FA", buttonText: "Learn more", img: arrows2 },
    { id: 12, title: "Digital Marketing", des: "Grow your brand online", category: "Marketing & Bussiness", icon: icon10, color: "#0A9DFF", buttonText: "Learn more", img: arrows5 },
];

export default function PopularCourses() {
    const [activeTab, setActiveTab] = useState("All Courses");
    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    const [mobileVisibleCount, setMobileVisibleCount] = useState(5); // mobile pagination

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === "All Courses") {
            setFilteredCourses(allCourses);
        } else {
            setFilteredCourses(allCourses.filter(c => c.category === tab));
        }
        setMobileVisibleCount(5); // reset mobile visible count on tab change
    };

    const handleLoadMore = () => {
        setMobileVisibleCount(prev => prev + 5);
    };

    const mobileCoursesToShow = filteredCourses.slice(0, mobileVisibleCount);

    return (
        <div className="main-bg py-9">
            <div className="relative py-3">
                <img
                    src={titlewhitebg.src}
                    alt="bubble-bg"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[530px] sm:w-[240px] pointer-events-none select-none opacity-90"
                />
                <div className="relative z-10 text-center">
                    <Title
                        title={'<span class="text-primary">Popular </span> Courses'}
                        text_color={'text-secondary'}
                    />
                </div>
            </div>

            {/* Desktop Tabs */}
            <div className="lg:w-[55%] m-auto hidden md:flex flex-wrap justify-center gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
                {Coursesbtn.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleTabClick(item.btn)}
                        className={`px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ease-in-out ${activeTab === item.btn
                            ? "bg-[#6346FA] text-white"
                            : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"
                            }`}
                    >
                        {item.btn}
                    </button>
                ))}
            </div>

            {/* Mobile Tabs */}
            <div className="lg:w-[55%] m-auto flex md:hidden flex-wrap justify-center gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
                {Coursesbtn.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleTabClick(item.btn)}
                        className={`px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ease-in-out ${activeTab === item.btn
                            ? "bg-[#6346FA] text-white"
                            : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"
                            }`}
                    >
                        {item.btn}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="lg:block hidden">
                <ServicesSection courses={filteredCourses} />
            </div>

            {/* Mobile Cards with Load More */}
            <div className="md:hidden">
                <ServicesSection courses={mobileCoursesToShow} />
                {mobileVisibleCount < filteredCourses.length && (
                    <div className="flex justify-center  pb-8">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 rounded-xl bg-[#6346FA] text-white text-[16px] transition-all duration-300 hover:bg-[#4a2fd1]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
