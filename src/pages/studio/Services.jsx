import React from "react";
import data from "../json/studio.json";

const Services = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10 space-y-8">

      {data?.services?.map((item, index) => (
        <div
          key={index}
          className={`
            flex flex-col md:flex-row items-center gap-6 p-5 rounded-xl
          ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
          `}
        >
          
          {/* Image */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="bg-[#0B0B3B] rounded-xl p-6 w-[220px] h-[160px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[60%] text-center md:text-left">
            
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {item.description}
            </p>

            <ul className="text-sm text-gray-700 space-y-1">
              {item?.features?.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Services;