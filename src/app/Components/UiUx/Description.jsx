import React from 'react'

const Description = ({ description, text_color }) => {
    return (
        <div>
            <h2
                className={` text-[15px] md:text-[20px] leading-[32px] text-center font-bold ${text_color}`}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}

export default Description
