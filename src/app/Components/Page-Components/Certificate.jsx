
import React from 'react'
import certificateone from '../../../../public/images/certificateone.webp'
import certificate2 from '../../../../public/images/certificate2.webp'
import certificate3 from '../../../../public/images/certificate3.webp'
import certificate4 from '../../../../public/images/certificate4.webp'
import Image from 'next/image'

const Certificate = () => {
    return (
        <div>
            <div className="wrap-card flex justify-evenly items-center">


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
            </div>
        </div>
    )
}

export default Certificate
