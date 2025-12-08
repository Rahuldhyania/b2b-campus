import Image from 'next/image'
import React from 'react'
import Globaltitle from '../UiUx/Globaltitle'
import bublebg from "../../../../public/images/bublebg.webp"
import truckdispatchgirl from "../../../../public/images/truckdispatchgirl.webp"
import whitetruck from "../../../../public/images/whitetruck.webp"
import Contactfrom from './Contactfrom'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Title from '../UiUx/Title'

const TruckDispatcher = () => {
  const items = [
    {
      icon: "/images/45days.webp",
      title: "45 Days",
      subtitle: "Practical Training ",
    },
    {
      icon: "/images/handmoney.webp",
      title: "100%",
      subtitle: "Placement Support",
    },
    {
      icon: "/images/globeicon.webp",
      title: "Global Work",
      subtitle: "Work-from-Home or Abroad",
    },
    {
      icon: "/images/money.webp",
      title: "INR / USD",
      subtitle: "Flexible Salary Opportunities",
    },
  ];
  return (
    <div>
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
            titleStart={""}
            highlightText={"Become a Certified Truck Dispatcher"}
            titleEnd={"in 45 Days"}
            description={
              "Master US & Canada Logistics • Work-from-Home • Earn in INR or USD"
            }
          />
        </div>
      </div>
      <div className="banner-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 items-start">
        {/* Left boy */}
        <div className="boy relative w-full">
          <Image
            src={truckdispatchgirl}
            width={1000}
            height={500}
            alt="boy"
            className="max-w-[383px] mx-auto"
          />

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
            src={whitetruck}
            width={1000}
            height={500}
            alt="girl"
            className="max-w-[420px] 2xl:max-w-[463px] mx-auto"
          />

        </div>
      </div>

      <section className='main-bg main-container py-3 px-16'>
        <div className="
      w-[90%] m-auto px-6 py-3 border-none rounded-[50px] bg-[#FFFFFF]
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2
  ">

          {items.map((item, index) => (
            <div
              key={index}
              className="
          flex flex-col sm:flex-row items-center justify-center 
          group relative transition-transform duration-300 
          hover:-translate-y-2 hover:shadow-lg animate-float 
          p-[6px] rounded-[19px] gap-6
        "
            >
              <div className="
            wrap-div flex flex-col sm:flex-row justify-center items-center 
            gap-4 sm:gap-10 text-center sm:text-left
        ">
                <div className="
              bg-[#DDD7FF] flex justify-center items-center rounded-[50px] 
              h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] 
              transition-all duration-300 hover:scale-110
          ">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] object-contain"
                  />
                </div>

                <div>
                  <h3 className="
                text-[#6346FA] text-[26px] sm:text-[32px] md:text-[30px] lg:text-[31px]
                transition-all duration-300 group-hover:text-purple-600
            ">
                    {item.title}
                  </h3>
                  <p className="
                text-[14px] sm:text-[17px] md:text-[15px] lg:text-[18px]
                transition-all duration-300 group-hover:text-gray-700
            ">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        <section>
          <div className="relative flex justify-center items-center">

            {/* Background Image */}
            <Image
              src={titlewhitebg.src}
              width={1000}
              height={500}
              alt="bg-shape"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]  md:w-[756px] sm:w-[240px] opacity-100 pointer-events-none select-none"
            />

            {/* Title On Top */}
            <div className="relative z-10 text-center">
              <Title
                title={'Why Truck Dispatching is the  <br/> <span class="text-primary">Next Big Career</span>'}
                text_color={'text-secondary'}
              />
            </div>
          </div>
        </section>



      </section>


    </div>
  )
}

export default TruckDispatcher
