import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, icon, color, img }) => {
    return (
        <div
            className="group relative w-full h-[200px] rounded-2xl p-6 
            flex flex-col justify-between bg-[#E4DFFF] border border-[#5D38DE66]
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
            <Image
                src={icon}
                alt={title}
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />

            <h2 className="text-black text-[20px] ">{title}</h2>

            <p className="text-black text-[15px] opacity-80 flex justify-between items-center gap-1 group-hover:gap-3">
                Learn more
                <Image
                    src={img}
                    alt="arrow"
                    width={40}
                    height={40}
                    className="transition-transform group-hover:translate-x-2"
                />
            </p>
        </div>
    );
};

export default function ServicesSection({ courses }) {
    return (
        <div className="py-10">
            <div className="w-[90%] max-w-7xl mx-auto grid 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((item) => (
                    <ServiceCard
                        key={item.id}
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
