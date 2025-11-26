import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import leaf from "../../../../public/images/leaf.webp";
import Certificate from './Certificate';
import Description from '../UiUx/Description';
const items = [
    {
        icon: "/images/leaf.webp",
        title: "1500+",
        subtitle: "Learners trained with practical skills",
        icon2: "/images/leaf2.webp"
    },
    {
        icon: "/images/leaf.webp",
        title: "10,000+",
        subtitle: "Hours of real project based learning",
        icon2: "/images/leaf2.webp"
    },
    {
        icon: "/images/leaf.webp",
        title: "12+",
        subtitle: "Industry-focused courses available",
        icon2: "/images/leaf2.webp"
    },
    ,
    {
        icon: "/images/leaf.webp",
        title: "98%",
        subtitle: "Student satisfaction & positive feedback",
        icon2: "/images/leaf2.webp"
    }
];
const CampusProgram = () => {
    return (
        <div>
            <div className="skill-title-container  bg-[length:43%] bg-no-repeat bg-top py-6 relative mb-[8%]"
                style={{ backgroundImage: `url(${smallbublebg.src})` }}
            >
                <Title
                    title={'<span class="text-primary">B2B Campus Programs </span> <br/>  Trained 100+ Learners Through '}
                    text_color={'text-secondary'}
                />
                <Description
                    description={'Helping learners gain the skills, confidence, and direction to <br /> move ahead in their careers.'}
                    text_color={'text-secondary'}
                />
            </div>
            <Certificate />

            <div className="w-full relative bottom-[56px] m-auto  max-w-[1650px] p-[1%] border-none rounded-[50px] mt-[2%] bg-[#E9E5FF] flex justify-between items-center ">

                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center w-full justify-center group relative"
                    >


                        <div className="wrap-div flex justify-center items-center gap-10 ">
                            <div className=" flex justify-center items-center rounded-[50px]  h-[76px] w-[76px] ">
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="w-[53px] h-[53px] object-contain"
                                />
                            </div>
                            <div className='text-center '>
                                <h3 className="text-[#6346FA] text-[36px]">
                                    {item.title}
                                </h3>
                                <p className=" text-[17px]">{item.subtitle}</p>
                            </div>
                            <div className=" flex justify-center items-center rounded-[50px]  h-[76px] w-[76px] ">
                                <img
                                    src={item.icon2}
                                    alt="icon"
                                    className="w-[53px] h-[53px] object-contain"
                                />
                            </div>
                        </div>



                    </div>
                ))}

            </div>
        </div>
    )
}

export default CampusProgram
