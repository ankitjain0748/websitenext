import React from 'react'

export default function TechHero() {



 const featuresData = [
        {
            title: "SaaS Platforms",
            desc: "Joynstack develops subscription-based software platforms designed for scalability and reliability.",
            img: "/icons/saas.svg", // Replace with your icon path
            tags: ["User management", "Subscription billing", "Dashboards", "Reporting systems", "API integrations"]
        },
        {
            title: "Enterprise Systems",
            desc: "Enterprise systems centralize business operations and improve efficiency.",
            img: "/icons/saas.svg", // Replace with your icon path
            highlight: true,
            titleColor: "text-[#00B4D8]", // Cyan color from image
            tags: ["Warehouse management", "HR management", "Accounting dashboards", "Operations portals"]
        },
        {
            title: "Marketplace Platforms",
            desc: "Joynstack develops multi-vendor marketplace platforms.",
            img: "/icons/saas.svg", // Replace with your icon path
            tags: ["Warehouse management", "HR management systems", "Accounting dashboards", "Operations portals"]
        },
        {
            title: "Affiliate Platforms",
            desc: "Joynstack develops affiliate tracking and reward systems.",
            img: "/icons/saas.svg", // Replace with your icon path
            tags: ["Vendor management", "Product catalogs", "Order tracking", "Commission systems"]
        },
        {
            title: "Logistics Platforms",
            desc: "Joynstack develops logistics management systems.",
            img: "/icons/saas.svg", // Replace with your icon path
            tags: ["Inventory management", "Shipment tracking", "Delivery management", "Reporting dashboards"]
        },
        {
            title: "AI Solutions",
            desc: "Joynstack develops AI-powered solutions designed to automate processes and analyze data.",
            img: "/icons/saas.svg", // Replace with your icon path
            tags: ["Forecasting dashboards", "Recommendation engines", "Automation tools", "Data analysis platforms"]
        },
    ];


  return (
   <section className="relative w-full overflow-hidden font-outfit  items-center justify-center pt-4 xl:pt-20">

            {/* --- BACKGROUND BLOBS (Exact Coordinates) --- */}

            {/* Left Purple Blob */}
            <div className="absolute pointer-events-none transition-opacity opacity-30 bg-[#B668DC]  md:w-[677.97px] md:h-[750.46px] top-[54.31px] left-2 md:-left-[380.42px] blur-[40px] md:blur-[100px] rounded-full" />

            {/* Right Blue Blob */}
            <div className="absolute pointer-events-none transition-opacity opacity-25 bg-[#4E87FC] md:w-[512.61px] md:h-[750.46px]  top-[54.31px] right-2 md:-right-[200.94px] blur-[40px] md:blur-[100px] rounded-full" />



            {/* --- MAIN CONTENT CONTAINER (1440px) --- */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-2 md:px-4 flex flex-col items-center text-center">

                {/* Floating Badge */}
                <div className="flex items-center space-x-3 bg-white border border-[#E9E9E9] px-2 md:px-6 py-3 rounded-full shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] mb-4 md:mb-10 animate-fade-in">
                    <img src="/icons/Star.svg" className='w-4 md:w-6' />
                    <span className="text-[10px] md:text-[16px] font-[600] tracking-[20%] text-[#B668DC] uppercase ">
                       Reliable systems for modern businesses

                    </span>
                    <img src="/icons/Star.svg" className='w-4 md:w-6 ' />
                </div>

                {/* Main Heading with Gradient */}
                <h1 className="text-[28px] md:text-[50px] lg:text-[60px] font-[700] leading-[1.4] md:leading-[1.2] tracking-tight max-w-6xl mb-2 md:mb-8">
                    <p className="text-brand-gradient">
                       Business Solutions Designed for Growth
                    </p>

                </h1>

                {/* Paragraph Text */}
                <div className=" space-y-4 mb-4 md:mb-[120px]">
                    <p className="text-[#585858] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-[500]">

                    Joynstack develops complete business solutions designed to solve operational challenges and improve efficiency.                </p>
                    <p className="hidden md:block text-[#585858] text-[14px] md:text-[20px] leading-[22px] md:leading-[32px] font-[400]">
                       Our solutions combine software engineering, automation, and data analysis to support modern business operations.   </p>

                </div>

            </div>


            <div className="max-w-[1440px] mx-auto px-2 lg:px-4 md:pb-[40px] ">
        
        {/* Header Section */}


        {/* --- GRID OF CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
          {featuresData?.map((item, index) => (
            <div
              key={index}
              className={`relative p-[20px] lg:p-[30px] rounded-[20px] transition-all duration-300 flex flex-col items-start space-y-[10px] md:space-y-[30px]
                ${item.highlight 
                  ? 'bg-white border-2 border-[#B55BCB] shadow-[0px_20px_80px_0px_#C760E34D] ring-4 ring-[#B668DC]/5' 
                  : 'bg-white border border-[#F2D5F9] hover:border-[#E9E9E9] hover:bg-white hover:shadow-xl'
                }`}
            >
              {/* Icon Container */}
              <div>
              <img src={item?.img} />
              </div>

              {/* Text Content */}
              <h3 className={`text-[22px] md:text-[26px] font-[600] tracking-[-1px] ${item?.highlight ? 'text-brand-gradient' : 'text-[#333333]'}`}>
                {item?.title}
              </h3>
              <p className="text-[#585858] leading-[28px] font-[400] text-[16px] md:text-[18px] font-outfit ">
                {item?.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-[#000000] px-3 py-1.5 rounded-md text-[14px] md:text-[16px] font-[500] tracking-tighter"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
            </div>
          ))}
        </div>
      </div>

        </section>
  )
}
