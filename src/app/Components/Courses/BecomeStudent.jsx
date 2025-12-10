import Image from 'next/image';
import React from 'react';
import turckleft from "../../../../public/images/turckleft.webp";
import Buttons from '../UiUx/Buttons';
import Title from '../UiUx/Title';
const BecomeStudent = () => {
    return (
        <div>
            <section className="cus_container py-16">
                <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                       <div className='text-center md:text-start'>
                         <Title
                            title={'From Training to Truck <sapn class="text-primary"> Dispatching Success </span>'}
                            text_color={'text-secondary md:text-start'}
                        />

                       </div>
                        <p className="text-base md:text-xl lg:text-2xl text-black mt-6 leading-relaxe text-center md:text-start">
                            Build a Profitable, Efficient, and High-Demand Dispatching Career with
                            Real-World Training. Learn how to manage loads, communicate with
                            drivers, and handle logistics like a pro. This course equips you with
                            in-demand skills to launch a successful dispatching business or work
                            with top freight companies.
                        </p>

                        <div className='pt-6 flex justify-center md:justify-start'>
                            <Buttons
                                btnname={'Apply for Counselling →'}
                                text_color={'text-white'}
                            />
                        </div>
                    </div>
                    <div className="relative flex justify-center md:justify-end">
                        <div className="overflow-hidden  w-[90%] md:w-full">
                            <Image
                                src={turckleft}
                                width={1000}
                                height={500}
                                alt="Truck Dispatching Training"
                                className="w-auto max-h-[600px] object-cover m-auto"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default BecomeStudent
