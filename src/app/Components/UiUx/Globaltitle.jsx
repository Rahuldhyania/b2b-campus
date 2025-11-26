import React from 'react'

const Globaltitle = ({
    titleStart,
    highlightText,
    titleEnd,
    description
}) => {
    return (
        <div>
            <div className="text-center py-10 px-4">
                <h1 className="text-[100px]  font-bold text-gray-900 leading-snug">
                    {titleStart}{" "}
                    <span className=" px-3 py-1 rounded-xl text-[#6346FA]">
                        {highlightText} <br />
                    </span>{" "}
                    {titleEnd}
                </h1>

                <p className="mt-3 text-gray-600 text-[25px]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Globaltitle
