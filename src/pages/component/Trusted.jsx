
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/images/services/trustedlogo/logo.png",
  "/images/services/trustedlogo/ct.png",
  "/images/services/trustedlogo/kswift.png",
  "/images/services/trustedlogo/makamobile.png",
  "/images/services/trustedlogo/roofing.png",
  "/images/services/trustedlogo/runstream.png",
  "/images/services/trustedlogo/vunite.png",
   "/images/services/trustedlogo/logo.png",
  "/images/services/trustedlogo/ct.png",
  "/images/services/trustedlogo/kswift.png",
  "/images/services/trustedlogo/makamobile.png",
  "/images/services/trustedlogo/roofing.png",
  "/images/services/trustedlogo/runstream.png",
  "/images/services/trustedlogo/vunite.png",
];
function Trusted() {
    return (

        <div className=" pb-[60px] pt-[30px] md:pb-[120px] md:pt-[60px] ">
            <p className="text-[#585858] text-center mb-5 text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-[500]">
                TRUSTED BY
            </p>

            {/* SWIPER */}
            <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                speed={4000} // smooth continuous scroll
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false} // makes it feel like marquee
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {[...logos, ...logos].map((logo, index) => ( // duplicate for seamless loop
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E9E9E9] rounded-xl px-[10px] md:px-[10px] py-[10px] md:py-[20px]  shadow-sm">
              
                <img src={logo} className='h-[36px]' />
              </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Trusted;