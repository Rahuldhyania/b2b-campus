import Image from "next/image";
import fontscratch from "../../../../public/images/fontscratch.webp"
import manlaptop from "../../../../public/images/manlaptop.webp"
import cloud from "../../../../public/images/cloud.webp"
export default function ScratchCards() {
    const scratchCards = [
        {
            title: "NOTES",
            subtitle: "Build Skills Through Real Projects",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-purple-400",
            rotate: "-rotate-3",
        },
        {
            title: "COURSES",
            subtitle: "Learn From Real Instructors",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-yellow-400",
            rotate: "rotate-2",
        },
        {
            title: "TUTORIALS",
            subtitle: "Step-by-Step Learning",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-green-400",
            rotate: "-rotate-2",
        },
        {
            title: "PROJECTS",
            subtitle: "Hands-on Practical Experience",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-pink-400",
            rotate: "rotate-3",
        },
    ];

    return (
        // <div className=" absolute inset-0 m-auto z-10  top-0 w-full h-full max-w-none mx-auto flex flex-wrap justify-center gap-12 mt-10 px-4">

        //     <div className="grid grid-cols-2 max-w-[80%] w-full">
        //         {scratchCards.map((item, index) => (
        //             <div
        //                 key={index}
        //                 className={`
        //     flex flex-col justify-center items-center
        //     transform transition duration-500
        //     hover:scale-105
        //     cursor-pointer
        //     ${item.rotate}
        //   `}
        //             >
        //                 {/* Card container */}
        //                 <div
        //                     className={`
        //       relative rounded-[30px] px-10 py-10 flex flex-col items-center
        //       ${item.bgColor} shadow-md shadow-opacity-50
        //       hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]
        //       transition-shadow duration-500
        //     `}
        //                 >
        //                     {/* Scratch image overlay */}
        //                     <Image
        //                         src={item.scratchImg}
        //                         alt="scratch"
        //                         width={220}
        //                         height={80}
        //                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[75%] object-contain"
        //                         priority
        //                     />

        //                     {/* Title */}
        //                     <h2 className="text-[42px] font-semibold text-center text-[#6346FA] tracking-wide">
        //                         {item.title}
        //                     </h2>

        //                     {/* Subtitle */}
        //                     <p className="text-[20px] text-black text-center mt-3 leading-tight">
        //                         {item.subtitle}
        //                     </p>
        //                 </div>
        //             </div>
        //         ))}

        //     </div>
        // </div>
        <div className="relative w-full flex justify-center px-4 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[80%] w-full">
                {scratchCards.map((item, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer ${item.rotate}`}>
                        <div className={`relative rounded-[30px] p-6 flex flex-col items-center ${item.bgColor} shadow-md hover:shadow-lg transition-shadow duration-500`}>
                            <Image
                                src={item.scratchImg}
                                alt="scratch"
                                width={220}
                                height={80}
                                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                                priority
                            />
                            <h2 className="text-[42px] font-semibold text-center text-[#6346FA] tracking-wide">{item.title}</h2>
                            <p className="text-[20px] text-black text-center mt-3 leading-tight">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
