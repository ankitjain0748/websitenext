
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
    "https://via.placeholder.com/120x40?text=Logo1",
    "https://via.placeholder.com/120x40?text=Logo2",
    "https://via.placeholder.com/120x40?text=Logo3",
    "https://via.placeholder.com/120x40?text=Logo4",
    "https://via.placeholder.com/120x40?text=Logo5",
    "https://via.placeholder.com/120x40?text=Logo6",
];
function Trusted() {
    return (

        <div className="mt-6 md:mt-10 mb-6">
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
                        <div className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-8 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Trusted;