import Image from 'next/image';
import arrowup from '../../../../public/images/arrowup.webp'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import manlaptop from "../../../../public/images/manlaptop.webp"
import fontscratch from "../../../../public/images/fontscratch.webp"
import cloud from "../../../../public/images/cloud.webp"
import Globaltitle from '../UiUx/Globaltitle';
import Title from '../UiUx/Title';

import ScratchCards from './ScratchCard';
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
    <div className='main-bg relative mt-[10%]'>
      <div className="w-full relative bottom-[56px] m-auto  max-w-[1450px] p-[1%] border-none rounded-[50px] mt-[2%] bg-[#E9E5FF] flex justify-between items-center ">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full justify-center group relative"
          >


            <div className="wrap-div flex justify-center items-center gap-10 ">
              <div className="bg-white flex justify-center items-center rounded-[50px]  h-[76px] w-[76px] ">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-[53px] h-[53px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-[#6346FA] text-[42px]">
                  {item.title}
                </h3>
                <p className=" text-[21px]">{item.subtitle}</p>
              </div>
            </div>



          </div>
        ))}

      </div>


      <div className="skill-title-container bg-no-repeat bg-bottom py-6 relative mb-[8%]"
        style={{ backgroundImage: `url(${titlewhitebg.src})` }}
      >
        <Title
          title={'Other Institutes Teach Chapters  <br/> <sapn class="text-primary"> We Teach Careers </span>'}
          text_color={'text-secondary'}
        />
      </div>

      <div className="laptopwithman  relative">
        <div className="w-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${cloud.src})` }}>
          <Image
            src={manlaptop}
            alt="main"
            width={1000}
            height={500}
            className="relative max-w-[735px] m-auto  h-auto object-cover z-10"
          />

        </div>

        <ScratchCards />

      </div>
    </div >
  );
}
