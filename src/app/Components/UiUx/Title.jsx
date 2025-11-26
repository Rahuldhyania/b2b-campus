import React from 'react'

const Title = ({ title, text_color }) => {
    return (
        <h2
            className={`text-[70px] leading-[85px] text-center font-bold ${text_color}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    )
}

export default Title
