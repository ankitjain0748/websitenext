import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
    <div className="bg-[#5c8fff] relative font-sans text-white py-20 overflow-hidden">
      
      {/* --- PORTFOLIO SECTION --- */}
      <section className=" mx-auto  mb-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto opacity-80">
            Joystack follows structured development practices designed to deliver reliable and maintainable systems.
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
            1024: { slidesPerView: 1.5 }
          }}
          className="portfolio-swiper"
        >
          {portfolioData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 min-h-[450px]">
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                    {item?.title}
                  </h3>
                  <button className="bg-white text-[#4E87FC] px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                    Know More
                  </button>
                </div>
                <div className="flex-1">
                  <img 
                    src="/images/portfoliio.png" 
                    alt="Mockup" 
                    className="w-full rounded-3xl shadow-2xl  transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="testimonialscustom-pagination flex justify-center gap-3 mt-10"></div>
      </section>

       <div className="absolute  w-full flex bottom-70 justify-center  pointer-events-none select-none">
   <h1 className="bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_85%)] font-black xl:text-[200px] tracking-tighter uppercase">
  Testimonials
</h1>
        </div>


      {/* --- TESTIMONIALS SECTION --- */}
      <section className="relative pt-20">
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
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-[30px] h-full flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 text-yellow-300">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i === 4 ? "opacity-40" : ""}>★</span>
                      ))}
                    </div>
                    <p className="text-blue-50 text-base leading-relaxed italic opacity-90">
                      "{item?.text}"
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${item.name}&background=random`} 
                      className="w-12 h-12 rounded-full border-2 border-white/30" 
                      alt="avatar"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{item?.name}</h4>
                      <p className="text-sm opacity-70">{item?.role}</p>
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