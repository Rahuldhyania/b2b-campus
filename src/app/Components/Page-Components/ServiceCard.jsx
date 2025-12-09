import React from "react";
import Image from "next/image";
import arrowiconcvgv from "../../../../public/images/arrowicon.webp";
const ServiceCard = ({ title, icon, color, arrowicon, des, buttonText,clickscroll }) => {
    return (
        <div
            className="group relative w-full ] rounded-2xl p-6 md:p-3 
            flex flex-col justify-between bg-white border border-[#5D38DE66]
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#CEC5FF] gap-y-2"
        >
            <Image
                src={icon}
                alt={title}
                width={1000}
                height={500}
                className="transition-transform duration-300 group-hover:scale-110 max-w-16"
                style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />

            <h2 className="text-[#6346FA] text-2xl ">{title}</h2>
            <p className="text-black text-[14px]" >{des}</p>

            <div className="flex justify-between items-center bg-white border border-[#6346FA4D] rounded-xl p-[2%] cursor-pointer transition-all duration-300  hover:bg-[#F3F0FF] hover:shadow-md hover:-translate-y-1 "
            onClick={clickscroll}
            >
                <span className="text-[18px] md:text-[16px] font-medium text-[#1C1C1C]">
                    {buttonText}
                </span>

                <div className="w-10 h-10 sm:w-7 sm:h-7 rounded-full bg-[#CEC5FF] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 hover:bg-[#b8aaff]">
                    <Image
                        src={arrowiconcvgv}
                        alt="arrow"
                        width={12}
                        height={12}
                    />
                </div>
            </div>
        </div>
    );
};

export default function ServicesSection({ courses ,clickscroll }) {
    return (
        <div className="py-10">
            <div className="md:w-[90%] cus_container grid 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {courses.map((item) => (
                    <ServiceCard
                        key={item.id}
                        title={item.title}
                        des={item.des}
                        icon={item.icon}
                        color={item.color}
                        buttonText={item.buttonText}
                        img={item.arrowIcon}
                        clickscroll={clickscroll}
                    />
                ))}
            </div>
        </div>
    );
}
