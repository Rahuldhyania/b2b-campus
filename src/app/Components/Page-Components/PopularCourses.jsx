import React from 'react'
import Title from '../UiUx/Title'
import Globaltitle from '../UiUx/Globaltitle';
import CourseCard from './CourseCard';
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Buttons from '../UiUx/Buttons';
import ServicesSection from './ServiceCard';


export const Coursesbtn = [
    {
        id: 1,
        btn: "Graphic Design",

    },
    {
        id: 2,
        btn: "Truck Dispatch",

    },
    {
        id: 3,
        btn: "Video Editing",

    },
    {
        id: 4,
        btn: "Development",

    },
    {
        id: 5,
        btn: "Digital Marketing",

    },
];

const PopularCourses = () => {
    return (
        <div className=' main-bg'>
            <div className="relative py-12 flex justify-center items-center">

                {/* Background Bubble Image */}
                <img
                    src={titlewhitebg.src}
                    alt="bubble-bg"
                    className="absolute top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 w-[732px] md:w-[756px] sm:w-[300px] pointer-events-none select-none
        "
                />

                {/* Title on top */}
                <div className="relative z-10 text-center">
                    <Title
                        title={'Popular <span class="text-primary"> Courses </span>'}
                        text_color={'text-secondary'}
                    />
                </div>
            </div>

            <ServicesSection />
            <div className="buttons text-[25px] flex justify-center m-auto sm:mb-0">
                <Buttons btnname='Start Your Career Journey Today!' text_color={'text-white'} />
            </div>

        </div>
    )
}

export default PopularCourses
