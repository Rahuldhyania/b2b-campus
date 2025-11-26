import React from 'react'
import Professionalskill from './Professionalskill'
import Banner from '../UiUx/Banner'
import PopularCourses from './PopularCourses'
import Teachcareer from './Teachcareer'
import CampusProgram from './CampusProgram'
import TopCompanys from './TopCompanys'
import FeaturedIn from './FeaturedIn'

const Homewrap = () => {
    return (
        <div>
            <Banner />
            <Professionalskill />
            <PopularCourses />
            <Teachcareer />
            <CampusProgram />
            <TopCompanys />
            <FeaturedIn />
        </div>
    )
}

export default Homewrap
