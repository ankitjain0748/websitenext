import React from 'react';

const HelpBusiness = () => {
  const steps = [
    {
      title: "Launch Your Idea Faster",
      icon: "/icons/rocket.png", // Replace with your image paths
    },
    {
      title: "Increase Leads & Revenue",
      icon: "/icons/graph.png",
    },
    {
      title: "Automate Operations",
      icon: "/icons/setting.png",
    },
    {
      title: "Scale Without Tech Limitations",
      icon: "/icons/bar.png",
    },
  ];

  // The specific gradient provided by you
  const titleGradient = {
    background: "linear-gradient(180deg, #4E87FC 0%, rgba(78, 135, 252, 0.5) 77.7%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className=" relative w-full font-outfit bg-[#FBFBFB]  rounded-b-[40px]   flex items-center justify-center">
      <div 
    className="absolute inset-0 pointer-events-none opacity-[0.15] z-0   rounded-b-[40px]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  ></div>
      {/* Main Container with rounded corners and subtle grain effect styling */}
      <div className="max-w-[1440px] w-full rounded-[60px] py-[120px] px-6 ">
        
        {/* Title Section */}
        <div className="text-center mb-[50px]">
          <h2 
            style={titleGradient}
            className="text-[52px] md:text-[100px] font-bold tracking-tight"
          >
            How We Help Businesses
          </h2>
        </div>

        {/* 4-Column Row Section */}
        <div className="flex flex-col md:flex-row items-stretch justify-between max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative px-4 mb-12 md:mb-0">
              
              {/* Vertical Divider (Visible only on desktop, not after the last item) */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[210px] w-[3px] bg-[linear-gradient(180deg,_rgba(180,180,180,0.5)_0%,_rgba(221,221,221,0.2)_100%)]" />
              )}

              {/* Icon Container with the soft purple glow shadow */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.25)] border border-[#F2D5F9]">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/1043/1043444.png"; }}
                  />
                </div>
              </div>

              {/* Step Text */}
              <div className="text-center max-w-[260px]">
                <h3 className="text-[26px] font-[600] text-[#333333]  font-outfit">
                  {item.title}
                </h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpBusiness;