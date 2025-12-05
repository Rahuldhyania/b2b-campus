import React from 'react'
import Professionalskill from './Professionalskill'
import Banner from '../UiUx/Banner'
import PopularCourses from './PopularCourses'
import Teachcareer from './Teachcareer'
import CampusProgram from './CampusProgram'
import TopCompanys from './TopCompanys'
import FeaturedIn from './FeaturedIn'
import Journeywithb2b2 from './Journeywithb2b2'
import TestimonialsSlider from './TestimonialsSlider'
import Footer from '../UiUx/Footer'
import TrainingSection from './TrainingSection'
import FaqSection from './FaqSection'
import WhyChooseSection from './WhyChooseSection'
import Whatstudentget from './Whatstudentget'


const Homewrap = () => {
    return (
        <div>
            <Banner />
            <TrainingSection />
            <Professionalskill />
            <WhyChooseSection />
            <Whatstudentget />

            <PopularCourses />
            <Teachcareer />
            <CampusProgram />
            <TestimonialsSlider />
            <TopCompanys />

            <FeaturedIn />
            <FaqSection />
            <Journeywithb2b2 />

            <Footer />
        </div>
    )
}

export default Homewrap
