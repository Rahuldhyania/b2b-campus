import React from "react";
import bublebg from "../../../../public/images/bublebg.webp"
import learnboys from "../../../../public/images/learnboys.webp"
import girllearn from "../../../../public/images/girllearn.webp"
import man1 from "../../../../public/images/man1.webp"
import man2 from "../../../../public/images/man2.webp"
import man3 from "../../../../public/images/man3.webp"
import man4 from "../../../../public/images/man4.webp"
import man5 from "../../../../public/images/man5.webp"
import girl1 from "../../../../public/images/girl1.webp"
import ratingstar from "../../../../public/images/ratingstar.webp"
import tool1 from "../../../../public/images/tool1.webp"
import tool2 from "../../../../public/images/tool2.webp"
import tool3 from "../../../../public/images/tool3.webp"
import tool4 from "../../../../public/images/tool4.webp"
import tool5 from "../../../../public/images/tool5.webp"
import tool6 from "../../../../public/images/tool6.webp"
import tool7 from "../../../../public/images/tool7.webp"
import Image from "next/image";
import SearchBar from "../Page-Components/SearchBar";
import Title from "./Title";
import Buttons from "./Buttons";
import Header from "./Header";
import Globaltitle from "./Globaltitle";


const Banner = () => {
  return (
    <div className="">
      <Header />
      <div className="skill-title-container py-10 relative flex justify-centeritems-center">
        <div
          className="absolute inset-0 flex justify-center items-centerpointer-events-none"
        >
          <Image
            src={bublebg}
            alt="bg"
            className="w-[500px] md:w-[1682px] sm:w-[280px] opacity-90 object-contain mx-auto " />
        </div>

        {/* Title Component Above Background */}
        <div className="relative z-10 w-full">
          <Globaltitle
            titleStart={"Bored of "}
            highlightText={"“average”?"}
            titleEnd={"Build skills that actually pay"}
            description={
              "Learn real-world B2B skills that help you earn faster, grow smarter, and stand out louder"
            }
          />
        </div>
      </div>

      <div className="banner-wrap flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-6 lg:gap-0">

        <div className="boy relative">
          <Image
            src={learnboys}
            width={1000}
            height={500}
            alt="boy"
            className="max-w-[420px] mx-auto"
          />

          <div className="relative flex tools-img">

            <div className="absolute bottom-[7rem] lg:bottom-[5rem] tool1">
              <Image src={tool1} width={1000} height={500} className="w-[82px]" />
            </div>

            <div className="absolute bottom-[19rem] lg:bottom-[14rem] tool1">
              <Image src={tool2} width={1000} height={500} className="w-[69px]" />
            </div>

            <div className="absolute bottom-[27rem] lg:bottom-[22rem] 2xl:bottom-[27rem] right-[8rem] lg:right-[5rem] tool1">
              <Image src={tool4} width={1000} height={500} className="w-[66px]" />
            </div>

            <div className="absolute bottom-[14rem] lg:bottom-[10rem] right-[2rem] lg:right-[1rem] tool1">
              <Image src={tool3} width={1000} height={500} className="w-[71px]" />
            </div>

          </div>
        </div>


        <div className=" w-full lg:w-auto">
          <div className="w-full py-6">
            <div className="w-full m-auto flex flex-wrap md:flex-nowrap gap-10 justify-center items-center">

              <div className="items-center flex flex-col gap-3">
                <div className="flex -space-x-4 justify-center">
                  <Image src={man1} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="tutor" />
                  <Image src={man2} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="tutor" />
                  <Image src={girl1} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="tutor" />
                </div>

                <div className="text-center">
                  <p className="text-purple-600 text-lg sm:text-xl font-semibold">10+</p>
                  <p className="text-gray-700 text-xs sm:text-sm">Experienced Tutors</p>
                </div>
              </div>

              <div className="items-center flex flex-col gap-3">
                <div className="flex -space-x-4 justify-center">
                  <Image src={man3} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="reviewer" />
                  <Image src={man4} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="reviewer" />
                  <Image src={man5} width={60} height={60} className="rounded-full border-4 border-white shadow" alt="reviewer" />
                </div>

                <div className="text-center">
                  <div className="flex justify-center text-yellow-400 text-xl">
                    <Image
                      src={ratingstar}
                      width={90}
                      height={30}
                      className="rounded-full border-4 border-white shadow"
                      alt="reviewer"
                    />
                  </div>
                  <p className="text-purple-600 text-lg font-semibold">4.5K</p>
                  <p className="text-gray-700 text-xs sm:text-sm">Reviews</p>
                </div>
              </div>

            </div>
          </div>

          <div className="baner-btn flex flex-wrap justify-center gap-4">
            <Buttons btnname="Explore All Courses" text_color="text-white" />
            <Buttons btnname="Start Learning Today" text_color="text-black" btn_primary={false} btn_bg="bg-[#E4DFFF]" />
          </div>

          <div className="mt-4 px-3 sm:px-0">
            <SearchBar />
          </div>
        </div>

        <div className="gril relative">
          <Image
            src={girllearn}
            width={1000}
            height={500}
            alt="boy"
            className=" max-w-[420px] 2xl:max-w-[463px] mx-auto"
          />

          <div className="relative flex tools-img">

            <div className="absolute bottom-[7rem] lg:bottom-[5rem] tool1">
              <Image src={tool6} width={1000} height={500} className="w-[82px]" />
            </div>

            <div className="absolute bottom-[22rem] lg:bottom-[22rem] right-[8rem] lg:right-[5rem] tool1">
              <Image src={tool5} width={1000} height={500} className="w-[95px]" />
            </div>

            <div className="absolute bottom-[9rem] lg:bottom-[6rem] right-[2rem] lg:right-[1rem] tool1">
              <Image src={tool7} width={1000} height={500} className="w-[100px]" />
            </div>

          </div>
        </div>


      </div>
    </div >
  );
};

export default Banner;
