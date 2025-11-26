import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import scoopearth from "../../../../public/images/scoopearth.webp"
import timebussines from "../../../../public/images/timebussines.webp"
import Title from '../UiUx/Title'
import Image from 'next/image'

const FeaturedIn = () => {
    return (
        <div className='main-bg'>
            <div className="skill-title-container bg-no-repeat   bg-bottom py-6"
                style={{
                    backgroundImage: `url(${titlewhitebg.src}) `,
                    backgroundSize: '732px auto'
                }}
            >
                <Title
                    title={' <sapn class="text-primary">Featured In  </span>'}
                    text_color={'text-secondary'}
                />
            </div>
            <div className="card-wrap flex justify-center items-center">
                <div className="card-img bg-white">
                    <div className="text-card text-start     text-[16px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">
                        <div className="img">
                            <Image
                                src={scoopearth}
                                alt="Certificate"
                                width={1000}
                                height={500}
                                className="max-w-[201px]" />
                        </div>
                        <p className='text-[#5D38DE]'> <span className='text-black'> Scoop Earth, a news Magzine has ranked number one to B2B Campus for providing the best graphic designing course in Chandigarh. This recognition highlights B2B Campus’s commitment to delivering unparalleled excellence in graphic designing education.</span></p>
                    </div>

                </div>
                <div className="card-img bg-[white]">
                    <div className="text-card text-start     text-[16px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">
                        <div className="img">
                            <Image
                                src={timebussines}
                                alt="Certificate"
                                width={1000}
                                height={500}
                                className="max-w-[301px]" />
                        </div>
                        <p className='text-[#5D38DE] '> <span className='text-black bg-[#F3F0FF]'> With their exceptional curriculum and industry-relevant training, B2B Campus sets the benchmark for web designing education in Chandigarh, as acknowledged by Time Business News’s prestigious ranking.</span></p>
                    </div>

                </div>
                <div className="card-img bg-[white]">
                    <div className="text-card text-start     text-[16px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">
                        <div className="img">
                            <Image
                                src={scoopearth}
                                alt="Certificate"
                                width={1000}
                                height={500}
                                className="max-w-[201px]" />
                        </div>
                        <p className='text-[#5D38DE]'> <span className='text-black'> Scoop Earth, a news Magzine has ranked number one to B2B Campus for providing the best graphic designing course in Chandigarh. This recognition highlights B2B Campus’s commitment to delivering unparalleled excellence in graphic designing education.</span></p>
                    </div>

                </div>
                <div className="card-img bg-[white] ">
                    <div className="text-card text-start     text-[16px] max-w-[370px] text-center p-[10px] border-[#6346FA4D] rounded-[29px]">
                        <div className="img">
                            <Image
                                src={scoopearth}
                                alt="Certificate"
                                width={1000}
                                height={500}
                                className="max-w-[201px]" />
                        </div>
                        <p className='text-[#5D38DE]'> <span className='text-black'> Scoop Earth, a news Magzine has ranked number one to B2B Campus for providing the best graphic designing course in Chandigarh. This recognition highlights B2B Campus’s commitment to delivering unparalleled excellence in graphic designing education.</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedIn
