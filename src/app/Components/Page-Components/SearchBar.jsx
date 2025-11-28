import React from 'react'

const SearchBar = ({
    placeholder = "What do you want to learn?",
    buttonText = "Search",
    borderColor = "#E4DFFF",
    bgColor = "#FFFFFF",
    buttonBg = "#1B1B2B",
    textColor = "#000000",
    buttonTextColor = "#FFFFFF",
}) => {
    return (
        <div>
            {/* <div className=" flex justify-center mt-10">
                <div
                    className=" w-full max-w-[489px] p-[13px] flex items-center gap-2 rounded-full "
                    style={{
                        backgroundColor: bgColor,
                        border: `4px solid ${borderColor}`,
                    }}
                >
             
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="text-[16px] flex-1 bg-transparent outline-none border-none"
                        style={{ color: textColor }}
                    />

              
                    <button
                        className="w-[142px] text-[16px] p-[13px] flex justify-center items-center outline-none border-none rounded-[12px] cursor-pointer"
                        style={{
                            backgroundColor: buttonBg,
                            color: buttonTextColor,
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div> */}
            <div className="flex justify-center mt-10">
                <div
                    className="w-full  max-w-[489px] lg:max-w-[550px] xl:max-w-[400px] 2xl:max-w-[600px] p-[13px] flex items-center gap-2 rounded-full"
                    style={{
                        backgroundColor: bgColor,
                        border: `4px solid ${borderColor}`,
                    }}
                >
                    {/* Input */}
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="text-[16px] flex-1 bg-transparent outline-none border-none"
                        style={{ color: textColor }}
                    />

                    {/* Button */}
                    <button
                        className="w-[142px] lg:w-[160px] xl:w-[90px] text-[16px] xl:p-[8px] p-[13px] flex justify-center items-center outline-none border-none rounded-[12px] cursor-pointer"
                        style={{
                            backgroundColor: buttonBg,
                            color: buttonTextColor,
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SearchBar



