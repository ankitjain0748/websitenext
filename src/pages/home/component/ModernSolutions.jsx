import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ModernSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);



  const tabs = [
    {
      id: "saas",
      label: "SaaS Platforms",
      title: "Scalable SaaS Platforms",
      desc: "We build scalable SaaS platforms that empower businesses to deliver services digitally while generating consistent, recurring revenue. From MVP to full-scale systems, our solutions are designed for performance, security, and long-term growth.",
      benefits: [
        "Subscription-based models with flexible pricing",
        "Scalable cloud infrastructure",
        "Secure, high-performance systems"
      ],
      footer: "Perfect for startups and businesses looking to build long-term, scalable digital product",
      image: "/images/saas.jpg"
    },
    {
        id: "market",
        label: "Marketplace Platforms",
        title: "Multi-Vendor Marketplaces",
        desc: "Connect buyers and sellers with a robust marketplace engine. Our platforms handle complex transactions and vendor management with ease.",
        benefits: ["Advanced vendor dashboard", "Secure payment splitting", "Seamless user experience"],
        footer: "Ideal for niche marketplaces.",
        image: "https://via.placeholder.com/600x400/E9ECF9/4E87FC?text=Marketplace"
    },
    { id: "data", label: "Data & Analytics Platforms", title: "Data Insights", desc: "Turn data into action.", benefits: ["Real-time visuals", "Predictive tools"], footer: "Data-driven growth.", image: "https://via.placeholder.com/600x400/E9ECF9/4E87FC?text=Analytics" },
    { id: "lead", label: "Lead Generation", title: "Smart Lead Gen", desc: "Automate funnels.", benefits: ["CRM sync", "Auto follow-ups"], footer: "Sales at scale.", image: "https://via.placeholder.com/600x400/E9ECF9/4E87FC?text=Leads" },
    { id: "auto", label: "Business Automation", title: "Workflows", desc: "Reduce manual work.", benefits: ["API Customization", "Task mapping"], footer: "Save time.", image: "https://via.placeholder.com/600x400/E9ECF9/4E87FC?text=Auto" },
    { id: "affiliate", label: "Affiliate & Partner Systems", title: "Partner Networks", desc: "Manage partners.", benefits: ["Deep tracking", "Payout automation"], footer: "Network scaling.", image: "https://via.placeholder.com/600x400/E9ECF9/4E87FC?text=Affiliate" },
  ];

  const techLogs = [
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Node.Js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker-3.svg" },
    { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "React Native", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker-3.svg" },
    { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "React Native", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  ];

  return (
   <section className="font-outfit py-[60px] lg:py-28 px-2 md:px-4 relative overflow-hidden bg-[#FBFBFB] "
     style={{ backgroundImage: "url('/images/gridbg.png')" }}>



      {/* 3. ABSOLUTE CIRCLES (GLOW EFFECTS) */}
      {/* Magenta Circle */}
      <div 
        className="absolute pointer-events-none"
        style={{
            background: '#C760E3',
            width: '911px', height: '745px',
            top: '10%', right: '-20%',
            filter: 'blur(400px)', opacity: 0.15, zIndex: 0
        }}
      />
      {/* Blue Circle */}
      <div 
        className="absolute pointer-events-none"
        style={{
            background: '#4E87FC',
            width: '1440px', height: '851px',
            bottom: '-10%', left: '-10%',
            filter: 'blur(400px)', opacity: 0.2, zIndex: 0
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10  md:px-4">
        
        {/* HEADER */}
        <div className="text-center mb-4 md:mb-16">
          <h2  className="text-[30px] md:text-[42px] font-bold mb-2 md:mb-6 leading-tight text-[#4E87FC]">
            Solutions For Modern Businesses
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-[16px] md:text-[18px]">
            We solve real business problems with smart, scalable technology solutions.
          </p>
        </div>

        {/* TAB CARD */}
        <div className="bg-white/80 backdrop-blur-md rounded-[20px] shadow-[0_20px_100px_rgba(0,0,0,0.05)] border border-white/50 p-2 py-[20px] md:p-[24px] mb-12 lg:mb-32">
          
<div className="flex md:justify-center overflow-x-auto lg:overflow-visible gap-3 md:gap-4 px-2 md:px-0 scrollbar-hide">
  {tabs?.map((tab, index) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(index)}
      className={`whitespace-nowrap lg:whitespace-normal px-3 py-2 md:px-8 md:py-4 rounded-2xl font-semibold text-[14px] md:text-[17px] transition-all duration-300
        ${activeTab === index 
          ? 'bg-gradient-to-r from-[#4E87FC] to-[#14B8A6] text-white shadow-lg scale-105' 
          : 'bg-[#F3F4F6] text-[#333333] hover:bg-gray-200'
        }`}
    >
      {tab?.label}
    </button>
  ))}
</div>

          <div key={activeTab} className="md:flex gap-16 modernanimate-fadeIn">
          <div className='py-6 md:py-20 max-w-[570px]'>
            <div className="space-y-8 ">
              <p className="text-[#585858] text-[16px] md:text-[18px] leading-[1.6]">{tabs[activeTab].desc}</p>
              
              <div className=''>
                <h4 className="text-[#C760E3] font-bold text-[18px] md:text-[20px] tracking-[2px] mb-2 uppercase">Key Benefits:</h4>
              <ul className="list-disc marker:text-[#4A4A4A] list-inside">
  {tabs[activeTab].benefits?.map((benefit, i) => (
    <li key={i} className="text-[#4A4A4A] font-semibold text-[17px] mb-2">
      {benefit}
    </li>
  ))}
</ul>
              </div>
              <p className="text-[#585858] italic text-[16px] md:text-[18px] border-t border-gray-100 pt-2">{tabs[activeTab].footer}</p>
            </div>
            </div>

            <div className=" rounded-[40px]  flex justify-center items-center">
               <img src={tabs[activeTab].image} className="w-full h-auto object-contain transform  transition-all duration-1000" />
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES SECTION */}
      

        {/* DOUBLE ROW SWIPER (Left & Right) */}
     
      </div>
        <div className="text-center mb-[40px]">
          <h2  className="text-[30px] md:text-[42px]  text-[#4E87FC] font-bold mb-[10px] md:mb-[30px]">Technologies</h2>
          <p className="text-gray-500 text-[16px] md:text-[18px]">Joynstack follows structured development practices designed to deliver reliable and maintainable systems.</p>
        </div>

         <div className="flex flex-col gap-6 ">
          {/* Row 1: Left to Right */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={'auto'}
            loop={true}
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="modernlogo-swiper pointer-events-none "
          >
            {techLogs?.map((tech, i) => (
              <SwiperSlide key={i} style={{ width: 'auto' }}>
                <div className="bg-white border border-gray-100 px-8 py-4 rounded-[20px] flex items-center gap-4 shadow-sm">
                  <img src={tech?.icon} alt={tech?.name} className="w-8 h-8 object-contain" />
                  <span className="font-bold text-[#222] text-[18px]">{tech?.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Row 2: Right to Left */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={'auto'}
            loop={true}
            speed={6000}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            className="modernlogo-swiper pointer-events-none"
          >
            {techLogs?.map((tech, i) => (
              <SwiperSlide key={i} style={{ width: 'auto' }}>
                <div className="bg-white border border-gray-100 px-8 py-4 rounded-[20px] flex items-center gap-4 shadow-sm">
                  <img src={tech?.icon} alt={tech?.name} className="w-8 h-8 object-contain" />
                  <span className="font-bold text-[#222] text-[18px]">{tech?.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

   
    </section>
  );
};

export default ModernSolutions;