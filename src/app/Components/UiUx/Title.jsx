import React from 'react'

const Title = ({ title, text_color }) => {
    return (
        <h2
            className={` text-[22px] md:text-[32px] 2xl:text-[45px] 2xl:leading-[55px] py-8 text-center font-bold ${text_color}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    )
}

export default Title
