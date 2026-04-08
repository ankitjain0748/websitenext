import React from 'react';



const Hero = ({ title, content, subcontent, subtitle, subcontent2 }) => {

    return (
        <section className="relative w-full overflow-hidden font-outfit  items-center justify-center pt-4 xl:pt-20">

            {/* --- BACKGROUND BLOBS (Exact Coordinates) --- */}

            {/* Left Purple Blob */}
            <div className="absolute pointer-events-none transition-opacity opacity-30 bg-[#B668DC]  md:w-[677.97px] md:h-[750.46px] top-[54.31px] left-2 md:-left-[380.42px] blur-[40px] md:blur-[100px] rounded-full" />

            {/* Right Blue Blob */}
            <div className="absolute pointer-events-none transition-opacity opacity-25 bg-[#4E87FC] md:w-[512.61px] md:h-[750.46px]  top-[54.31px] right-2 md:-right-[200.94px] blur-[40px] md:blur-[100px] rounded-full" />


            {/* --- BACKGROUND WATERMARK --- */}
            {/* <div className=" hidden lg:flex absolute inset-0 bottom-[500px] xl:bottom-90 items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                <h2 className="text-[120px] lg:text-[180px] xl:text-[240px] font-[500] tracking-[-0.02em] leading-none uppercase 
    bg-gradient-to-r from-[#4E87FC]/10 via-transparent to-[#4E87FC]/10 bg-clip-text text-transparent">
                    Joynstack
                </h2>
            </div> */}

            {/* --- MAIN CONTENT CONTAINER (1440px) --- */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-2 md:px-4 flex flex-col items-center text-center">

                {/* Floating Badge */}
                <div className="flex items-center space-x-3 bg-white border border-[#E9E9E9] px-2 md:px-6 py-3 rounded-full shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] mb-4 md:mb-10 animate-fade-in">
                    <img src="/icons/Star.svg" className='w-4 md:w-6' />
                    <span className="text-[10px] md:text-[16px] font-[600] tracking-[20%] text-[#B668DC] uppercase ">
                        {subtitle || " Your One-Stop Technology Partner"}

                    </span>
                    <img src="/icons/Star.svg" className='w-4 md:w-6 ' />
                </div>

                {/* Main Heading with Gradient */}
                <h1 className="text-[28px] md:text-[50px] lg:text-[60px] font-[700] leading-[1.4] md:leading-[1.2] tracking-tight max-w-6xl mb-2 md:mb-8">
                    <p className="text-brand-gradient">
                        {title || " Engineering Digital Systems   That Scale Businesses"}
                    </p>

                </h1>

                {/* Paragraph Text */}
                <div className=" space-y-4 mb-4 md:mb-[120px]">
                    <p className="text-[#585858] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-[500]">

                        {content || " Joynstack Pvt. Ltd. is a digital engineering and creative technology company that builds scalable software platforms and advanced digital solutions for modern businesses."}                    </p>
                    <p className="hidden md:block text-[#585858] text-[14px] md:text-[20px] leading-[22px] md:leading-[32px] font-[400]">
                        {
                            subcontent || " We specialize in custom software development, enterprise applications, AI-powered systems, mobile apps, eCommerce infrastructures, and creative digital production including motion graphics and 3D visualization. "}     </p>

                     <p className="hidden md:block text-[#585858] text-[14px] md:text-[20px] leading-[22px] md:leading-[32px] font-[400]">
                        {
                            subcontent2 || " Our service areas include software engineering, mobile applications, artificial intelligence systems, commerce platforms, enterprise automation, and creative digital production. "}     </p>
                </div>

            </div>
        </section>
    );
};

export default Hero;