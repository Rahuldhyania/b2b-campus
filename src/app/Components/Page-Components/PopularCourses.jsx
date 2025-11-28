import React from 'react'
import Title from '../UiUx/Title'
import Globaltitle from '../UiUx/Globaltitle';
import CourseCard from './CourseCard';
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import Buttons from '../UiUx/Buttons';


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
        <div className=' '>
            <div className="skill-title-container bg-no-repeat   bg-bottom py-6"
                style={{
                    backgroundImage: `url(${smallbublebg.src}) `,
                    backgroundSize: '732px auto'
                }}
            >
                <Title
                    title={'Popular  <sapn class="text-primary"> Courses </span>'}
                    text_color={'text-secondary'}
                />
            </div>
            {/* <div className="w-full p-[25px]">
                <div className=" flex flex-wrap justify-center items-center  gap-[10px]
                  p-[11px] max-w-[1032px] m-auto mb-[3%] mt-[1%]
                  border-none rounded-[30px] place-items-center bg-[#CEC5FF]">

                    {Coursesbtn.map((item) => (
                        <div key={item.id} className="cursor-pointer">
                            <p className="bg-[#E4DFFF] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 
                       p-[16px] sm:p-[17px] md:p-[18px] coures-btn rounded-[20px]">
                                {item.btn}
                            </p>
                        </div>
                    ))}

                </div>
            </div> */}
            <div className="w-full p-[25px]">
                <div className="flex flex-wrap justify-center items-center gap-[10px]
                  p-[11px] max-w-[1032px] m-auto mb-[3%] mt-[1%]
                  border-none rounded-[30px] place-items-center bg-[#CEC5FF]">

                    {Coursesbtn.map((item) => (
                        <div key={item.id} className="cursor-pointer">
                            <p className="
          bg-[#E4DFFF] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] 
          p-[16px] sm:p-[17px] md:p-[18px] coures-btn rounded-[20px]
          transition-all duration-300 ease-in-out
          hover:bg-[#6346FA] hover:text-white hover:scale-105 hover:shadow-lg
        ">
                                {item.btn}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            < CourseCard />
            <div className="buttons text-[25px] flex justify-center m-auto mb-[25%] sm:mb-0">
                <Buttons btnname='Start Your Career Journey Today!' text_color={'text-white'} />
            </div>

        </div>
    )
}

export default PopularCourses
