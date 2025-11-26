import React from 'react'
import Professionalskill from './Professionalskill'
import Banner from '../UiUx/Banner'
import PopularCourses from './PopularCourses'
import Teachcareer from './Teachcareer'
import CampusProgram from './CampusProgram'

const Homewrap = () => {
    return (
        <div>
            <Banner />
            <Professionalskill />
            <PopularCourses />
            <Teachcareer />
            <CampusProgram />
        </div>
    )
}

export default Homewrap
