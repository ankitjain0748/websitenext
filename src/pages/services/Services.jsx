import React from "react";
import { ArrowUpRight } from "lucide-react";
import services from "../json/services.json";

const Services = () => {


  return (
    <section className="font-outfit">
      <div className="w-full bg-gradient-to-r from-[#4E87FC] to-[#0FBAA7] text-white py-16 px-4 md:px-10 rounded-[30px]">
        <div className="max-w-[1400px] mx-auto container  space-y-6">
          {services && services.map((service, index) => (
            <div
              key={index}
              className="group relative flex gap-6 md:gap-10 items-start 
    border-b border-white/10 pb-6 md:pb-8 mb-6 md:mb-8
    last:border-none last:mb-0 
    backdrop-blur-md transition-all duration-500"
            >

              {/* LEFT NUMBER */}
              <div className="flex-shrink-0">
                <span className="text-[50px] md:text-[90px] font-bold text-white/10 leading-none">
                  {String(index + 1).padStart(2, "0")}.
                </span>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service?.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm px-3 py-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ARROW */}
                <div className="flex items-center justify-end">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;