import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { 
  Ruler, 
  ShieldCheck, 
  Eye, 
  Handshake, 
  Wrench, 
  TrendingUp 
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';

const partnersData = [
  { id: 1, img: "/icons/logo.png", alt: "SunStream" },
  { id: 2, img: "/icons/logo.png", alt: "KSwift" },
  { id: 3, img: "/icons/logo.png", alt: "CT" },
  { id: 4, img: "/icons/logo.png", alt: "Politis Roofing" },
  { id: 5, img: "/icons/logo.png", alt: "V Unite" },
  { id: 6, img: "/icons/logo.png", alt: "CertifyCars" },
  { id: 7, img: "/icons/logo.png", alt: "MakaMobile" },
    { id: 8, img: "/icons/logo.png", alt: "CT" },
  { id: 9, img: "/icons/logo.png", alt: "Politis Roofing" },
  { id: 10, img: "/icons/logo.png", alt: "V Unite" },
  { id: 11, img: "/icons/logo.png", alt: "CertifyCars" },
  { id: 12, img: "/icons/logo.png", alt: "MakaMobile" },
];

const featuresData = [
  {
    title: "Architecture-First Development",
    desc: "We design every solution with a strong foundation, ensuring performance, flexibility, and long-term scalability from day one.",
  img : "/icons/architechutr.svg",
  },
  {
    title: "Security-Driven Approach",
    desc: "From secure coding practices to data protection, we build systems that safeguard your business and user trust at every level.",
    img : "/icons/architechutr.svg",
    highlight: true, // Special styling for this card
  },
  {
    title: "Transparent Workflows",
    desc: "Stay in control with clear communication, regular updates, and complete visibility into every stage of your project.",
   img : "/icons/architechutr.svg",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't just deliver projects — we stay with you for updates, improvements, and continuous growth support.",
    img : "/icons/architechutr.svg",
  },
  {
    title: "End-To-End Solutions",
    desc: "From UI/UX design to development, deployment, and optimization — we handle everything under one roof.",
    img : "/icons/architechutr.svg",
  },
  {
    title: "Built To Scale",
    desc: "Our solutions are engineered to grow with your business, handling increasing users, data, and complexity effortlessly.",
    img : "/icons/architechutr.svg",
  },
];

const TechnologyPartner = () => {
  return (
    // Path to your grid background image goes here
    <section className="relative w-full pt-[60px] md:pt-[80px] xl:pt-[120px] bg-[url('/images/gridbg.png')] bg-center bg-cover font-outfit">
      
      {/* --- TRUSTED BY SECTION (LOGO SLIDER) --- */}
      <div className=" mx-auto px-2 lg:px-6 ">
        <p className="text-center text-[#585858] font-[400] text-[20px] uppercase tracking-[0.2em] mb-4 md:mb-10">
          Trusted By
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
             1440: { slidesPerView: 7 },
          }}
          className="logo-swiper"
        >
          {partnersData.map((logo) => (
            <SwiperSlide key={logo?.id}>
              <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E9E9E9] rounded-xl px-[20px] md:px-[30px] py-[10px] md:py-[20px]  shadow-sm">
              
                <img src={logo?.img} className='h-[36px]' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[1440px] mx-auto px-2 lg:px-4 pt-[60px] md:pt-[80px] xl:pt-[120px] mb-[60px] lg:mb-[116px]">
        
        {/* Header Section */}
        <div className="text-center mb-[20px] md:mb-[40px]">
          <h2 className="text-3xl md:text-[42px] font-[700] text-[#4E87FC] mb-4 leading-[100%] font-outfit">
            Your Complete Technology Partner
          </h2>
          <p className="text-[#585858] md:text-[18px] max-w-3xl mx-auto font-[400]">
            From idea to execution to scale — we build everything your business needs to succeed online.
          </p>
        </div>

        {/* --- GRID OF CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
          {featuresData?.map((item, index) => (
            <div
              key={index}
              className={`relative p-[20px] lg:p-[40px] rounded-[20px] transition-all duration-300 flex flex-col items-start space-y-[10px] md:space-y-[30px]
                ${item.highlight 
                  ? 'bg-white border-2 border-[#F2D5F9] shadow-[0_20px_50px_rgba(182,104,220,0.15)] ring-4 ring-[#B668DC]/5' 
                  : 'bg-[#F4F4F4] border border-transparent hover:border-[#E9E9E9] hover:bg-white hover:shadow-xl'
                }`}
            >
              {/* Icon Container */}
              <div>
              <img src={item?.img} />
              </div>

              {/* Text Content */}
              <h3 className={`text-[26px] font-[600] tracking-[-1px] ${item?.highlight ? 'text-brand-gradient' : 'text-[#333333]'}`}>
                {item?.title}
              </h3>
              <p className="text-[#585858] leading-[28px] font-[400] font-outfit ">
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartner;