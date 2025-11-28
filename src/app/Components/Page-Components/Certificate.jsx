
import React from 'react'
import certificateone from '../../../../public/images/certificateone.webp'
import certificate2 from '../../../../public/images/certificate2.webp'
import certificate3 from '../../../../public/images/certificate3.webp'
import certificate4 from '../../../../public/images/certificate4.webp'
import Image from 'next/image'

const Certificate = () => {
    return (
        <div>
            {/* <div className="wrap-card flex justify-evenly items-center">


                <div className="card-img">
                    <div className="text-card text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">

                        <p className='text-[#5D38DE]'> 10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span></p>
                    </div>
                    <div className="img">
                        <Image
                            src={certificateone}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[430px]" />
                    </div>
                </div>
                <div className="card-img">

                    <div className="img">
                        <Image
                            src={certificate2}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[430px]" />
                    </div>
                    <div className="text-card text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">

                        <p className='text-[#5D38DE]'> 10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span></p>
                    </div>
                </div>
                <div className="card-img">

                    <div className="img">
                        <Image
                            src={certificate3}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[430px]" />
                    </div>
                </div>
                <div className="card-img">

                    <div className="img">
                        <Image
                            src={certificate4}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[430px]" />
                    </div>
                    <div className="text-card text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">

                        <p className='text-[#5D38DE]'> 10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span></p>
                    </div>
                </div>
            </div> */}
            <div className="wrap-card flex flex-col md:flex-row flex-wrap justify-center md:justify-evenly items-center gap-6 px-4">

                <div className="border-none rounded-[19px] card-img flex flex-col md:flex-col items-center gap-4
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]
                    transition-all duration-300 hover:bg-[#F5F0FF]">
                        <p className='text-[#5D38DE]'>
                            10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
                        </p>
                    </div>
                    <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
                        <Image
                            src={certificateone}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
                        />
                    </div>
                </div>

                <div className="border-none rounded-[19px] card-img flex flex-col md:flex-col items-center gap-4
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
                        <Image
                            src={certificate2}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
                        />
                    </div>
                    <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]
                    transition-all duration-300 hover:bg-[#F5F0FF]">
                        <p className='text-[#5D38DE]'>
                            10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
                        </p>
                    </div>
                </div>

                <div className="border-none rounded-[19px] card-img flex flex-col items-center gap-4
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
                        <Image
                            src={certificate3}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
                        />
                    </div>
                </div>

                <div className="border-none rounded-[19px]card-img flex flex-col md:flex-col items-center gap-4
                  transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="img overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-105">
                        <Image
                            src={certificate4}
                            alt="Certificate"
                            width={1000}
                            height={500}
                            className="max-w-[100%] sm:max-w-[400px] md:max-w-[430px]"
                        />
                    </div>
                    <div className="text-card text-[18px] sm:text-[20px] md:text-[21px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]
                    transition-all duration-300 hover:bg-[#F5F0FF]">
                        <p className='text-[#5D38DE]'>
                            10+<span className='text-black'> Learners Have Launched Their Own Startups After Training</span>
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Certificate
