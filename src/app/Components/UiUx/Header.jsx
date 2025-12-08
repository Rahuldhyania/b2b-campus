"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.webp";
import Buttons from "./Buttons";
import TruckDispatcher from "../Page-Components/TruckDispatcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false); // Dropdown state
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },

    {
      name: "Courses",
      path: "/courses",
      dropdown: [
        { name: "Truck Dispatcher", path: "/truckDispatcher" },
        { name: "Full Stack Development", path: "/courses/full-stack" },
        { name: "Digital Marketing", path: "/courses/digital-marketing" },
        { name: "Data Science", path: "/courses/data-science" }
      ]
    },

    { name: "Placement", path: "/placement" },
    { name: "Our Story", path: "/our-story" },
    { name: "Resources", path: "/resources" },
    { name: "Connect", path: "/connect" }
  ];

  return (
    <nav className="relative bg-white z-50">
      <div className="flex justify-between xl:justify-around items-center flex-wrap gap-4 relative py-5 px-5">
        {/* Logo */}
        <div className="Logo-img">
          <Link
            href={'/'}
          >
            <Image
              src={B2BCAMPUSLOGO}
              width={211}
              height={46}
              alt="B2BCampus Logo"
              className="w-[150px] md:w-[211px]"
            />
          </Link>
        </div>

        {/* Hamburger for Mobile */}

        {/* Desktop Menu */}
        <div className="menu hidden xl:block">
          <ul className="flex items-center gap-10 text-[21px] font-medium">
            {menuItems.map(item =>
              <li key={item.name} className="relative">
                {/* ❗ Courses Dropdown with Arrow */}
                {item.dropdown
                  ? <div
                    className="relative flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setCourseOpen(true)}
                    onMouseLeave={() => setCourseOpen(false)}
                  >
                    <span
                      className={`
                                                relative px-1
                                                ${pathname.startsWith(item.path)
                          ? "text-purple-600"
                          : "text-gray-700"}
                                                hover:text-purple-500 transition-colors
                                            `}
                    >
                      {item.name}
                    </span>

                    {/* ▼ Drop down Icon */}
                    <span
                      className={`
                                                text-gray-700 text-[16px] transition-transform duration-300
                                                ${courseOpen
                          ? "rotate-180 text-purple-600"
                          : ""}
                                            `}
                    >
                      ▼
                    </span>

                    {/* Dropdown Box */}
                    {courseOpen &&
                      <ul className="absolute left-0 top-full bg-white shadow-lg rounded-md w-[220px] py-3 z-50">
                        {item.dropdown.map(sub =>
                          <li key={sub.name}>
                            <Link href={sub.path}>
                              <span className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                                {sub.name}
                              </span>
                            </Link>
                          </li>
                        )}
                      </ul>}
                  </div>
                  : <Link href={item.path}>
                    <span
                      className={`
                                                relative px-1 cursor-pointer
                                                ${pathname === item.path
                          ? "text-purple-600 "
                          : "text-gray-700"}
                                                hover:text-purple-500 transition-colors
                                            `}
                    >
                      {item.name}
                      {pathname === item.path &&
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-600 rounded" />}
                    </span>
                  </Link>}
              </li>
            )}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="flex items-center gap-3">
          <div className="buttons hidden md:flex text-[25px]">
            <Buttons btnname="Enroll Now" text_color="text-white" />
          </div>
          <div
            className="xl:hidden  top-5 right-5 z-50 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span
                className="block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out transform"
                style={{
                  rotate: open ? "45deg" : "0deg",
                  translateY: open ? "8px" : "0px"
                }}
              />
              <span
                className={`block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out ${open
                  ? "opacity-0"
                  : "opacity-100"}`}
              />
              <span
                className="block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out transform"
                style={{
                  rotate: open ? "-45deg" : "0deg",
                  translateY: open ? "-8px" : "0px"
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
                        xl:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden z-50
                        transition-[max-height,opacity] duration-500 ease-in-out
                        ${open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"}
                    `}
        >
          <ul className="flex flex-col gap-4 text-[18px] font-medium px-4 py-4">
            {menuItems.map(item =>
              <li key={item.name}>
                <Link href={item.path}>
                  <span
                    className={`
                                            block py-2 px-2
                                            ${pathname === item.path
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700"}
                                            hover:text-purple-500 transition-colors
                                        `}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            )}

            <div className="text-[20px] md:hidden bg-white mt-4">
              <Buttons btnname="Enroll Now" text_color="text-white" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
