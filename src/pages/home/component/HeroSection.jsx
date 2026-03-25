import React from 'react';
import { HiSparkles } from "react-icons/hi"; // Using sparkles for the badge icons




 const stats = [
    { title: "50+", sub: "Projects Delivered" },
    { title: "30+", sub: "Clients Served" },
    { title: "2–6 Weeks", sub: "Avg. Project Delivery Time" },
    { title: "100%", sub: "Performance Optimized" },
    { title: "Secure", sub: "Secure & Scalable Systems" },
  ];

const HeroSection = () => {

  return (
    <section className="relative w-full overflow-hidden font-outfit  items-center justify-center pt-20">
      
      {/* --- BACKGROUND BLOBS (Exact Coordinates) --- */}
      
      {/* Left Purple Blob */}
 <div className="absolute pointer-events-none transition-opacity opacity-20 bg-[#B668DC] w-[677.97px] h-[582.46px] bottom-[24.31px] -left-[159.42px] blur-[100px] rounded-full" />

{/* Right Blue Blob */}
<div className="absolute pointer-events-none transition-opacity opacity-20 bg-[#4E87FC] w-[512.61px] h-[582.54px] bottom-[24.31px] -right-[175.94px] blur-[100px] rounded-full" />


      {/* --- BACKGROUND WATERMARK --- */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
  <h2 className="text-[120px] md:text-[240px] lg:text-[220px] font-semibold tracking-[-0.02em] leading-none uppercase 
    bg-gradient-to-r from-[#4E87FC]/10 via-transparent to-[#4E87FC]/10 bg-clip-text text-transparent">
    Joynstack
  </h2>
</div>

      {/* --- MAIN CONTENT CONTAINER (1440px) --- */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Floating Badge */}
        <div className="flex items-center space-x-3 bg-white border border-[#E9E9E9] px-6 py-3 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] mb-10 animate-fade-in">
      <img src="/icons/Star.svg" />
          <span className="text-[12px] md:text-[16px] font-[600] tracking-[20%] text-[#B668DC] uppercase">
            Your One-Stop Technology Partner
          </span>
        <img src="/icons/Star.svg" />
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-4xl md:text-[60px] font-[700] leading-[1.1] tracking-tight max-w-5xl mb-8">
          <p className="text-brand-gradient">
            Engineering Digital Systems <br className="hidden md:block" />
            That Scale Businesses
          </p>
          
        </h1>

        {/* Paragraph Text */}
        <div className="max-w-3xl lg:max-w-[1100px] space-y-4 mb-12">
          <p className="text-[#585858]  md:text-[20px] leading-[32px] font-[500]">
            Joynstack Pvt. Ltd. is a digital engineering and creative technology company that builds scalable software platforms and advanced digital solutions for modern businesses.
          </p>
          <p className="text-[#64748B] text-[20px] leading-[32px] font-[400]">
            We specialize in custom software development, enterprise applications, AI-powered systems, mobile apps, eCommerce infrastructures, and creative digital production including motion graphics and 3D visualization.
          </p>
        </div>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-[60px]">
          {/* Primary Gradient Button */}
          <button className="btn-brand-primary py-[20px] px-[30px]">
            Schedule Consultation
          </button>
          
          {/* Secondary White Button */}
          <button className="bg-white text-brand-gradient border border-[#E9E9E9] px-10 py-4 rounded-xl font-bold text-base shadow-[0px_8px_24px_0px_#0000001A] hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            Explore Portfolio
          </button>
        </div>



        

      </div>
       <div className="relative z-20 w-full bg-gradient-to-r from-[#C760E3] to-[#0FBAA7] py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center text-white">
            {stats?.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="text-2xl md:text-[42px] font-[700] leading-tight mb-1">
                  {item?.title}
                </h3>
                <p className="text-[12px] md:text-[16px] font-[600]  tracking-wide ">
                  {item?.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;