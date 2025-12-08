'use client'
import React, { useRef, useEffect, useState } from "react";
import Professionalskill from "./Professionalskill";
import Banner from "../UiUx/Banner";
import PopularCourses from "./PopularCourses";
import Teachcareer from "./Teachcareer";
import CampusProgram from "./CampusProgram";
import TopCompanys from "./TopCompanys";
import FeaturedIn from "./FeaturedIn";
import Journeywithb2b2 from "./Journeywithb2b2";
import TestimonialsSlider from "./TestimonialsSlider";
import Footer from "../UiUx/Footer";
import TrainingSection from "./TrainingSection";
import FaqSection from "./FaqSection";
import WhyChooseSection from "./WhyChooseSection";
import Whatstudentget from "./Whatstudentget";
import Youtubevideo from "./Youtubevideo";
import FooterNew from "../UiUx/FooterNew";

const Homewrap = () => {
    const enrolRef = useRef(null);
    const [width, setWidth] = useState(1200); // default

    // 👉 window only available in the browser
    useEffect(() => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth, "innerWidth");
    }, []);

    const scrollToEnrolment = () => {
        enrolRef.current?.scrollIntoView({
            behavior: "smooth",
            top: width < 768 ? 700 : 0,
        });
    };

    return (
        <div>
            <div className="" ref={enrolRef}>
                <Banner />
            </div>
            <div className="main-bg">
                <TrainingSection />
                <Professionalskill />
                <WhyChooseSection />
            </div>
            <Whatstudentget />
            <PopularCourses clickscroll={scrollToEnrolment}/>
            <Teachcareer clickscroll={scrollToEnrolment}/>
            <CampusProgram clickscroll={scrollToEnrolment}/>
            <TestimonialsSlider />
            <TopCompanys clickscroll={scrollToEnrolment}/>
            <FeaturedIn />
            <FaqSection />
            <Youtubevideo />
            <Journeywithb2b2 />
            {/* <FooterNew/> */}
        </div>
    );
};

export default Homewrap;
