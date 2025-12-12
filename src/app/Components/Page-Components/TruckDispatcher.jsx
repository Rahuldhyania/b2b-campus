import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CanadaUSA from "../Courses/CanadaUSA";
import CourseSyllabus from "../Courses/CourseSyllabus";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import truckdispatchgirl from "../../../../public/images/truckdispatchgirl.webp";
import whitetruck from "../../../../public/images/whitetruck.webp";
import boylike from "../../../../public/images/boylike.webp";
import turckleft from "../../../../public/images/turckleft.webp";
const faq_data = [
  {
    q: "What does the B2B Campus truck dispatching course cover for students in Mohali?",
    a: "The course covers load management, freight coordination, communication skills, carrier relations, software training, and complete practical dispatching knowledge through flexible online and offline classes in Mohali."
  },
  {
    q: "How long is the truck dispatching course at B2B Campus in Mohali?",
    a: "The program duration varies from two to three months, offering flexible schedules for students. Both online and offline classes are available to support beginners and working professionals effectively."
  },
  {
    q: "Does B2B Campus provide practical training during truck dispatching classes in Mohali?",
    a: "Yes, students receive hands-on practice with real load boards, dispatching tools, communication scenarios, and industry workflows in both online and offline modes for practical skill development."
  },
  {
    q: "Do students need prior logistics experience to join the truck dispatching course?",
    a: "No prior experience is required. Beginners can easily enrol as the B2B Campus course starts with fundamentals and gradually progresses to advanced dispatching concepts and real-work activities."
  },
  {
    q: "Does B2B Campus offer placement support after course completion in Mohali?",
    a: "Yes, B2B Campus provides placement assistance, interview guidance, resume preparation, and job referrals to help students secure truck dispatching or logistics roles successfully after training."
  },
  {
    q: "What study materials are provided in the truck dispatching course at B2B Campus?",
    a: "Students receive notes, dispatching templates, software training access, practice files, and recorded class sessions to support learning in both online and offline training modes."
  },
  {
    q: "Who teaches the truck dispatching course at B2B Campus in Mohali?",
    a: "Experienced industry professionals conduct training, offering real-world dispatching insights, updated market knowledge, and practical guidance to prepare students for professional dispatching careers."
  },
  {
    q: "Can students shift between online and offline classes during the course?",
    a: "Yes, B2B Campus allows flexible switching between online and offline batches, enabling students to continue learning conveniently based on schedule changes or personal requirements."
  },
  {
    q: "Does the truck dispatching course cover the US freight market and load boards?",
    a: "Yes, the curriculum includes US trucking basics, load board usage, carrier coordination, freight rates, and dispatching responsibilities for a strong international dispatching career foundation."
  },
  {
    q: "How can students enrol in the B2B Campus truck dispatching course in Mohali?",
    a: "Students can register online or visit the Mohali campus. Basic details, identification documents, and chosen batch mode are required for completing the admission process smoothly."
  }
];

const TruckDispatcher = () => {
  const Syllabus_data = [
    {
      title: "Module 1 - Introduction",
      points: [
        "What is dispatch business?",
        "Required skills",
        "Course overview",

      ],
    },
    {
      title: "Module 2 - Parties Involved",
      points: ["Role of a dispatcher", "Benefits of dispatcher services", "Owner operations and small fleet owner"],
    },
    {
      title: "Module 3 - Clients",
      points: ["Setting up with your client – contact", "Requesting documents from your client", "Download – sample carrier profile form.", "Download –  Sample of documents you will be requesting.", "Verbal agreement – Scope of booking decision "],
    },
    {
      title: "Module 4 - Equipment and Freight",
      points: ["Types of Trucks", "Trailer types", "Weight", "Commodity"],
    },
    {
      title: "Section 5 - Logistics",
      points: ["Pick-up and delivery times and their importance", "Extra Stops (Multiple deliveries)"],
    },
    {
      title: "Section 6 - Finding Freight",
      points: ["Load boards –  electronic marketplace", "DAT", "Internet Truck Stop", "Private 3PL boards", "Posting trucks"],
    },
    {
      title: "Module 7 - Booking Your First Load",
      points: ["Getting the right information", "Acceptable rates and negotiation", "Negotiantion tips", "Checking broker’s credit", "Getting set up with broker"],
    },
  ];
  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "Massive Global Demand",
      subtitle:
        "The USA & Canada logistics industry is growing fast with thousands of new dispatcher openings.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Work-from-Home Flexibility",
      subtitle:
        "Earn from anywhere in India while working with international trucking companies.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Potential",
      subtitle:
        "Make ₹25,000–₹85,000 per month or up to $2,000/month with global clients.",
    },
    {
      icon: "/images/digree.webp",
      title: "No Degree Required",
      subtitle:
        "Anyone can start — strong communication skills and proper training are enough.",
    },
  ];
  const items = [
    {
      icon: "/images/45days.webp",
      title: "45 Days",
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
      subtitle: "Work-from-Home or Abroad",
    },
    {
      icon: "/images/money.webp",
      title: "INR / USD",
      subtitle: "Flexible Salary Opportunities",
    },
  ];
  const program_data = [
    { text: "US & Canada Trucking System", icon: "/images/greencheck.webp" },
    { text: "Live Load Booking (DAT, Truckstop)", icon: "/images/greencheck.webp" },
    { text: "Broker Communication", icon: "/images/greencheck.webp" },
    { text: "Rate Negotiation", icon: "/images/greencheck.webp" },
    { text: "Load Planning & Route Optimization", icon: "/images/greencheck.webp" },
    { text: "Safety & Compliance", icon: "/images/greencheck.webp" },
    { text: "Carrier Packets + Invoicing", icon: "/images/greencheck.webp" },
    { text: "Live Dispatch Practice with Real Loads", icon: "/images/greencheck.webp" },
    { text: "Real-Time Operations", icon: "/images/greencheck.webp" },
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
        highlightText={'Become a Certified Truck Dispatcher'}
        titleEnd={'in 45 Days'}
        description={"Master US & Canada Logistics • Work-from-Home • Earn in INR or USD"}
        leftposter={truckdispatchgirl}
        rightposter={whitetruck}
      />
      <CoursesCareer
        items={items}
        left_banner={boylike}
        featuresMain={featuresMain}
        title={'Why Truck Dispatching is the  <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Logistics industry in USA & Canada is booming — dispatchers are in massive demand."}
      />
      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">45-Day Intensive </span> <br/> Dispatching Program'}
      />
      <AboutCourse
        title={'About Truck Dispatching Course'}
        description1={`
        The <span class="font-semibold text-black">Truck Dispatching Class </span> is a hands-on training program that prepares you for a successful career in logistics and transportation.`}
        description2={`
           This <span class="font-semibold text-black">truck dispatcher course</span> covers essential skills like <span class="text-[#6346FA] font-medium"> {" "}load booking, driver coordination, route planning, and dispatch software usage </span>. Perfect for aspiring dispatchers or entrepreneurs, the dispatching class offers real-world knowledge and industry insights.`}
        description3={`
           Whether you’re launching a dispatch service or joining a logistics company,this <span class="font-semibold text-black">truck dispatching class </span>
           helps you build a solid foundation for long-term success in the freight industry.
          `}
      />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />
      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
        <CanadaUSA />
      </div>
      <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
      <BecomeStudent
        title={'From Training to Truck <sapn class="text-primary"> Dispatching Success </span>'}
        description={`Build a Profitable, Efficient, and High-Demand Dispatching Career with Real-World Training. Learn how to manage loads, communicate with drivers, and handle logistics like a pro. This course equips you with in-demand skills to launch a successful dispatching business or work with top freight companies.`}
        right_image={turckleft}
      />
      <FaqSection faq_data={faq_data} />
      <Journeywithb2b2 />
    </div>
  );
};

export default TruckDispatcher;
