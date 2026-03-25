import React, { useState } from 'react';

const WhatWeBuild = () => {
  // Tabs Data
  const categories = [
    "Product & Software Development",
    "E-Commerce & Conversion Systems",
    "Design, Branding & Visual Experience",
    "3D, Visualization & Interactive",
    "Growth, SEO & Content Strategy",
    "AI & Emerging Technologies",
    "DevOps, Cloud & Infrastructure",
    "Strategy, Consulting & Scaling",
    "AI & Emerging Technologies",
  ];

  // Content Data (Normally you'd have different content for each tab)
  const services = [
    {
      title: "Web Design & Development",
      desc: "High-performance, responsive websites built with a focus on user experience, speed, and conversion — ensuring your digital presence delivers real business results.",
      icon: "/icons/web.svg", // Replace with your image path
    },
    {
      title: "Custom Web Platforms",
      desc: "Tailor-made systems built around your business workflows — whether it's dashboards, portals, or complex internal tools.",
      icon: "/icons/custom.svg",
    },
    {
      title: "App Development",
      desc: "Custom applications designed for performance, scalability, and seamless usability — from MVPs to full-scale platforms.",
      icon: "/icons/app.svg",
    },
    {
      title: "CRM Systems & Automation",
      desc: "Custom CRM platforms and workflow automation to streamline operations, manage leads, and improve customer engagement.",
      icon: "/icons/crm.svg",
    },
    {
      title: "SaaS Product Development",
      desc: "End-to-end SaaS solutions with scalable architecture, secure infrastructure, and intuitive user experiences built for long-term growth.",
      icon: "/icons/saas.svg",
    },
    {
      title: "SaaS Product Development",
      desc: "End-to-end SaaS solutions with scalable architecture, secure infrastructure, and intuitive user experiences built for long-term growth.",
      icon: "/icons/saas.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="  font-outfit">
      {/* Main Gradient Container */}
      <div className="w-full  rounded-[40px] pt-[100px] pb-[80px] bg-[linear-gradient(104.28deg,#4E87FC_0.01%,#0FBAA7_100.01%)] text-white">
        
        {/* Header Section */}

        <div className='max-w-[1440px] mx-auto px-6'>
        <div className="mb-14">
          <h2 className=" md:text-[42px] font-bold mb-4 ">
            What We Build
          </h2>
          <p className="text-white text-[18px]  font-[400] leading-[28px]">
            Comprehensive digital solutions designed to help you build, launch, and scale — all under one roof.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SIDE: Tabs/Categories */}
          <div className="lg:w-1/3 flex flex-col space-y-2">
            {categories?.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(cat)}
                className={`text-left px-6 py-4 rounded-[12px] text-[22px] font-[600] leading-[28px] transition-all duration-300 border-b border-white/10 last:border-0
                  ${activeTab === cat 
                    ? 'bg-white text-black shadow-xl  z-10' 
                    : 'text-white hover:text-white hover:bg-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE: Services Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services?.map((service, index) => (
              <div 
                key={index} 
                className="group flex flex-col py-[30px] px-[20px] rounded-[20px] bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  {/* Icon Image */}
                  <div className="w-14 h-14 flex-shrink-0">
                    <img 
                      src={service?.icon} 
                      alt={service?.title} 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }} // Fallback
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-[24px] font-[600] mb-3 tracking-tight">
                      {service?.title}
                    </h3>
                    <p className="text-white text-[16px] leading-relaxed font-[400] ">
                      {service?.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;