// import Image from 'next/image'
// import React from 'react'
// import footerlogo from '../../../../public/images/footerlogo.webp'
// import Footerfacebook from '../../../../public/images/Footerfacebook.webp'
// import linkedin from '../../../../public/images/linkedin.webp'
// import insta from '../../../../public/images/insta.webp'
// import Buttons from './Buttons'
// import Link from 'next/link'

// const Footer = () => {
//     return (
//         <div>
//             <footer className="bg-[#5D38DE] text-white py-12 px-16">
//                 <div className="flex ">

//                     <div className='w-[27%] space-y-6'>
//                         <Image
//                             src={footerlogo}
//                             alt='footerlogo'
//                             width={1000}
//                             height={500}
//                             className='max-w-[211px]' />

//                         <div className="flex flex-col space-y-6">
//                             <input
//                                 type="email"
//                                 placeholder="Email address"
//                                 className="max-w-[332px] rounded-md px-4 py-2 outline placeholder-white text-white"
//                             />
//                             <Link href={"/home"}>
//                                 <button className="bg-white text-[#5D38DE] px-10 py-2 text-[19px] rounded-[16px] w-fit cursor-pointer">
//                                     Submit
//                                 </button></Link>
//                         </div>
//                     </div>

//                     <div className='w-[12%]'>
//                         <h3 className="text-[30px] font-semibold mb-4">Company</h3>
//                         <ul className="space-y-2 text-[18px] opacity-90">
//                             <li>Home</li>
//                             <li>Placement</li>
//                             <li>Our Story</li>
//                             <li>Resources</li>
//                             <li>Connect</li>
//                         </ul>
//                     </div>
//                     <div className="CoursesSection  w-[55%] flex  justify-evenly items-center ">



//                         <div>
//                             <h3 className="text-[30px] font-semibold mb-4">Courses</h3>
//                             <ul className="grid grid-cols-1 gap-2 text-[18px] space-y-2 opacity-90">
//                                 <li>Graphic Design</li>
//                                 <li>Digital Marketing</li>
//                                 <li>Python</li>
//                                 <li>WordPress</li>
//                                 <li>Web Designing</li>
//                                 <li>Web Development</li>

//                             </ul>
//                         </div>
//                         <div >
//                             <ul className='space-y-2 text-[18px]'>
//                                 <li>Development</li>
//                                 <li>PHP</li>
//                                 <li>Laravel</li>
//                                 <li>React Native</li>
//                                 <li>React Js</li>
//                                 <li>Personality</li>
//                             </ul>
//                         </div>

//                         <div>
//                             {/* <h3 className="text-[30px] font-semibold mb-4">More</h3> */}
//                             <ul className="space-y-2 text-[18px] opacity-90">
//                                 <li>Shopify App Development</li>
//                                 <li>Shopify Theme</li>
//                                 <li>C and C++</li>
//                                 <li>Flutter</li>
//                                 <li>Video Editing</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
//                     <p className="text-sm opacity-80">© B2B Campus. All Rights Reserved.</p>


//                     <div className="flex  gap-4">
//                         <Link href={"/"} >
//                             <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
//                                 <Image
//                                     src={Footerfacebook}
//                                     width={1000}
//                                     height={500}
//                                     className='w-[22px] h-[22px]'
//                                     alt='' />
//                             </div> </Link>

//                         <Link href={"/"} >
//                             <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
//                                 <Image
//                                     src={insta}
//                                     width={1000}
//                                     height={500}
//                                     className='w-[22px] h-[22px]'
//                                     alt='' />
//                             </div> </Link>
//                         <Link href={"/"} >
//                             <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
//                                 <Image
//                                     src={linkedin}
//                                     width={1000}
//                                     height={500}
//                                     className='w-[22px] h-[22px]'
//                                     alt='' />
//                             </div> </Link>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }

// export default Footer


import Image from 'next/image'
import React from 'react'
import footerlogo from '../../../../public/images/footerlogo.webp'
import Footerfacebook from '../../../../public/images/Footerfacebook.webp'
import linkedin from '../../../../public/images/linkedin.webp'
import insta from '../../../../public/images/insta.webp'
import footermiallogo from '../../../../public/images/footermiallogo.webp'
import Link from 'next/link'
const socialLinks = [
    { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
    { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
    { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" },
];
const Footer = () => {
    return (
        <footer className="bg-[#5D38DE] text-white py-10 px-4 sm:px-8 md:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-[30%_auto] gap-10 md:gap-0">

                {/* LEFT SECTION */}
                <div className="flex flex-col w-full space-y-6 items-center md:items-start text-center md:text-left">
                    <Image
                        src={footerlogo}
                        alt="footerlogo"
                        width={211}
                        height={60}
                        className="max-w-[211px]"
                    />

                    <div className="flex flex-col  gap-[20px] ">
                        <div className="email   max-w-[382px] ">
                            <div className="relative w-full">
                                <Image
                                    src={footermiallogo}
                                    width={1000}
                                    height={500}
                                    className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-70"
                                />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="text-[19px] border p-[14px] pl-12 rounded-[16px] w-full"
                                />
                            </div>
                        </div>

                        <Link href="/#">
                            <button className="bg-white text-[#5D38DE] px-6 sm:px-10 py-2 text-[16px] sm:text-[18px] rounded-[16px] w-full sm:w-auto">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT SECTION (COURSES) */}
                <div className="wrap-courses w-full px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-semibold mb-4">Company</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Home</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Placement</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Our Story</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Resources</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Connect</li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-semibold mb-4">Courses</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px]">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Graphic Design</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Digital Marketing</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Python</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">WordPress</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Web Designing</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Web Development</li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-semibold mb-4">More Courses</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px]">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Development</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">PHP</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Laravel</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">React Native</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">React Js</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Personality</li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-semibold mb-4">More Courses</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Shopify App Development</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Shopify Theme</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">C and C++</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Flutter</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Video Editing</li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

                <p className="text-sm opacity-80 text-center sm:text-left">© B2B Campus. All Rights Reserved.</p>

                <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-0">
                    {socialLinks.map((item, i) => (
                        <Link href={item.url} key={i} target="_blank">
                            <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                                <Image
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
        </footer>
    )
}

export default Footer
