import React from 'react'
import Title from '../UiUx/Title'
import Image from 'next/image';
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Description from '../UiUx/Description';

export const logos = [
    {
        id: 1,
        src: "/images/iso.webp",
        alt: "ISO Certified"
    },
    {
        id: 2,
        src: "/images/semrush.webp",
        alt: "Semrush Academy"
    },
    {
        id: 3,
        src: "/images/google.webp",
        alt: "Google 5 Star"
    },
    {
        id: 4,
        src: "/images/placement.webp",
        alt: "100% Placement"
    },
    {
        id: 5,
        src: "/images/hubspot.webp",
        alt: "HubSpot Academy"
    },
    {
        id: 6,
        src: "/images/meta.webp",
        alt: "Meta Certification"
    },
    {
        id: 7,
        src: "/images/facebook.webp",
        alt: "Facebook Blueprint"
    }
];


const Professionalskill = () => {
    return (
        <div className="bg-[linear-gradient(0deg,rgba(247,247,245,1)_0%,rgba(221,214,255,1)_100%)]  
        style={{ backgroundSize: '100% 1300px' }}">
            <div className="skill-title-container bg-no-repeat bg-bottom py-6"
                style={{ backgroundImage: `url(${titlewhitebg.src})` }}
            >
                <Title
                    title={'We help students build real <br/> <sapn class="text-primary"> professional skills </span>'}
                    text_color={'text-secondary'}
                />
                <Description
                    description={'Learn what works in the real world, not just in theory'}
                    text_color={'text-secondary'}
                />
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-center gap-[15px] px-[5%] place-items-center">

                    {logos.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[white] m-[0px] cursor-pointer shadow-sm rounded-xl p-6 flex items-center justify-center border-none rounded-[25px] w-full h-28 max-w-[340px] h-[158px]"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>


    )
}

export default Professionalskill
