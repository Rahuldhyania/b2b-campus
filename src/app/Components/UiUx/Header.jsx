// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.webp";
// import Buttons from "./Buttons";

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     return (
//         <nav>
//             <div className="flex justify-between lg:justify-around items-center flex-wrap gap-4" style={{ padding: '20px 20px' }}>

//                 {/* Logo */}
//                 <div className="Logo-img">
//                     <Image
//                         src={B2BCAMPUSLOGO}
//                         width={211}
//                         height={46}
//                         alt="B2BCampus Logo"
//                         className="w-[150px] md:w-[211px]"
//                     />
//                 </div>

//                 {/* HAMBURGER FOR < LG */}
//                 <div className="lg:hidden " onClick={() => setOpen(!open)}>
//                     <div className="space-y-1 cursor-pointer absolute top-5 right-5 z-50">
//                         <span className="block w-6 h-[3px] bg-gray-700"></span>
//                         <span className="block w-6 h-[3px] bg-gray-700"></span>
//                         <span className="block w-6 h-[3px] bg-gray-700"></span>
//                     </div>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="menu hidden lg:block">
//                     <ul className="flex items-center gap-[40px] text-[21px] text-gray-700 font-medium">

//                         <li>
//                             <a href="#" className="text-purple-600">Home</a>
//                         </li>

//                         <li className="flex items-center gap-1 cursor-pointer">Courses</li>

//                         <li className="cursor-pointer">Placement</li>

//                         <li className="cursor-pointer">Our Story</li>

//                         <li className="flex items-center gap-1 cursor-pointer">Resources</li>

//                         <li className="cursor-pointer">Connect</li>

//                     </ul>
//                 </div>

//                 {/* Desktop Button */}
//                 <div className="buttons hidden lg:flex text-[25px]">
//                     <Buttons btnname="Register now" text_color="text-white" />
//                 </div>

//                 {/* MOBILE DROPDOWN MENU */}
//                 {open && (
//                     <div className="w-full lg:hidden mt-3">
//                         <ul className="flex flex-col gap-4 text-[18px] text-gray-700 font-medium">

//                             <li>
//                                 <a href="#" className="text-purple-600">Home</a>
//                             </li>

//                             <li className="cursor-pointer">Courses</li>

//                             <li className="cursor-pointer">Placement</li>

//                             <li className="cursor-pointer">Our Story</li>

//                             <li className="cursor-pointer">Resources</li>

//                             <li className="cursor-pointer">Connect</li>

//                             <div className="text-[20px] hidden  lg:block">
//                                 <Buttons btnname="Register now" text_color="text-white" />
//                             </div>

//                         </ul>
//                     </div>
//                 )}


//             </div>
//         </nav>
//     );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.webp";
import Buttons from "./Buttons";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative bg-white z-50"> {/* Parent nav को भी bg-white दिया */}
            <div
                className="flex justify-between lg:justify-around items-center flex-wrap gap-4 relative"
                style={{ padding: "20px 20px" }}
            >
                {/* Logo */}
                <div className="Logo-img">
                    <Image
                        src={B2BCAMPUSLOGO}
                        width={211}
                        height={46}
                        alt="B2BCampus Logo"
                        className="w-[150px] md:w-[211px]"
                    />
                </div>

                {/* Hamburger for Mobile */}
                <div
                    className="lg:hidden absolute top-5 right-5 z-50 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <div className="space-y-1">
                        <span
                            className="block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out transform"
                            style={{
                                rotate: open ? "45deg" : "0deg",
                                translateY: open ? "8px" : "0px",
                            }}
                        ></span>
                        <span
                            className={`block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"
                                }`}
                        ></span>
                        <span
                            className="block w-6 h-[3px] bg-gray-700 transition-all duration-300 ease-in-out transform"
                            style={{
                                rotate: open ? "-45deg" : "0deg",
                                translateY: open ? "-8px" : "0px",
                            }}
                        ></span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="menu hidden lg:block">
                    <ul className="flex items-center gap-[40px] text-[21px] text-gray-700 font-medium">
                        <li>
                            <a href="#" className="text-purple-600">
                                Home
                            </a>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer">Courses</li>
                        <li className="cursor-pointer">Placement</li>
                        <li className="cursor-pointer">Our Story</li>
                        <li className="flex items-center gap-1 cursor-pointer">Resources</li>
                        <li className="cursor-pointer">Connect</li>
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className="buttons hidden lg:flex text-[25px]">
                    <Buttons btnname="Register now" text_color="text-white" />
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`
            lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden z-50
            transition-[max-height,opacity] duration-500 ease-in-out
            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
                    style={{ willChange: "max-height, opacity" }} // for smoother animation
                >
                    <ul className="flex flex-col gap-4 text-[18px] text-gray-700 font-medium px-4 bg-white">
                        <li className="bg-white">
                            <a href="#" className="text-purple-600 block py-2">
                                Home
                            </a>
                        </li>
                        <li className="bg-white">
                            <a href="#" className="block py-2">
                                Courses
                            </a>
                        </li>
                        <li className="bg-white">
                            <a href="#" className="block py-2">
                                Placement
                            </a>
                        </li>
                        <li className="bg-white">
                            <a href="#" className="block py-2">
                                Our Story
                            </a>
                        </li>
                        <li className="bg-white">
                            <a href="#" className="block py-2">
                                Resources
                            </a>
                        </li>
                        <li className="bg-white">
                            <a href="#" className="block py-2">
                                Connect
                            </a>
                        </li>
                        <div className="text-[20px] lg:hidden bg-white mb-5">
                            <Buttons btnname="Register now" text_color="text-white" />
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

