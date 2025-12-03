import React from "react";
import Image from "next/image";

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

const services = [
    {
        title: "Graphic Design",
        icon: GraphicIcon,
        color: "#FBBF24",
        img: arrow1,
    },
    {
        title: "Truck Dispatch",
        icon: TruckIcon,
        color: "#60A5FA",
        img: arrows2,
    },
    {
        title: "Video Editing",
        icon: VideoIcon,
        color: "#EC4899",
        img: arrows3,
    },
    {
        title: "Development",
        icon: DevIcon,
        color: "#10B981",
        img: arrows4,
    },
    {
        title: "Digital Marketing",
        icon: MarketingIcon,
        color: "#8B5CF6",
        img: arrows5,
    },
    {
        title: "Internet of things",
        icon: MarketingIcon,
        color: "#8B5CF6",
        img: arrows5,
    },
];

const ServiceCard = ({ title, icon, color, img }) => {
    return (
        <div
            className="
        group relative w-full h-[180px] sm:h-[200px] md:h-[220px] 
        rounded-2xl p-6 flex flex-col justify-between
        bg-[#E4DFFF] border border-[#5D38DE66]
        transition-transform duration-300
        hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(93,56,222,0.4)]
      "
        >
            {/* ICON */}
            <Image
                src={icon}
                alt={title}
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />

            {/* TITLE */}
            <h2 className="text-black text-[20px] font-semibold leading-tight">
                {title}
            </h2>

            {/* Learn More */}
            <p
                className="
          text-black text-[15px] opacity-80 flex justify-between items-center gap-1
          transition-all duration-300 group-hover:gap-3 cursor-pointer
        "
            >
                Learn more{" "}
                <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color }}
                >
                    <Image
                        src={img}
                        alt="arrow"
                        width={40}
                        height={40}
                        priority={true}
                        className="bg-transparent"
                    />
                </span>
            </p>
        </div>
    );
};

export default function ServicesSection() {
    return (

        <div className=" py-10">
            <div
                className="
          w-[90%] max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center
        "
            >
                {services.map((item, index) => (
                    <ServiceCard
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        color={item.color}
                        img={item.img}
                    />
                ))}
            </div>
        </div>

    );
}
