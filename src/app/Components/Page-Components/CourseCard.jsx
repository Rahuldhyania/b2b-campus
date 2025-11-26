import Image from "next/image";
import graphicdesigner from "../../../../public/images/graphicdesigner.webp";
import Truck from "../../../../public/images/Truck.webp";
import videoeditting from "../../../../public/images/videoeditting.webp";
import development from "../../../../public/images/development.png";
import digitalmarketing from "../../../../public/images/digitalmarketing.webp";
import arrowicon from "../../../../public/images/arrowicon.webp";



const courseData = [
    {
        image: graphicdesigner,
        craftedBy: "Crafted by Base2Brand Infotech - A Creative Agency",
        title: "Graphic Designing",
        duration: ["12 Weeks", "8 Modules", "Offline/Online Training"],
        features: [
            "Learn Photoshop, Illustrator, Figma, Canva",
            "Branding essentials & social media design",
            "Poster, logo, layout, and ad creatives",
            "Work on real client-style assignments"
        ],
        buttonText: "Enroll & View Courses",
        arrowIcon: arrowicon
    },
    {
        image: Truck,
        craftedBy: "Crafted by Base2Brand Infotech - A Creative Agency",
        title: "Truck Dispatching",
        duration: ["12 Weeks", "8 Modules", "Offline/Online Training"],
        features: [
            "Learn US load boards & booking systems",
            "Communication Mastery",
            "Introduction to logistics & dispatching",
            "Pricing, routing & negotiation fundamentals"
        ],
        buttonText: "Enroll & View Courses",
        arrowIcon: arrowicon
    },
    {
        image: videoeditting,
        craftedBy: "Crafted by Base2Brand Infotech - A Creative Agency",
        title: "Video Editing",
        duration: ["12 Weeks", "8 Modules", "Offline/Online Training"],
        features: [
            "Learn Premiere Pro, CapCut & DaVinci Resolve",
            "Cuts, transitions, pacing & storytelling",
            "Reels editing & YouTube-style editing",
            "Color grading, sound design & workflow"
        ],
        buttonText: "Enroll & View Courses",
        arrowIcon: arrowicon
    },
    {
        image: development,
        craftedBy: "Crafted by Base2Brand Infotech - A Creative Agency",
        title: "Video Editing",
        duration: ["12 Weeks", "8 Modules", "Offline/Online Training"],
        features: [
            "Learn Premiere Pro, CapCut & DaVinci Resolve",
            "Cuts, transitions, pacing & storytelling",
            "Reels editing & YouTube-style editing",
            "Color grading, sound design & workflow"
        ],
        buttonText: "Enroll & View Courses",
        arrowIcon: arrowicon
    },
    {
        image: digitalmarketing,
        craftedBy: "Crafted by Base2Brand Infotech - A Creative Agency",
        title: "Video Editing",
        duration: ["12 Weeks", "8 Modules", "Offline/Online Training"],
        features: [
            "Learn Premiere Pro, CapCut & DaVinci Resolve",
            "Cuts, transitions, pacing & storytelling",
            "Reels editing & YouTube-style editing",
            "Color grading, sound design & workflow"
        ],
        buttonText: "Enroll & View Courses",
        arrowIcon: arrowicon
    }
];
const CourseCard = ({ id }) => {



    return (
        <div className="w-full max-w-[1703px] mx-auto flex flex-wrap justify-center gap-6 mb-[4%]">

            {courseData.map((data, index) => (
                <div
                    key={index}
                    className="bg-white rounded-[30px] shadow-md overflow-hidden min-w-[520px] max-w-[520px]"
                >
                    {/* Top Image */}
                    <div>
                        <Image
                            src={data.image}
                            alt="graphicdesigner"
                            width={700}
                            height={300}
                            className="w-full h-[240px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-[#EBE9F3] leading-[40px] p-[15px]">

                        <p className="text-[14px] text-[#6346FA] underline mb-3 mx-[15px]">
                            {data.craftedBy}
                        </p>

                        <h3 className="text-[34px] font-semibold text-[#1C1C1C] mb-4 mx-[15px]">
                            {data.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 mb-4">
                            {data.duration.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-[14px] shadow-sm rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <ul className="space-y-2 mb-6">
                            {data.features.map((f, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-[18px] text-[#333]"
                                >
                                    <span className="text-[#6B4EFF] text-lg mx-[15px]">→</span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between items-center bg-white border border-[#6346FA4D] rounded-full p-[2%] cursor-pointer">
                            <span className="text-[22px] font-medium text-[#1C1C1C]">
                                {data.buttonText}
                            </span>

                            <div className="w-[45px] h-[45px] rounded-full bg-[#CEC5FF] flex items-center justify-center">
                                <Image
                                    src={data.arrowIcon}
                                    alt="arrow"
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>


    );
};

export default CourseCard;











