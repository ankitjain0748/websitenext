import React from 'react';
import { HiSparkles } from "react-icons/hi"; // Using sparkles for the badge icons


const ScheduleSection = () => {

  return (
  <section 
  className="relative w-full overflow-hidden font-outfit flex flex-col items-center justify-center pt-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/schedulebg.png')" }}
>
      
  
      
      {/* Left Purple Blob */}
 <div className="absolute pointer-events-none transition-opacity opacity-20 bg-[#B668DC] w-[677.97px] h-[582.46px] bottom-[24.31px] -left-[159.42px] blur-[100px] rounded-full" />

{/* Right Blue Blob */}
<div className="absolute pointer-events-none transition-opacity opacity-20 bg-[#4E87FC] w-[512.61px] h-[582.54px] bottom-[24.31px] -right-[175.94px] blur-[100px] rounded-full" />




      {/* --- MAIN CONTENT CONTAINER (1440px) --- */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Floating Badge */}
        <div className="flex items-center space-x-3 bg-white border border-[#E9E9E9] px-6 py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] mb-10 animate-fade-in">
      <img src="/icons/Star.svg" />
          <span className="text-[12px] md:text-[16px] font-[600] tracking-[20%] text-[#B668DC] uppercase">
Lets Start with us          </span>
        <img src="/icons/Star.svg" />
        </div>

        {/* Main Heading with Gradient */}
      <h1 className="text-4xl md:text-[60px] font-[700] leading-[1.1] tracking-tight max-w-5xl mb-8">
  {/* Gradient Text Part */}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4E87FC] to-[#22D3EE]">
    Start Your Project With{" "}
  </span>

  {/* Joynstack Part with Underline */}
  <span className="relative inline-block text-[#14B8A6]">
    Joynstack
  <img src="/images/underline.svg" />
  </span>
</h1>

        {/* Paragraph Text */}
        <div className="max-w-3xl lg:max-w-[1100px] space-y-4 mb-12">
          <p className="text-[#585858]  md:text-[20px] leading-[32px] font-[500]">
            Joynstack Pvt. Ltd. is a digital engineering and creative technology company that builds scalable software platforms and advanced digital solutions for modern businesses.
          </p>
       
        </div>

        {/* Button Group */}
        <div className="flex  items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-[60px]">
          {/* Primary Gradient Button */}
          <button className="btn-brand-primary py-[20px] px-[30px]">
            Schedule Consultation
          </button>
          
       
        </div>



        

      </div>
   
    </section>
  );
};

export default ScheduleSection;