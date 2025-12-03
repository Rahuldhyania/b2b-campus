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


const Homewrap = () => {
    return (
        <div>
            <Banner />
            <Professionalskill />
            <PopularCourses />
            <Teachcareer />
            <CampusProgram />
            <TestimonialsSlider />
            <TopCompanys />
            <TrainingSection />
            <FeaturedIn />
            <FaqSection />
            <Journeywithb2b2 />

            <Footer />
        </div>
    )
}

export default Homewrap
