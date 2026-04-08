import React from "react";
import { ArrowUpRight } from "lucide-react";
import services from "../json/services.json";

const Services = () => {
  return (
    <section className="font-outfit overflow-hidden">
      <div className="w-full bg-gradient-to-r from-[#4E87FC] to-[#0FBAA7] text-white py-3 px-4 md:px-10 rounded-t-[30px]">
        
        <div className="max-w-[1400px] mx-auto">

          {services?.map((service, index) => (
            
            <div key={index} className="group relative">

              {/* 🔥 FULL WIDTH HOVER */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full
                bg-white/10 backdrop-blur-md
                opacity-0 group-hover:opacity-100
                transition-all duration-500 z-0"
              ></div>

              {/* CONTENT */}
              <div className="relative z-10 flex gap-6 md:gap-[70px] items-start py-6 md:py-8 transition-all duration-300 group-hover:scale-[1.01]">
                
                {/* LEFT NUMBER */}
                <div className="flex-shrink-0">
                  <span className="text-[50px] md:text-[90px] font-black bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_85%)] leading-none">
                    {String(index + 1).padStart(2, "")}.
                  </span>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-6">

                  <div>
                    <h3 className="text-xl md:text-[42px] font-semibold mb-2">
                      {service?.title}
                    </h3>

                    <p className="text-white/80 text-sm md:text-[18px] leading-[24px] mb-4">
                      {service?.desc}
                    </p>

                    <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                      {service?.subdesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service?.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs md:text-sm px-3 py-1 rounded-[10px] bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ARROW */}
                  <div className="flex items-center justify-end">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/30 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </div>

              {/* 🔥 BORDER */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] 
bg-white/10 group-hover:bg-transparent transition-all duration-300">
</div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;