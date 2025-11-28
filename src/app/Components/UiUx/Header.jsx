// "use client";
// import { useState } from "react";

// import Image from "next/image";
// import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.webp";
// import Buttons from "./Buttons";

// export default function Header({ text, bgColor = "#6346FA" }) {
//     return (
//         <nav>
//             <div className="flex py-5 justify-around items-center">

//                 <div className="Logo-img">
//                     <Image
//                         src={B2BCAMPUSLOGO}
//                         width={211}
//                         height={46}
//                         alt="B2BCampus Logo"
//                     />
//                 </div>

//                 <div className="menu">
//                     <ul className="flex items-center gap-[40px] text-[21px] text-gray-700 font-medium">

//                         <li>
//                             <a href="#" className="text-purple-600">Home</a>
//                         </li>

//                         <li className="flex items-center gap-1 cursor-pointer">
//                             Courses
//                         </li>

//                         <li className="cursor-pointer">Placement</li>

//                         <li className="cursor-pointer">Our Story</li>

//                         <li className="flex items-center gap-1 cursor-pointer">
//                             Resources
//                         </li>

//                         <li className="cursor-pointer">Connect</li>

//                     </ul>
//                 </div>

//                 <div className="buttons text-[25px] flex justify-center">
//                     <Buttons btnname='Register now' text_color={'text-white'} />
//                 </div>

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
        <nav>
            <div className="flex py-5  justify-between lg:justify-around items-center flex-wrap gap-4">

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

                {/* HAMBURGER FOR < LG */}
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    <div className="space-y-1 cursor-pointer">
                        <span className="block w-6 h-[3px] bg-gray-700"></span>
                        <span className="block w-6 h-[3px] bg-gray-700"></span>
                        <span className="block w-6 h-[3px] bg-gray-700"></span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="menu hidden lg:block">
                    <ul className="flex items-center gap-[40px] text-[21px] text-gray-700 font-medium">

                        <li>
                            <a href="#" className="text-purple-600">Home</a>
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

                {/* MOBILE DROPDOWN MENU */}
                {open && (
                    <div className="w-full lg:hidden mt-3">
                        <ul className="flex flex-col gap-4 text-[18px] text-gray-700 font-medium">

                            <li>
                                <a href="#" className="text-purple-600">Home</a>
                            </li>

                            <li className="cursor-pointer">Courses</li>

                            <li className="cursor-pointer">Placement</li>

                            <li className="cursor-pointer">Our Story</li>

                            <li className="cursor-pointer">Resources</li>

                            <li className="cursor-pointer">Connect</li>

                            <div className="text-[20px] hidden  lg:block">
                                <Buttons btnname="Register now" text_color="text-white" />
                            </div>

                        </ul>
                    </div>
                )}


            </div>
        </nav>
    );
}
