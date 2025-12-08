"use client";
import { useState } from "react";
import Image from 'next/image'
import React from 'react'
import Globaltitle from '../UiUx/Globaltitle'
import bublebg from "../../../../public/images/bublebg.webp"
import truckdispatchgirl from "../../../../public/images/truckdispatchgirl.webp"
import whitetruck from "../../../../public/images/whitetruck.webp"
import Contactfrom from './Contactfrom'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import coathcing from "../../../../public/images/coathcing.webp"
import boylike from "../../../../public/images/boylike.webp"
import globe2 from "../../../../public/images/globe2.webp"
import smallbublebg from "../../../../public/images/smallbublebg.webp"
import girlwithbook from "../../../../public/images/girlwithbook.webp"
import truckimg2 from "../../../../public/images/truckimg2.webp"
import circleBg from "../../../../public/images/circlebg.webp";
import truckimg3 from "../../../../public/images/truckimg3.webp";
import arrowup1 from "../../../../public/images/arrowup1.webp";
import Title from '../UiUx/Title'
import Description from '../UiUx/Description'
import CampusProgram from './CampusProgram'
import Certificate from './Certificate'
import Buttons from '../UiUx/Buttons'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'

const TruckDispatcher = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const modules = [
    {
      title: "Module 1 - Introduction",
      points: [
        "What is dispatch business?",
        "Required skills",
        "Course overview",

      ],
    },
    {
      title: "Module 2 - Parties Involved",
      points: ["Role of a dispatcher", "Benefits of dispatcher services", "Owner operations and small fleet owner"],
    },
    {
      title: "Module 3 - Clients",
      points: ["Setting up with your client – contact", "Requesting documents from your client", "Download – sample carrier profile form.", "Download –  Sample of documents you will be requesting.", "Verbal agreement – Scope of booking decision "],
    },
    {
      title: "Module 4 - Equipment and Freight",
      points: ["Types of Trucks", "Trailer types", "Weight", "Commodity"],
    },
    {
      title: "Section 5 - Logistics",
      points: ["Pick-up and delivery times and their importance", "Extra Stops (Multiple deliveries)"],
    },
    {
      title: "Section 6 - Finding Freight",
      points: ["Load boards –  electronic marketplace", "DAT", "Internet Truck Stop", "Private 3PL boards", "Posting trucks"],
    },
    {
      title: "Module 7 - Booking Your First Load",
      points: ["Getting the right information", "Acceptable rates and negotiation", "Negotiantion tips", "Checking broker’s credit", "Getting set up with broker"],
    },
  ];


  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "Massive Global Demand",
      subtitle:
        "The USA & Canada logistics industry is growing fast with thousands of new dispatcher openings.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Work-from-Home Flexibility",
      subtitle:
        "Earn from anywhere in India while working with international trucking companies.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Potential",
      subtitle:
        "Make ₹25,000–₹85,000 per month or up to $2,000/month with global clients.",
    },
    {
      icon: "/images/digree.webp",
      title: "No Degree Required",
      subtitle:
        "Anyone can start — strong communication skills and proper training are enough.",
    },
  ];

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

  const skills = [
    { text: "US & Canada Trucking System", icon: "/images/greencheck.webp" },
    { text: "Live Load Booking (DAT, Truckstop)", icon: "/images/greencheck.webp" },
    { text: "Broker Communication", icon: "/images/greencheck.webp" },
    { text: "Rate Negotiation", icon: "/images/greencheck.webp" },
    { text: "Load Planning & Route Optimization", icon: "/images/greencheck.webp" },
    { text: "Safety & Compliance", icon: "/images/greencheck.webp" },
    { text: "Carrier Packets + Invoicing", icon: "/images/greencheck.webp" },
    { text: "Live Dispatch Practice with Real Loads", icon: "/images/greencheck.webp" },
    { text: "Real-Time Operations", icon: "/images/greencheck.webp" },
  ];

  const skills2 = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Housewives (WFH jobs)", icon: "/images/greencheck.webp" },
    { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
    { text: "Anyone wanting international income", icon: "/images/greencheck.webp" },

  ];
  const featuresNumbered = [
    {
      id: 1,
      number: 1, // correct property name
      title: "Expert US Logistics Trainers",
      description: "Learn directly from professionals with 7–15 years of real industry experience.",
    },
    {
      id: 2,
      number: 2,
      title: "Live Dispatch Training",
      description: "Work on real loads and real scenarios — not just theory.",
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Personal Mentorship",
      description: "Every student gets a dedicated mentor for guidance.",
    },
    {
      id: 4,
      number: 4,
      title: "English Skill Boost",
      description: "Improve communication for calls, emails, and client interaction.",
    },
    {
      id: 5,
      number: 5,
      title: "Work-from-Home Setup Help",
      description: "Get complete guidance to build a professional remote workspace.",
    },
    {
      id: 6,
      number: 6,
      title: "Guaranteed Internship",
      description: "Gain hands-on experience immediately after completing the course.",
    },
  ];





  return (
    <div>

      {/* ------------------- HEADER SECTION ------------------- */}
      <div className=" main-container skill-title-container py-2 relative flex justify-centeritems-center">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src={bublebg}
            alt="bg"
            className="w-[500px] md:w-[1282px] sm:w-[280px] opacity-90 object-contain mx-auto "
          />
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

      {/* ------------------- MAIN BANNER ------------------- */}
      <div className="main-container banner-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 items-start">

        <div className="boy relative w-full">
          <Image
            src={truckdispatchgirl}
            width={1000}
            height={500}
            alt="boy"
            className="max-w-[383px] mx-auto"
          />
        </div>

        <Contactfrom />

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

      {/* ------------------- ITEMS SECTION ------------------- */}
      <section className=' main-bg main-container p-18 py-section-y px-section-x sm:py-section-y-sm'>
        <div
          className="
            w-[90%] m-auto px-6 py-3 border-none rounded-[50px] bg-[#FFFFFF]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2
          "
        >
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
              <div className="wrap-div flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-center sm:text-left">

                <div
                  className="
                    bg-[#DDD7FF] flex justify-center items-center rounded-[50px] 
                    h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] 
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[#6346FA] text-[26px] sm:text-[32px] md:text-[30px] lg:text-[31px] transition-all duration-300 group-hover:text-purple-600">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[17px] md:text-[15px] lg:text-[18px] transition-all duration-300 group-hover:text-gray-700">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ---- WHY TRUCK DISPATCH ---- */}
        <div className="relative flex justify-center items-center">
          <Image
            src={titlewhitebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-[240px] opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'Why Truck Dispatching is the  <br/> <span class="text-primary">Next Big Career</span>'}
              text_color={'text-secondary'}
            />
            <Description
              description={'Logistics industry in USA & Canada is booming — dispatchers are in massive demand.'}
              text_color={'text-secondary'}
            />
          </div>
        </div>

        {/* ------------------- FEATURES SECTION ------------------- */}
        <div className='grid grid-cols-2'>
          <div className="boy relative w-full">
            <Image
              src={boylike}
              width={1000}
              height={500}
              alt="boy"
              className="max-w-[460px] mx-auto"
            />
          </div>
          <section className="w-full  py-10 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

              {featuresMain.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className=" items-start gap-4">
                    <div className="flex justify-center items-center  h-[48px] w-[48px] rounded-xl">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-[46px] w-[46px] object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-[#4A38F4] font-semibold text-xl leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] mt-1 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* <div className="buttons text-[15px] flex justify-center m-auto sm:mb-0">
              <Buttons btnname='Start Your Training This Week' className={'text-[15px]'} text_color={'text-white'} />
              <Buttons btnname='Start Your Training This Week' text_color={'text-white'} />

            </div> */}


          </section>
        </div>

        <div className="relative ">

          <img
            src={smallbublebg.src}
            alt="bubble-bg"
            className="absolute  top-[31%] left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[700px] h-[80px] sm:w-[240px] pointer-events-none select-none opacity-90"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'<span class="text-primary">45-Day Intensive </span> <br/> Dispatching Program'}
              text_color={'text-secondary'}
            />
            <Description
              description={'What You all Learn'}
              text_color={'text-secondary'}
            />
          </div>
        </div>

        <section className="w-full py-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">

            {skills.map((item, index) => (
              <div
                key={index}
                className="
          relative flex items-center bg-[#6C47FF]
          text-white px-6 py-3 rounded-[17px] shadow-sm
          hover:scale-[1.02] transition-all duration-300
          overflow-visible
        "
              >
                {/* Icon with absolute position, slightly above and left outside */}
                <img
                  src={item.icon}
                  alt="check"
                  className="w-[45px] h-[45px] object-contain absolute -left-4 -top-1"
                />

                {/* Padding left to avoid overlap with absolute icon */}
                <p className="text-[15px] sm:text-[15px] font-medium pl-5">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </section>
      </section>

      <section className="main-bg main-container text-black py-16 px-6 md:px-20 py-section-y px-section-x sm:py-section-y-sm">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            About Truck Dispatching Course
          </h2>

          <p className="text-lg leading-relaxed text-[#6346FA] mb-6">
            The <span className="font-semibold text-black">Truck Dispatching Class</span>
            is a hands-on training program that prepares you for a successful career in
            logistics and transportation.
          </p>

          <div className="bg-[#F3E8FF] border-l-4 border-[#6346FA] p-6 rounded-xl shadow-md mb-8">
            <p className="text-[#6346FA] text-lg leading-relaxed">
              This <span className="font-semibold text-black">truck dispatcher course</span> covers essential
              skills like
              <span className="text-[#6346FA] font-medium">
                {" "}load booking, driver coordination, route planning, and dispatch software usage
              </span>.
              Perfect for aspiring dispatchers or entrepreneurs, the dispatching class offers
              real-world knowledge and industry insights.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-[#6346FA]">
            Whether you’re launching a dispatch service or joining a logistics company,
            this <span className="font-semibold text-black">truck dispatching class</span>
            helps you build a solid foundation for long-term success in the freight industry.
          </p>

        </div>
      </section>

      <section className='main-bg main-container py-section-y px-section-x sm:py-section-y-sm'>
        <div className="relative flex justify-center items-center">
          <Image
            src={titlewhitebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[556px] sm:w-[240px] opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'Guaranteed Career Support  <br/> <span class="text-primary">Until You Get Placed</span>'}
              text_color={'text-secondary'}
            />
            <Description
              description={'Work with top US logistics companies. '}
              text_color={'text-secondary'}
            />
          </div>
        </div>
        <Certificate />
        <div className="buttons text-[25px] flex justify-center m-auto sm:mb-0">
          <Buttons btnname=' Secure Your Placement Now' text_color={'text-white'} />
        </div>
      </section>

      <section className=" py-section-y px-section-x sm:py-section-y-sm">

        <div className="relative ">

          <img
            src={smallbublebg.src}
            alt="bubble-bg"
            className="absolute  top-[31%] left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[700px] h-[80px] sm:w-[240px] pointer-events-none select-none opacity-90"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'<span class="text-primary">Why Choose Our Institute?</span> <br/>'}
              text_color={'text-secondary'}
            />
            <Description
              description={'Practical, real-world training by US logistics experts.'}
              text_color={'text-secondary'}
            />
          </div>
        </div>

        <div className="main-container max-w-[1250px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresNumbered.map(({ id, number, title, description }) => (
            <div
              key={id}
              className="relative bg-[#6346FA] rounded-2xl p-6 text-white overflow-hidden"
              style={{ minHeight: '180px' }}
            >
              {/* Circle background image corner-to-corner */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src={circleBg}
                  alt="circle-bg"
                  fill
                  className="object-cover opacity-100"
                />
              </div>

              {/* Number text */}
              <div className="text-2xl w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center text-black font-bold mb-4 relative z-10">
                {number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 relative z-10">{title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed relative z-10">{description}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="main-container w-full py-16 px-6 md:px-16 bg-gray-50 py-section-y px-section-x sm:py-section-y-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={truckimg3}
                width={1000}
                height={500}
                alt="Truck Dispatching Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B2B]">
              Career-Making Technical Skills You Will Learn
            </h2>

            <p className="mt-5 text-gray-700 leading-relaxed">
              In our <span className="text-[#6346FA] font-semibold">truck dispatching class</span>
              you’ll learn essential skills like using load boards (DAT, TruckStop)
              to match freight and optimize routes. You’ll also master scheduling
              and handling multiple deliveries.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The <span className="text-[#6346FA] font-semibold">truck dispatcher course</span>
              teaches you how to set up clients, manage documents, and negotiate
              rates with brokers professionally. You’ll gain confidence in booking
              loads and handling rate confirmations.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              This <span className="text-[#6346FA] font-semibold">dispatching class</span>
              also covers equipment types, freight categories, and dispatching
              software, preparing you for real-world scenarios and a successful
              career in logistics.
            </p>
            {/* <button className="mt-8 bg-[#ff7a3e] hover:bg-[#ff6d2a] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition">
              Download Brochure
            </button> */}
          </div>

        </div>
      </section>

      <section className='main-container main-bg py-section-y px-section-x sm:py-section-y-sm'>
        <div className="relative flex justify-center items-center">
          <Image
            src={titlewhitebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-[240px] opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={' <br/> <span class="text-primary"> Who Can Join</span>'}
              text_color={'text-secondary'}
            />
            <Description
              description={'Perfect for beginners & career changers.'}
              text_color={'text-secondary'}
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="boy relative w-full">
            <Image
              src={coathcing}
              width={1000}
              height={500}
              alt="boy"
              className="max-w-[460px] mx-auto"
            />
          </div>
          <section className="w-full p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  gap-5">

              {skills2.map((item, index) => (
                <div
                  key={index}
                  className="
          relative flex items-center bg-white
          text-black px-6 py-3 rounded-[17px] shadow-sm
          hover:scale-[1.02] transition-all duration-300
          overflow-visible
        "
                >
                  {/* Icon with absolute position, slightly above and left outside */}
                  <img
                    src={item.icon}
                    alt="check"
                    className="w-[45px] h-[45px] object-contain absolute -left-4 -top-1"
                  />

                  {/* Padding left to avoid overlap with absolute icon */}
                  <p className="text-[15px] sm:text-[15px] font-medium pl-5">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
            <div className="buttons text-[25px] flex justify-start m-auto sm:mb-0">
              <Buttons btnname=' Book Your Seats Now' text_color={'text-white'} />
            </div>
          </section>
        </div>
      </section>

      <section className=' main-container p-8 py-section-y px-section-x sm:py-section-y-sm'>
        <div className="relative flex justify-center items-center">
          <Image
            src={smallbublebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-[240px] opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'From India to Earning in <br/> <span class="text-primary">Canada/USA </span>'}
              text_color={'text-secondary'}
            />
            <Description
              description={'“This course changed my life.” – Verified Student'}
              text_color={'text-secondary'}
            />
          </div>
        </div>


        <div className="w-full max-w-7xl mx-auto bg-[#EDE7FF] rounded-[53px]     flex flex-col md:flex-row items-center gap-20">

          {/* Left Image Section */}
          <div className=" flex justify-center">
            <div className="relative">
              <Image
                src={girlwithbook}
                width={1000}
                height={500}
                alt="Student"
                className="w-full object-cover"
              />


            </div>
          </div>

          {/* Right Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#5A42E4] mb-3">
              Meet Anjali,
            </h2>
            <p className="text-gray-700 mb-6 font-bold leading-relaxed">
              one of our successful students who started with zero experience and
              transformed her career through our Truck Dispatching Course.
            </p>

            <p className="font-medium text-gray-800 mb-4">
              In just a few weeks, she was confidently:
            </p>

            <div className="bg-white p-5 rounded-2xl shadow-sm space-y-3">
              <p>☎️ Handling real dispatch calls</p>
              <p>📦 Managing loads with top brokers</p>
              <p>💵 Earning in USD</p>
              <p>🧑‍💻 Working remotely for Canada/USA clients</p>
              <p>🚀 Building a stable, high-income international career</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" main-bg py-6 py-section-y px-section-x sm:py-section-y-sm">
        <div className="relative flex justify-center items-center">
          <Image
            src={titlewhitebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[431px] sm:w-[240px] opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'}
              text_color={'text-secondary'}
            />

          </div>
        </div>
        <div className="max-w-3xl mx-auto p-6 bg-white/70 backdrop-blur-xl shadow-lg rounded-xl border border-purple-200 relative z-10">



          {/* ACCORDION */}
          {modules.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="mb-4 bg-[#F8F0FF] border border-purple-300 rounded-lg shadow-sm transition-all"
              >
                {/* Accordion Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex justify-between items-center text-[#6346FA] font-semibold"
                >
                  {item.title}

                  <Image
                    src={isOpen ? "/images/arrowup1.webp" : "/images/arrowdown2.webp"}
                    alt="arrow"
                    width={24}
                    height={24}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[700px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                >
                  <ul className="px-5 space-y-2 text-black">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-black  text-lg font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="main-container bg-[#6346FA] w-full py-16 px-6 md:px-16 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-3xl font-extrabold leading-tight">
              Become a Pro in Truck Dispatching
            </h1>

            <p className="text-xl mt-6 leading-relaxed text-gray-200">
              Build a Profitable, Efficient, and High-Demand Dispatching Career with
              Real-World Training. Learn how to manage loads, communicate with
              drivers, and handle logistics like a pro. This course equips you with
              in-demand skills to launch a successful dispatching business or work
              with top freight companies.
            </p>

            <button className="mt-8 bg-[#FF8850] hover:bg-[#ff7a3e] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition">
              Apply for Counselling →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-l-full w-[90%] md:w-[100%]">
              <Image
                src={truckimg2}
                alt="Truck Dispatching Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <FaqSection />
      <Journeywithb2b2 />

    </div>
  );
};

export default TruckDispatcher;
