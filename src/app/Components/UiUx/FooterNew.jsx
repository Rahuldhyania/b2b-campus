"use client";
import Link from "next/link";
import React, { useState } from "react";
import footerlogo from "../../../../public/images/footerlogo.webp";
import Image from "next/image";
import footermiallogo from "../../../../public/images/footermiallogo.webp";
import Footerfacebook from "../../../../public/images/Footerfacebook.webp";
import linkedin from "../../../../public/images/linkedin.webp";
import insta from "../../../../public/images/insta.webp";
const footerData = [
  {
    title: "Industrial Training",
    links: [
      { id: 1, page_name: "PHP", page_links: "/php-training" },
      { id: 2, page_name: "JAVA", page_links: "/java-training" },
      { id: 3, page_name: "ASP.NET", page_links: "/aspnet-training" },
      {
        id: 4,
        page_name: "Web Designing",
        page_links: "/web-designing-training"
      },
      {
        id: 5,
        page_name: "Digital Marketing",
        page_links: "/digital-marketing-training"
      },
      { id: 6, page_name: "Networking", page_links: "/networking-training" },
      {
        id: 7,
        page_name: "Ethical Hacking",
        page_links: "/ethical-hacking-training"
      },
      {
        id: 8,
        page_name: "Embedded System",
        page_links: "/embedded-system-training"
      },
      { id: 9, page_name: "C/C++", page_links: "/c-cpp-training" },

      { id: 10, page_name: "Oracle 9i/10g", page_links: "/oracle-training" },
      {
        id: 11,
        page_name: "PLC Automation",
        page_links: "/plc-automation-training"
      },
      { id: 12, page_name: "VLSI", page_links: "/vlsi-training" },
      {
        id: 13,
        page_name: "Cloud Computing",
        page_links: "/cloud-computing-training"
      },
      {
        id: 14,
        page_name: "Android Application",
        page_links: "/android-training"
      },
      { id: 15, page_name: "iPhone", page_links: "/iphone-training" },
      { id: 16, page_name: "SEO / SMO", page_links: "/seo-smo-training" },
      { id: 17, page_name: "PLC Scada", page_links: "/plc-scada-training" },
      { id: 18, page_name: "CCNA", page_links: "/ccna-training" }
    ]
  },

  {
    title: "Useful Links",
    links: [
      {
        id: 19,
        page_name: "Six months industrial training in Chandigarh",
        page_links: "/six-months-industrial-training-chandigarh"
      },
      {
        id: 20,
        page_name: "Six weeks industrial training in Chandigarh",
        page_links: "/six-weeks-industrial-training-chandigarh"
      },
      {
        id: 21,
        page_name: "Industrial training in Chandigarh",
        page_links: "/industrial-training-chandigarh"
      },
      {
        id: 22,
        page_name: "6 months industrial training in Chandigarh",
        page_links: "/6-months-industrial-training-chandigarh"
      },
      {
        id: 23,
        page_name: "6 weeks industrial training in Chandigarh",
        page_links: "/6-weeks-industrial-training-chandigarh"
      },
      {
        id: 24,
        page_name: "Best industrial training in Chandigarh",
        page_links: "/best-industrial-training-chandigarh"
      },
      {
        id: 25,
        page_name: "Best industrial training in Mohali",
        page_links: "/best-industrial-training-mohali"
      },
      {
        id: 26,
        page_name: "Six months industrial training in Mohali",
        page_links: "/six-months-industrial-training-mohali"
      },
      {
        id: 27,
        page_name: "Six weeks industrial training in Mohali",
        page_links: "/six-weeks-industrial-training-mohali"
      },

      {
        id: 28,
        page_name: "Summer Training in Chandigarh",
        page_links: "/summer-training-chandigarh"
      },
      {
        id: 29,
        page_name: "Training companies in Chandigarh",
        page_links: "/training-companies-chandigarh"
      },
      {
        id: 30,
        page_name: "Free industrial training in Chandigarh",
        page_links: "/free-industrial-training-chandigarh"
      },
      {
        id: 31,
        page_name: "Free six months industrial training in Chandigarh",
        page_links: "/free-six-months-industrial-training-chandigarh"
      },
      {
        id: 32,
        page_name: "Best six months industrial training in Chandigarh",
        page_links: "/best-six-months-industrial-training-chandigarh"
      },
      {
        id: 33,
        page_name: "Best six weeks industrial training in Chandigarh",
        page_links: "/best-six-weeks-industrial-training-chandigarh"
      },
      {
        id: 34,
        page_name: "Live projects based industrial training in Chandigarh",
        page_links: "/live-projects-industrial-training-chandigarh"
      },
      {
        id: 35,
        page_name: "Best IT training companies in Chandigarh",
        page_links: "/best-it-training-companies-chandigarh"
      },
      {
        id: 36,
        page_name: "Top IT training companies in Chandigarh",
        page_links: "/top-it-training-companies-chandigarh"
      }
    ]
  }
];
const socialLinks = [
  { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
  { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
  { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" }
];
const FooterNew = () => {
  const [showitem, setShowitem] = useState({
    0: 6,
    1: 6
  });

  console.log("showitem", showitem);
  const handelshow = index => {
    setShowitem(prev => ({
      ...prev,
      [index]:
        prev[index] >= footerData[index].links.length ? 6 : prev[index] + 6
    }));
  };

  return (
    <div className="bg-primary">
      <div className="max-w-[1780px] m-auto px-[3%] py-16">
        <div className="flex flex-col md:flex-row gap-y-6 md:items-center justify-between pb-8">
          <div>
            <Link href={"/"}>
              <Image
                src={footerlogo}
                alt="footerlogo"
                width={1000}
                height={500}
                className="max-w-[220px] m-auto md:m-0"
              />
            </Link>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-5 ">
              <div className="email w-full md:max-w-[382px] ">
                <div className="relative w-full">
                  <Image
                    src={footermiallogo}
                    width={1000}
                    height={500}
                    alt=""
                    className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 opacity-70 "
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="text-[19px] placeholder-white py-3 pe-3.5 pl-12 rounded-2xl w-full transition-all duration-300 border-2 border-white border-solid outline-none"
                  />
                </div>
              </div>

              {/* <Link href="/#"> */}
              <button className="bg-white text-[#5D38DE] px-6 sm:px-10 py-3 text-[16px] sm:text-[18px] rounded-2xl w-max sm:w-auto transition-all duration-300 hover:bg-[#f3efff] hover:scale-[1.03] cursor-pointer ">
                Submit
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr]">
          <div>
            <h3 className="text-white text-3xl md:text-4xl pb-3">
              {footerData[0].title}
            </h3>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2">
              {footerData[0].links.map((data, index) =>
                <div className="flex items-center py-2" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
            </div>
            <div className="grid md:hidden grid-cols-1 md:grid-cols-2">
              {footerData[0].links.slice(0, showitem[0]).map((data, index) =>
                <div
                  className="flex items-start md:items-center py-2"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
              <span
                className="text-white underline"
                onClick={() => handelshow(0)}
              >
                {showitem[0] >= footerData[0].links.length
                  ? "See Less"
                  : "See More"}
              </span>
            </div>
          </div>
          <div className="pt-8">
            <h3 className="text-white text-3xl md:text-4xl pb-3">
              {footerData[1].title}
            </h3>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2">
              {footerData[1].links.map((data, index) =>
                <div className="flex items-center py-2" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
            </div>
            <div className="grid md:hidden grid-cols-1 md:grid-cols-2">
              {footerData[1].links.slice(0, showitem[1]).map((data, index) =>
                <div
                  className="flex items-start md:items-center py-2"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
              <span
                className="text-white underline"
                onClick={() => handelshow(1)}
              >
                {showitem[1] >= footerData[1].links.length
                  ? "See Less"
                  : "See More"}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col justify-between items-center gap-4 lg:gap-6">
          <p className="text-base opacity-80 text-center sm:text-left text-white">
            © B2B Campus. All Rights Reserved 2025.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-0">
            {socialLinks.map((item, i) =>
              <Link href={item.url} key={i} target="_blank">
                <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                  <Image src={item.icon} width={20} height={20} alt="" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
