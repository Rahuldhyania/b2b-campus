import Image from 'next/image'
import React from 'react'
import footerlogo from '../../../../public/images/footerlogo.webp'
import Footerfacebook from '../../../../public/images/Footerfacebook.webp'
import linkedin from '../../../../public/images/linkedin.webp'
import insta from '../../../../public/images/insta.webp'
import Buttons from './Buttons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#5D38DE] text-white py-12 px-16">
                <div className="flex ">

                    {/* Logo + Email */}
                    <div className='w-[27%] space-y-6'>
                        <Image
                            src={footerlogo}
                            alt='footerlogo'
                            width={1000}
                            height={500}
                            className='max-w-[211px]' />

                        <div className="flex flex-col space-y-6">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="max-w-[332px] rounded-md px-4 py-2 outline placeholder-white text-white"
                            />
                            <Link href={"/home"}>
                                <button className="bg-white text-[#5D38DE] px-10 py-2 text-[19px] rounded-[16px] w-fit cursor-pointer">
                                    Submit
                                </button></Link>
                        </div>
                    </div>
                    {/* Company Section */}
                    <div className='w-[12%]'>
                        <h3 className="text-[30px] font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-[18px] opacity-90">
                            <li>Home</li>
                            <li>Placement</li>
                            <li>Our Story</li>
                            <li>Resources</li>
                            <li>Connect</li>
                        </ul>
                    </div>
                    <div className="CoursesSection  w-[55%] flex  justify-evenly items-center ">


                        {/* Courses Section */}
                        <div>
                            <h3 className="text-[30px] font-semibold mb-4">Courses</h3>
                            <ul className="grid grid-cols-1 gap-2 text-[18px] space-y-2 opacity-90">
                                <li>Graphic Design</li>
                                <li>Digital Marketing</li>
                                <li>Python</li>
                                <li>WordPress</li>
                                <li>Web Designing</li>
                                <li>Web Development</li>

                            </ul>
                        </div>
                        <div >
                            <ul className='space-y-2 text-[18px]'>
                                <li>Development</li>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>React Native</li>
                                <li>React Js</li>
                                <li>Personality</li>
                            </ul>
                        </div>
                        {/* Extra Courses */}
                        <div>
                            {/* <h3 className="text-[30px] font-semibold mb-4">More</h3> */}
                            <ul className="space-y-2 text-[18px] opacity-90">
                                <li>Shopify App Development</li>
                                <li>Shopify Theme</li>
                                <li>C and C++</li>
                                <li>Flutter</li>
                                <li>Video Editing</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm opacity-80">© B2B Campus. All Rights Reserved.</p>

                    {/* Social Icons */}
                    <div className="flex  gap-4">
                        <Link href={"/"} >
                            <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
                                <Image
                                    src={Footerfacebook}
                                    width={1000}
                                    height={500}
                                    className='w-[22px] h-[22px]'
                                    alt='' />
                            </div> </Link>

                        <Link href={"/"} >
                            <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
                                <Image
                                    src={insta}
                                    width={1000}
                                    height={500}
                                    className='w-[22px] h-[22px]'
                                    alt='' />
                            </div> </Link>
                        <Link href={"/"} >
                            <div className="facebook p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center">
                                <Image
                                    src={linkedin}
                                    width={1000}
                                    height={500}
                                    className='w-[22px] h-[22px]'
                                    alt='' />
                            </div> </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
