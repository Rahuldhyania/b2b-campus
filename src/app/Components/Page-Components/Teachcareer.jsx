import Image from 'next/image';
import arrowup from '../../../../public/images/arrowup.webp'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import manlaptop from "../../../../public/images/manlaptop.webp"
import fontscratch from "../../../../public/images/fontscratch.webp"
import cloud from "../../../../public/images/cloud.webp"
import Globaltitle from '../UiUx/Globaltitle';
import Title from '../UiUx/Title';

import ScratchCards from './ScratchCard';
import Buttons from '../UiUx/Buttons';
export default function Teachcareer() {
  const items = [
    {
      icon: "/images/arrowup.webp",
      title: "126%",
      subtitle: "170% Average Salary Hike",
    },
    {
      icon: "/images/bag.webp",
      title: "50+",
      subtitle: "Job Placements",
    },
    {
      icon: "/images/mail.webp",
      title: "Live",
      subtitle: "Interactive Sessions",
    },
  ];

  return (
    <div className='main-bg relative mt-[8%] mb-[8%]'>



      <div className="w-full relative bottom-[56px] m-auto max-w-[1450px] p-[1%]
            border-none rounded-[50px] mt-[2%] bg-[#E9E5FF]
            flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto justify-center group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg
                 animate-float"
          >
            <div className="wrap-div flex flex-col sm:flex-row justify-center items-center 
                      gap-4 sm:gap-10 text-center sm:text-left">

              <div className="bg-white flex justify-center items-center rounded-[50px] h-[60px] w-[60px] sm:h-[76px] sm:w-[76px] transition-all duration-300 hover:scale-110">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[40px] h-[40px] sm:w-[53px] sm:h-[53px] object-contain"
                />
              </div>

              <div>
                <h3 className="text-[#6346FA] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] transition-all duration-300 group-hover:text-purple-600">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] transition-all duration-300 group-hover:text-gray-700">
                  {item.subtitle}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>


      <div
        className="skill-title-container bg-no-repeat bg-bottom py-6 bg-containe relative "
        style={{ backgroundImage: `url(${titlewhitebg.src})` }}
      >
        <Title
          title={'Other Institutes Teach Chapters<br/> <span class="text-primary"> We Teach Careers </span>'}
          text_color={'text-secondary'}
        />
      </div>

      <div className="laptopwithman  relative">

        <div
          className="w-full bg-center bg-contain bg-no-repeat relative "
          style={{ backgroundImage: `url(${cloud.src})` }}
        >
          {/* Main image */}
          <Image
            src={manlaptop}
            alt="main"
            width={1000}
            height={500}
            className="relative max-w-[735px] w-full sm:w-[90%] md:w-[735px] m-auto h-auto object-cover z-10
               transition-transform duration-500 hover:scale-105 hidden lg:block"
          />

          {/* Button */}
          <div className="buttons text-[25px] flex justify-center m-auto mb-[25%] sm:mb-0 z-10 relative">
            <Buttons btnname='Backed by a Successful Agency' text_color={'text-white'} />
          </div>

          {/* ScratchCards overlay */}
          <div className="lg:absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            <ScratchCards />
          </div>
        </div>



      </div>
    </div >


  );
}
