import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaBehance, FaInstagram, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    "About", "Solutions", "Creative Studio", "Technologies", "Portfolio",
    "Case Studies", "Hire Developers", "Industries", "Founder", "Resources", "Contact"
  ];

  const services = [
    "Custom Software Development", "Web Development", "Mobile Development",
    "AI Development", "eCommerce Development", "UI/UX Design", "API Development",
    "Cloud Deployment", "Motion Graphics", "After Effects Animation",
    "3D Modeling", "3D Animation"
  ];

  const socialIcons = [
  { icon: <FaBehance size={24} />, link: "#" },
  { icon: <FaInstagram size={24} />, link: "#" },
  { icon: <FaXTwitter size={24} />, link: "#" },
  { icon: <FaTelegramPlane size={24} />, link: "#" },
  { icon: <FaLinkedinIn size={24} />, link: "#" },
];

  return (
    <footer className="bg-[linear-gradient(93.13deg,#141820_48.59%,#0A2C28_100%)] text-white font-outfit relative overflow-hidden">
      
      {/* Subtle background glow on the right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14B8A6] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 2xl:px-0 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src="/images/footerlogo.png" alt="JoynStack" className="h-10 w-auto" /> 
              {/* Replace with your actual logo image */}
            </div>
            
            <p className="text-white text-[16px] leading-relaxed max-w-[300px]">
             Your one-stop technology partner for building, launching, and scaling digital products.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-to-br from-white/10 to-white/40  rounded-[10px] p-2 flex">
                  <MapPin size={18} className="text-gray-300" />
                </div>
                <p className="text-white text-[16px] md:text-[18px] leading-relaxed">
                  16 MIIC, Jawahar Lal Nehru Marg, near MNIT Campus, Jaipur, Rajasthan 302017
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-gradient-to-br from-white/10 to-white/40  rounded-[10px] p-2 flex">
                  <Mail size={18} className="text-gray-300" />
                </div>
                <a href="mailto:info@joynstack.com" className="text-white text-[16px] md:text-[18px] hover:text-white transition-colors">
                  info@joynstack.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-gradient-to-br from-white/10 to-white/40  rounded-[10px] p-2 flex">
                  <Phone size={18} className="text-gray-300" />
                </div>
                <a href="tel:+917666141466" className="text-white text-[16px] md:text-[18px] hover:text-white transition-colors">
                  +91 7666141466
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="">
            <h4 className="text-[15px] md:text-[24px] font-bold tracking-widest uppercase mb-6 pb-2 border-b-2 border-transparent [border-image:linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1] inline-block pr-12">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white text-[16px] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[16px] md:text-[24px] font-bold tracking-widest uppercase mb-6 pb-2  border-b-2 border-transparent [border-image:linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)_1] inline-block pr-12">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {services?.map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-white text-[16px] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA & Social */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-4xl">👋</span>
              <h3 className="rexr-[18px] md:text-[24px] font-bold leading-tight">
                Have An Idea? Let's Build<br /> It Together.
              </h3>
            </div>

            <button className="w-full max-w-[300px] px-6 py-4 rounded-xl btn-brand-primary font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              Book Free Consultation
            </button>
<div className="flex flex-wrap gap-6">
  {socialIcons?.map((item, i) => (
    <a 
      key={i} 
      href={item?.link}
      className="bg-gradient-to-br from-white/10 to-white/40 backdrop-blur-md border border-white/20 rounded-[10px] p-2 flex items-center justify-center text-white text-[16px] hover:scale-105 transition-all"
    >
      {item?.icon}
    </a>
  ))}
</div>
          </div>
        </div>

        {/* Bottom Bar */}
      
      </div>
        <div className=" bg-[#14181E] mt-20 py-6 border-t border-white/5 px-4 2xl:px-0">
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-[16px] md:text-[18px] text-white max-w-[1440px] mx-auto'>
          <p>© Copyright 2026 JoynStack.</p>
          
          <div className="flex gap-8 text-[16px] md:text-[18px]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;