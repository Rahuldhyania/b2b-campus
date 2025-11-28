import React from 'react'

const Title = ({ title, text_color }) => {
    return (
        <h2
            className={` text-[32px] 2xl:text-[70px] 2xl:leading-[85px] text-center font-bold ${text_color}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    )
}

export default Title
