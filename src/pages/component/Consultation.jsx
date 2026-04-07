import React from "react";


function Consultation() {
    return (
        <div className="w-full bg-[#f9fafb] ">

            {/* TOP CONTENT */}
            <div className="max-w-[1440px] mx-auto py-[15px] px-6  flex flex-col items-center">

                {/* Badge */}
                <div className="inline-flex items-center text-center gap-2 md:gap-3 bg-white border border-[#E9E9E9] px-3 md:px-6 py-2 md:py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] mb-6 md:mb-10">
                    <img src="/icons/Star.svg" alt="star" className="w-4 md:w-5" />

                    <span className="text-[10px] md:text-sm font-semibold tracking-[0.2em] text-[#B668DC] uppercase whitespace-nowrap">
                        LET'S START WITH US
                    </span>

                    <img src="/icons/Star.svg" alt="star" className="w-4 md:w-5" />
                </div>

                {/* Heading */}
                <h1 className="text-[28px] md:text-[50px] lg:text-[60px] font-bold text-center leading-[1.3] md:leading-[1.1] tracking-tight mb-4">
                    <span className="text-[#4E87FC]">Start Your Project</span>
                    <span className="ml-2 bg-gradient-to-r from-[#4E87FC] to-[#14B8A6] bg-clip-text text-transparent">
                        With Joystick
                    </span>
                </h1>

                {/* Subtitle */}

                <div className="max-w-3xl lg:max-w-[1100px] space-y-4 mb-4 md:mb-12">
                    <p className="text-[#585858] text-[16px] md:text-[20px] text-center leading-[24px] md:leading-[32px] font-[500]">
                        We work closely, deliberately, and selectively—partnering with businesses
                        that value precision, clarity, and long-term thinking.
                    </p>

                </div>

                {/* Button */}
                <button className=" px-5 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-[14px] md:text-[16px] 
        bg-gradient-to-r from-[#4E87FC] to-[#14B8A6] text-white shadow-lg 
        hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Schedule Consultation
                </button>
            </div>

        
        </div>
    );
}

export default Consultation;