import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import Certificate from './Certificate';
import Description from '../UiUx/Description';

const CampusProgram = () => {
    return (
        <div>
            <div className="skill-title-container  bg-[length:43%] bg-no-repeat bg-top py-6 relative mb-[8%]"
                style={{ backgroundImage: `url(${smallbublebg.src})` }}
            >
                <Title
                    title={'<span class="text-primary">B2B Campus Programs </span> <br/>  Trained 100+ Learners Through '}
                    text_color={'text-secondary'}
                />
                <Description
                    description={'Helping learners gain the skills, confidence, and direction to <br /> move ahead in their careers.'}
                    text_color={'text-secondary'}
                />
            </div>
            <Certificate />
        </div>
    )
}

export default CampusProgram
