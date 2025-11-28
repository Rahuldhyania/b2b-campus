import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import leaf from "../../../../public/images/leaf.webp";
import Certificate from './Certificate';
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';
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
        <div className='bg-[#F7F7F5]'>
            <div className="skill-title-container  bg-[length:43%] bg-no-repeat bg-top py-6 relative"
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
            <div className="buttons text-[25px] flex justify-center m-auto mb-[25%] sm:mb-0">
                <Buttons btnname='Get Skilled with B2B Campus' text_color={'text-white'} />
            </div>


        </div>
    )
}

export default CampusProgram
