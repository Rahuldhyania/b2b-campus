// import React from 'react'
// import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
// import Title from '../UiUx/Title'
// import Image from 'next/image';
// import Description from '../UiUx/Description';
// import Buttons from '../UiUx/Buttons';

// export const logos = [
//     {
//         id: 1,
//         src: "/images/beatum.webp",
//         alt: "ISO Certified"
//     },
//     {
//         id: 2,
//         src: "/images/equatis.webp",
//         alt: "Semrush Academy"
//     },
//     {
//         id: 3,
//         src: "/images/b2b.webp",
//         alt: "Google 5 Star"
//     },
//     {
//         id: 4,
//         src: "/images/softer.webp",
//         alt: "100% Placement"
//     },
//     {
//         id: 5,
//         src: "/images/pixa.png",
//         alt: "HubSpot Academy"
//     },
//     {
//         id: 6,
//         src: "/images/nutrition.webp",
//         alt: "Meta Certification"
//     },
//     {
//         id: 7,
//         src: "/images/bitpixel.webp",
//         alt: "Facebook Blueprint"
//     }
//     ,
//     {
//         id: 7,
//         src: "/images/amr.webp",
//         alt: "Facebook Blueprint"
//     },
//     {
//         id: 7,
//         src: "/images/billsby.webp",
//         alt: "Facebook Blueprint"
//     },
//     {
//         id: 7,
//         src: "/images/fedex.webp",
//         alt: "Facebook Blueprint"
//     }
// ];
// const TopCompanys = () => {
//     return (
//         <div className='main-bg'>
//             <div className="skill-title-container bg-no-repeat bg-bottom py-6 relative mb-[8%]"
//                 style={{ backgroundImage: `url(${titlewhitebg.src})` }}
//             >
//                 <Title
//                     title={'Students Recruited by   <br/> <sapn class="text-primary"> Top Companies </span>'}
//                     text_color={'text-secondary'}
//                 />

//             </div>

//             <div className="w-full">
//                 <div className="flex flex-wrap justify-center gap-[15px] px-[5%] mb-[3%] mt-[3%] place-items-center">

//                     {logos.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-[white] m-[0px] cursor-pointer shadow-sm rounded-xl p-6 flex items-center justify-center border-none rounded-[25px] w-full h-28 max-w-[340px] h-[158px]"
//                         >
//                             <Image
//                                 src={item.src}
//                                 alt={item.alt}
//                                 width={120}
//                                 height={60}
//                                 className="object-contain"
//                             />
//                         </div>
//                     ))}

//                 </div>
//             </div>
//             <Description
//                 description={'Dreaming of your first big placement?'}
//                 text_color={'text-secondary'}
//             />

//             <div className="buttons text-[25px] flex justify-center m-auto mt-[2%]">
//                 <Buttons btnname='Start Your Career Journey Today!' text_color={'text-white'} />
//             </div>
//         </div>
//     )
// }

// export default TopCompanys

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
        alt: "ISO Certified",
        desc: "10+ Students Recruited"
    },
    {
        id: 2,
        src: "/images/equatis.webp",
        alt: "Semrush Academy",
        desc: "15+ Students Recruited"
    },
    {
        id: 3,
        src: "/images/b2b.webp",
        alt: "Google 5 Star",
        desc: "30+ Students Recruited"
    },
    {
        id: 4,
        src: "/images/softer.webp",
        alt: "100% Placement",
        desc: "100+ Students Recruited"
    },
    {
        id: 5,
        src: "/images/pixa.png",
        alt: "HubSpot Academy",
        desc: "20+ Students Recruited"
    },
    {
        id: 6,
        src: "/images/nutrition.webp",
        alt: "Meta Certification",
        desc: "40+ Students Recruited"
    },
    {
        id: 7,
        src: "/images/bitpixel.webp",
        alt: "Facebook Blueprint",
        desc: "10+ Students Recruited"
    },
    {
        id: 8,
        src: "/images/amr.webp",
        alt: "Facebook Blueprint",
        desc: "50+ Students Recruited"
    },
    {
        id: 9,
        src: "/images/billsby.webp",
        alt: "Facebook Blueprint",
        desc: "35+ Students Recruited"
    },
    {
        id: 10,
        src: "/images/fedex.webp",
        alt: "Facebook Blueprint",
        desc: "60+ Students Recruited"
    }
];

const TopCompanys = () => {
    return (
        <div className='main-bg'>
            <div
                className="skill-title-container bg-no-repeat bg-bottom py-6 relative mb-[8%]"
                style={{ backgroundImage: `url(${titlewhitebg.src})` }}
            >
                <Title
                    title={'Students Recruited by   <br/> <span class="text-primary"> Top Companies </span>'}
                    text_color={'text-secondary'}
                />
            </div>

            {/* <div className="w-full">
                <div className="flex flex-wrap justify-center gap-[15px] px-[5%] mb-[3%] mt-[3%] place-items-center">

                    {logos.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white cursor-pointer shadow-sm rounded-[25px] 
                                       flex flex-col justify-between 
                                       w-full max-w-[340px] h-[158px] overflow-hidden"
                        >
       
                            <div className="flex items-center justify-center h-[70%] p-6">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={120}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>

                  
                            <div className="bg-[#6346FA] text-white text-center 
                                            h-[30%] flex items-center justify-center 
                                            text-[16px] font-semibold">
                                {item.desc}
                            </div>
                        </div>
                    ))}

                </div>
            </div> */}
            <div className="w-full">
                <div className="flex flex-wrap justify-center gap-[15px] px-[5%] mb-[3%] mt-[3%] place-items-center">

                    {logos.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white cursor-pointer shadow-sm rounded-[25px] 
                   flex flex-col justify-between 
                   w-full sm:w-[48%] md:w-[32%] lg:w-[23%] max-w-[340px] h-[158px] overflow-hidden
                   transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {/* Logo Section */}
                            <div className="flex items-center justify-center h-[70%] p-6 transition-transform duration-300 hover:scale-110">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={120}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>

                            {/* Purple Description */}
                            <div className="bg-[#6346FA] text-white text-center 
                        h-[30%] flex items-center justify-center 
                        text-[16px] font-semibold
                        transition-colors duration-300 hover:bg-[#7f63ff]">
                                {item.desc}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Description
                description={'Dreaming of your first big placement?'}
                text_color={'text-secondary'}
            />

            <div className="buttons text-[25px] flex justify-center m-auto mt-[2%]">
                <Buttons btnname='Enroll Now' text_color={'text-white'} />
            </div>
        </div>
    )
}

export default TopCompanys
