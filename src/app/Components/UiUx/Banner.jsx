"use client";
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
import Link from "next/link";
import Contactfrom from "../Page-Components/Contactfrom";


const Banner = () => {
  return (
    <div className="">

      <div className="skill-title-container py-2 relative flex justify-centeritems-center">
        <div
          className="absolute inset-0 flex justify-center items-centerpointer-events-none"
        >
          <Image
            src={bublebg}
            alt="bg"
            className="w-[500px] md:w-[1282px] sm:w-[280px] opacity-90 object-contain mx-auto " />
        </div>

        <div className="relative z-10 w-full">
          <Globaltitle
            titleStart={"Your Investment,"}
            highlightText={" Our Training"}
            titleEnd={"Our Course Leads You to a Job."}
            description={
              "Skill-focused course + practical training + full placement support"
            }
          />
        </div>
      </div>
      {/* <div className="banner-wrap flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-6 lg:gap-0 mt-4">
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
        <section className=" w-full flex justify-center px-4 relative lg:absolute top-[48%] left-1/2 -translate-x-1/2 translate-y-0">
          <div className="max-w-2xl w-full text-center sm:text-left">
           
            <h2 className="text-[28px] sm:text-[47px] font-semibold text-[#6346FA]">
              Let&apos;s connect constellations
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-10 text-[16px] sm:text-[20px]">
              Let&apos;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>

      
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              <input type="text" placeholder="Last name" className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              <input type="text" placeholder="Phone Number" className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </form>

            <div className="buttons text-[25px] flex justify-center  mt-6 mb-6">
              <Buttons btnname="Send it to the Moon" text_color="text-white" />
            </div>
          </div>
        </section>
        

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
      </div> */}
      <div className="banner-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 items-start">
        {/* Left boy */}
        <div className="boy relative w-full">
          <Image
            src={learnboys}
            width={1000}
            height={500}
            alt="boy"
            className="max-w-[420px] mx-auto"
          />
          <div className="relative flex tools-img">
            <div className="absolute bottom-[7rem] lg:bottom-[5rem] tool1">
              <Image src={tool1} width={82} height={82} alt="tool1" />
            </div>
            <div className="absolute bottom-[19rem] lg:bottom-[14rem] tool1">
              <Image src={tool2} width={69} height={69} alt="tool2" />
            </div>
            <div className="absolute bottom-[27rem] lg:bottom-[22rem] 2xl:bottom-[27rem] right-[8rem] lg:right-[5rem] tool1">
              <Image src={tool4} width={66} height={66} alt="tool4" />
            </div>
            <div className="absolute bottom-[14rem] lg:bottom-[10rem] right-[2rem] lg:right-[1rem] tool1">
              <Image src={tool3} width={71} height={71} alt="tool3" />
            </div>
          </div>
        </div>

        {/* Middle section */}
        {/* <section className="middle w-full flex justify-center items-center px-4 relative">
          <div className="max-w-2xl w-full text-center sm:text-left">
            <h2 className="text-[28px] sm:text-[30px] font-semibold text-[#6346FA]">
              Start Your Campus Journey
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-10 text-[16px] sm:text-[20px]">
              Let us help you with enrollment, courses, and more.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <select
                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 sm:col-span-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Course
                </option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </form>


            <div className="buttons text-[25px] flex justify-center mt-6 mb-6">
              <Buttons btnname="Submit" text_color="text-white" />
            </div>
          </div>
        </section> */}

        <Contactfrom />

        {/* Right girl */}
        <div className="girl relative w-full">
          <Image
            src={girllearn}
            width={1000}
            height={500}
            alt="girl"
            className="max-w-[420px] 2xl:max-w-[463px] mx-auto"
          />
          <div className="relative flex tools-img">
            <div className="absolute bottom-[7rem] lg:bottom-[5rem] tool1">
              <Image src={tool6} width={82} height={82} alt="tool6" />
            </div>
            <div className="absolute bottom-[22rem] lg:bottom-[22rem] right-[8rem] lg:right-[5rem] tool1">
              <Image src={tool5} width={95} height={95} alt="tool5" />
            </div>
            <div className="absolute bottom-[9rem] lg:bottom-[6rem] right-[2rem] lg:right-[1rem] tool1">
              <Image src={tool7} width={100} height={100} alt="tool7" />
            </div>
          </div>
        </div>
      </div>


    </div >
  );
};

export default Banner;

