"use client";

import Image from "next/image";
import trainerImg from "../../../../public/images/trainer.webp";
import trainingImg from "../../../../public/images/training.webp";
import supportImg from "../../../../public/images/support.webp";
import successImg from "../../../../public/images/success.jpg";
import Title from "../UiUx/Title";

const features = [
    {
        title: "Expert Trainers",
        description: "Reliable, experienced trainers guiding you throughout your journey.",
        img: trainerImg,
        variant: "A",
    },
    {
        title: "Hands-on Training",
        description: "100% practical, skill-based training designed for real jobs.",
        img: trainingImg,
        variant: "B",
    },
    {
        title: "Career Support",
        description: "Placement focused training with interview prep and life-changing support.",
        img: supportImg,
        variant: "C",
    },
    {
        title: "Success Focused",
        description: "We train for real success, not just certificates.",
        img: successImg,
        variant: "D",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="py-24 bg-gradient-to-r from-purple-50 to-white px-6 md:px-20 max-w-7xl mx-auto">

            <div className="relative z-10 text-center">
                <Title
                    title={'<span class="text-primary">  Why Choose Our </span>Institute '}
                    text_color={'text-secondary'}
                />
            </div>
            <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, idx) => (
                    <Card key={idx} {...feature} />
                ))}
            </div>
        </section>
    );
}

function Card({ title, description, img, variant }) {
    switch (variant) {
        case "A":
            return (
                <div className="relative flex flex-col items-start cursor-pointer group overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                    {/* Circular Image */}
                    <div className="absolute -top-10 -left-10 w-60 h-60 overflow-hidden rounded-full shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                        <Image src={img} alt={title} fill className="object-cover" />
                    </div>

                    {/* Spacer to push content below the image */}
                    <div className="mt-52 px-4 relative z-10">
                        <h3 className="text-2xl font-bold text-purple-800 mb-3 transform -rotate-1">
                            {title}
                        </h3>
                        <p className="text-gray-700 max-w-xs">{description}</p>
                    </div>
                </div>

            );

        case "B":
            return (
                <div className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 h-72">
                    {/* Full image */}
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300 px-4">
                        <h3 className="text-2xl font-extrabold text-white mb-2">{title}</h3>
                        <p className="text-white max-w-xs">{description}</p>
                    </div>
                </div>
            );


        case "C":
            return (

                <div className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-full h-72 overflow-hidden relative">
                        <Image src={img} alt={title} fill className="object-cover" />
                    </div>
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>
                </div>

            );

        case "D":
            return (
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 flex flex-col justify-center items-center text-center px-4">
                        <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">{title}</h3>
                        <p className="text-white max-w-xs drop-shadow-md">{description}</p>
                    </div>
                </div>
            );

        default:
            return null;
    }
}

