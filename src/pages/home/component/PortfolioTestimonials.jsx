import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa";

const PortfolioTestimonials = () => {
  
  const portfolioData = [
    {
      title: "Lorem ipsum dolor sit amet, elit consecte adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.",
      image: "https://framerusercontent.com/images/qK7Xn7D0XjXn8Z8Z8Z8Z8Z8Z8Z8.png", // Replace with your mockup image
    },
    {
        title: "Lorem ipsum dolor sit amet, elit consecte adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.",
        image: "https://framerusercontent.com/images/qK7Xn7D0XjXn8Z8Z8Z8Z8Z8Z8Z8.png",
    },
    {
        title: "Lorem ipsum dolor sit amet, elit consecte adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.",
        image: "https://framerusercontent.com/images/qK7Xn7D0XjXn8Z8Z8Z8Z8Z8Z8Z8.png",
    },
     {
        title: "Lorem ipsum dolor sit amet, elit consecte adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.",
        image: "https://framerusercontent.com/images/qK7Xn7D0XjXn8Z8Z8Z8Z8Z8Z8Z8.png",
    },
    {
        title: "Lorem ipsum dolor sit amet, elit consecte adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna.",
        image: "https://framerusercontent.com/images/qK7Xn7D0XjXn8Z8Z8Z8Z8Z8Z8Z8.png",
    }
  ];

  const testimonialData = [
    { name: "Alyxa White", role: "Founder", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." },
    { name: "Alyxa White", role: "Founder", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." },
    { name: "Alyxa White", role: "Founder", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." },
    { name: "Alyxa White", role: "Founder", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." },
  ];

  return (
    <div className="bg-[#4E87FC] relative font-outfit text-white py-[60px] lg:py-[120px] overflow-hidden">
      
      {/* --- PORTFOLIO SECTION --- */}
      <section className=" mx-auto  px-2 mb-10 xl:mb-32">
        <div className="text-center mb-4 lg:mb-12 ">
          <h2 className="text-[30px] md:text-[42px] font-bold mb-2 md:mb-4">Our Portfolio</h2>
          <p className="text-white text-[16px] md:text-[18px]  mx-auto ">
         Joynstack follows structured development practices designed to deliver reliable and maintainable systems.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            el: '.testimonialscustom-pagination',
          }}
          breakpoints={{
              320: { slidesPerView: 1 },
            1320: { slidesPerView: 1.5 }
          }}
          className="portfolio-swiper  "
        >
          {portfolioData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)]  border border-white/70 rounded-[20px] p-4 md:p-8 xl:p-12 flex flex-col lg:flex-row items-center xl:items-strech gap-4 md:gap-10 ">
                <div className="flex flex-col gap-[20px] md:gap-[40px]">
                  <h3 className="text-[18px] md:text-[30px] font-[500] md:leading-[44px] font-outfit">
                    {item?.title}
                  </h3>
                  <button className="bg-white w-fit px-8 py-3 rounded-[10px] shadow-[0px_8px_24px_0px_#0000001A] hover:bg-opacity-90 transition-all">
  <span className="text-brand-gradient text-[16px]">
    Know More
  </span>
</button>
                </div>
                <div className="flex">
                  <img 
                    src="/images/portfoliio.png" 
                    alt="Mockup" 
                    className="w-full rounded-[20px] shadow-2xl  transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="testimonialscustom-pagination flex justify-center gap-3 mt-10"></div>
      </section>

       <div className="absolute  w-full flex bottom-70 md:bottom-90 lg:bottom-100 xl:bottom-80 justify-center  pointer-events-none select-none">
   <h1 className="bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_85%)] font-black text-[50px] md:text-[100px] lg:text-[130px] xl:text-[200px] tracking-tighter uppercase">
  Testimonials
</h1>
        </div>


      {/* --- TESTIMONIALS SECTION --- */}
      <section className="relative pt-6 md:pt-22 lg:pt-20">
        {/* Background Large Text */}
       

        <div className="relative z-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={'auto'}
            loop={true}
            speed={8000} // Speed of the marquee movement
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="testimonial-marquee"
          >
            {[...testimonialData, ...testimonialData].map((item, index) => (
              <SwiperSlide key={index} style={{ width: '400px' }}>
                <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.4)_100%)]  border border-white/20 p-[20px] rounded-[20px] h-full flex flex-col justify-between">
                  <div>
                  
                    <p className="text-white text-[14px] md:text-[20px] md:leading-[34px] italic ">
                      {item?.text}
                    </p>
                  </div>

                    {/* Stars */}
                   <div className="flex gap-1 mb-4 text-white mt-[20px]">
  {[...Array(5)].map((_, i) => (
    <FaStar 
      key={i} 
      className={`${i === 4 ? "opacity-40" : ""}`} 
    />
  ))}
</div>
                  
               <div className="mt-8 flex items-center gap-4 font-outfit">
  <img 
    src="/images/user.png" 
    className="w-12 h-12 rounded-full border-2 border-white/30 object-cover flex-shrink-0" 
    alt="avatar"
  />
  <div className="h-12 flex flex-col gap-2 justify-center">
    <h4 className="font-semibold text-[22px] leading-none">
      {item?.name}
    </h4>
    <p className="text-[14px] leading-none">
      {item?.role}
    </p>
  </div>
</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom Styles for Swiper Pagination and Linear Motion */}

    </div>
  );
};

export default PortfolioTestimonials;