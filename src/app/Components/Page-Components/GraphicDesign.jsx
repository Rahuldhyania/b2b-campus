import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CourseSyllabus from "../Courses/CourseSyllabus";
import AboutCourse from "../Courses/AboutCourse";
import graphic_left from "../../../../public/images/graphic_left.webp";
import graphic_right from "../../../../public/images/graphic_right.webp";
import graphic_left_banner from "../../../../public/images/graphic_left_banner.webp"
const faq_data = [
    {
        q: "Is this course good for beginners?",
        a:
            "Yes! Even if you have zero experience, we teach from basics to advanced in a simple and friendly way."
    },
    {
        q: "Will I really learn practical skills?",
        a:
            "Definitely. You will learn 100% practical skills, real projects, assignments, and hands-on sessions — exactly what companies want."
    },
    {
        q: "How will this course help my career?",
        a:
            "This course is designed to make you job-ready, build real skills, and help you create a stable, successful future."
    },
    {
        q: "Do you provide placement support?",
        a:
            "Yes. We help with resume making, interview preparation, mock interviews, and job opportunities through our network."
    },
    {
        q: "Who are the teachers?",
        a:
            "You will learn from experienced and reliable trainers who explain everything clearly and support you throughout the journey."
    },
    {
        q: "What makes your teaching style unique?",
        a:
            "We use a smart, modern, student-friendly teaching method with easy examples, practical demos, and step-by-step explanation."
    },
    {
        q: "Is the course affordable for students?",
        a:
            "Yes. We provide high-quality training at student-friendly fees, with the best value in the market."
    },
    {
        q: "How do you help in interviews?",
        a: `We train you with:\n• Mock interviews\n• Confidence-building sessions\n• Communication tips\n• Company-level interview questions`
    },
    {
        q: "What do current students like the most?",
        a: `Students love our:\n• Trendy, modern learning environment\n• Friendly teachers\n• Practical approach\n• Real project experience\n• Motivating atmosphere\n• Personal attention\n• Easy explanations\n• Lifetime guidance\n• Strong career focus`
    },
    {
        q: "How can I join the course?",
        a:
            "Simple! Just contact us → Attend a quick counseling session → Choose batch → Start learning."
    }
];
const GraphicDesign = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Canva",
            points: [
                "Canva Tools Overview",
                "Create Animations",
                "Text Effects & Shadows",
                "Create Videos",
                "Social Media Post Design",
                "Thumbnail Design",
            ],
        },
        {
            title: "Module 2 - Creative Design",
            points: [
                "Banner Design",
                "Brochure Design",
                "Create Transitions",
                "Business Stationery Design",
                "Instagram Highlights",
                "Illustrations",
            ],
        },
        {
            title: "Module 3 - Photoshop (Basics)",
            points: [
                "Photoshop Tools Overview",
                "Image Cutting",
                "Image Retouching",
                "Image Optimization",
                "Social Media Post Design",
                "Book Design",
                "Branding Design",
            ],
        },
        {
            title: "Module 4 - Advanced Photoshop",
            points: [
                "Thumbnail Design",
                "Banner Design",
                "Brochure Design",
                "Pattern & Texture Styles",
                "Increase Image Resolution",
            ],
        },
        {
            title: "Module 5 - Photo Editing",
            points: [
                "Image Adjustment Tools",
                "Photo Filter Tools",
                "Create Manipulation",
                "Caricature Design",
                "Pen Tablet Work",
            ],
        },
        {
            title: "Module 6 - Illustrator",
            points: [
                "Illustrator Tools Overview",
                "Logo Design Creation",
                "Mood Board Creation",
                "Vector Graphics Design",
                "3D Design",
                "Extrude & Bevel",
            ],
        },
        {
            title: "Module 7 - Printable Work",
            points: [
                "Standee Design",
                "Canopy Design",
                "Business Stationery",
                "Cover Design",
                "Book Design",
            ],
        },
        {
            title: "Module 8 - Advanced Design Skills",
            points: [
                "Revolve",
                "Rotate",
                "Image Optimization",
                "Brochure Design",
                "Instagram Highlights",
                "Profile Design",
                "Branding Design",
            ],
        },
        {
            title: "Module 9 - Creative Effects",
            points: [
                "Style Guides",
                "Artistic Filters",
                "Brush Strokes",
                "Distort Effects",
                "Sketch Effects",
                "Stylize",
                "Infographic Design",
            ],
        },
        {
            title: "Module 10 - Professional Design",
            points: [
                "Packaging Design",
                "Label Design",
                "Hoarding Design",
                "Menu Design",
                "Typography",
                "Business Card Design",
            ],
        },
        {
            title: "Module 11 - Industrial Training",
            points: [
                "9 Weeks Industrial Training",
                "Practical Project Work",
                "Professional Certifications",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Demand Worldwide",
            subtitle:
                "Global logistics companies are actively hiring skilled dispatchers across the USA & Canada.",
        },
        {
            icon: "/images/usertea.webp",
            title: "100% Work From Home",
            subtitle:
                "Work remotely from anywhere in India and collaborate with international trucking firms.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "Attractive Monthly Earnings",
            subtitle:
                "Earn ₹25,000 to ₹85,000 per month or up to $2,000 monthly with global clients.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Formal Degree Needed",
            subtitle:
                "Anyone can begin — good communication skills and professional training are sufficient.",
        },
    ];

    const items = [
        {
            icon: "/images/45days.webp",
            title: "3 Months",
            subtitle: "Practical Training ",
        },
        {
            icon: "/images/handmoney.webp",
            title: "100%",
            subtitle: "Placement Support",
        },
        {
            icon: "/images/globeicon.webp",
            title: "Global Work",
            subtitle: "Freelance or Full-Time",
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Earning Opportunitiess",
        },
    ];
    const program_data = [
        { text: "Fundamentals of Graphic Design", icon: "/images/greencheck.webp" },
        { text: "Branding & Logo Design", icon: "/images/greencheck.webp" },
        { text: "Ad Creatives for Businesses", icon: "/images/greencheck.webp" },
        { text: "Poster & Banner Design", icon: "/images/greencheck.webp" },
        { text: "Social Media Creative Design", icon: "/images/greencheck.webp" },
        { text: "Typography & Color Theory", icon: "/images/greencheck.webp" },
        { text: "UI Design Basics (Figma)", icon: "/images/greencheck.webp" },
        { text: "Adobe Illustrator & Photoshop", icon: "/images/greencheck.webp" },
        { text: "Real Client Projects & Practical Training", icon: "/images/greencheck.webp" },
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Housewives (WFH jobs)", icon: "/images/greencheck.webp" },
        { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting international income", icon: "/images/greencheck.webp" },

    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1, // correct property name
            title: "Expert US Logistics Trainers",
            description: "Learn directly from professionals with 7–15 years of real industry experience.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Dispatch Training",
            description: "Work on real loads and real scenarios — not just theory.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Personal Mentorship",
            description: "Every student gets a dedicated mentor for guidance.",
        },
        {
            id: 4,
            number: 4,
            title: "English Skill Boost",
            description: "Improve communication for calls, emails, and client interaction.",
        },
        {
            id: 5,
            number: 5,
            title: "Work-from-Home Setup Help",
            description: "Get complete guidance to build a professional remote workspace.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description: "Gain hands-on experience immediately after completing the course.",
        },
    ];
    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Professional Graphic Designer'}
                titleEnd={'in 3 Months'}
                description={"Master Branding • UI/UX Basics • Social Media Design • Portfolio Building"}
                leftposter={graphic_left}
                rightposter={graphic_right}
            />
            <CoursesCareer
                items={items}
                left_banner={graphic_left_banner}
                featuresMain={featuresMain}
                title={'Why Graphic Design is the  <br/> <span class="text-primary">Next Big Career</s  pan>'}
                description={"Work with top brands, startups, and international clients"}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/> Graphic Design Program'}
            />
            <AboutCourse
                title={'About Graphic Design Course'}
                description1={`
                  B2B Campus is proud to offer a comprehensive Graphic Design course designed to equip students with the skills needed to succeed in the fast-paced world of graphic design. With a focus on practical, hands-on experience, this course provides a deep understanding of design principles, color theory, typography, and more.`}
                description2={`
                    Our expert instructors guide students through a range of projects and assignments, helping them to build a strong portfolio that showcases their skills and creativity.`}
                description3={`
                    Whether you’re looking to start a career in graphic design, or you’re a professional looking to expand your skill set, this course is perfect for you.            
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Graphic Design Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            {/* <BecomeStudent /> */}
            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 />
        </div>
    );
};

export default GraphicDesign;
