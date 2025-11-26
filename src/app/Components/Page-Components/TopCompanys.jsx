import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Title from '../UiUx/Title'
import Image from 'next/image';
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';

export const logos = [
    {
        id: 1,
        src: "/images/beatum.webp",
        alt: "ISO Certified"
    },
    {
        id: 2,
        src: "/images/equatis.webp",
        alt: "Semrush Academy"
    },
    {
        id: 3,
        src: "/images/b2b.webp",
        alt: "Google 5 Star"
    },
    {
        id: 4,
        src: "/images/softer.webp",
        alt: "100% Placement"
    },
    {
        id: 5,
        src: "/images/pixa.png",
        alt: "HubSpot Academy"
    },
    {
        id: 6,
        src: "/images/nutrition.webp",
        alt: "Meta Certification"
    },
    {
        id: 7,
        src: "/images/bitpixel.webp",
        alt: "Facebook Blueprint"
    }
    ,
    {
        id: 7,
        src: "/images/amr.webp",
        alt: "Facebook Blueprint"
    },
    {
        id: 7,
        src: "/images/billsby.webp",
        alt: "Facebook Blueprint"
    },
    {
        id: 7,
        src: "/images/fedex.webp",
        alt: "Facebook Blueprint"
    }
];
const TopCompanys = () => {
    return (
        <div className='main-bg'>
            <div className="skill-title-container bg-no-repeat bg-bottom py-6 relative mb-[8%]"
                style={{ backgroundImage: `url(${titlewhitebg.src})` }}
            >
                <Title
                    title={'Students Recruited by   <br/> <sapn class="text-primary"> Top Companies </span>'}
                    text_color={'text-secondary'}
                />

            </div>

            <div className="w-full">
                <div className="flex flex-wrap justify-center gap-[15px] px-[5%] mb-[3%] mt-[3%] place-items-center">

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
            <Description
                description={'Dreaming of your first big placement?'}
                text_color={'text-secondary'}
            />

            <div className="buttons text-[25px] flex justify-center m-auto mt-[2%]">
                <Buttons btnname='Start Your Career Journey Today!' text_color={'text-white'} />
            </div>
        </div>
    )
}

export default TopCompanys
