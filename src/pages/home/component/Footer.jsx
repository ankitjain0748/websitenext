import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

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

  return (
    <footer className="bg-[#0A0A0B] text-white font-outfit relative overflow-hidden">
      
      {/* Subtle background glow on the right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14B8A6] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="JoynStack" className="h-10 w-auto" /> 
              {/* Replace with your actual logo image */}
            </div>
            
            <p className="text-gray-400 text-[16px] leading-relaxed max-w-[300px]">
              Your one-stop technology partner for building, launching, and scaling digital products.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <MapPin size={18} className="text-gray-300" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  16 MIIC, Jawahar Lal Nehru Marg, near MNIT Campus, Jaipur, Rajasthan 302017
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={18} className="text-gray-300" />
                </div>
                <a href="mailto:info@joynstack.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@joynstack.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} className="text-gray-300" />
                </div>
                <a href="tel:+917666141466" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +91 7666141466
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-bold tracking-widest uppercase mb-6 pb-2 border-b border-white/10 inline-block pr-12">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-[15px] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[15px] font-bold tracking-widest uppercase mb-6 pb-2 border-b border-white/10 inline-block pr-12">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white text-[15px] transition-colors">
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
              <h3 className="text-[24px] font-bold leading-tight">
                Have An Idea? Let's Build<br /> It Together.
              </h3>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4E87FC] to-[#14B8A6] font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              Book Free Consultation
            </button>

            <div className="flex flex-wrap gap-3">
              {['Bē', 'IG', 'X', 'TG', 'IN'].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all text-sm font-semibold text-gray-400 hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-gray-500">
          <p>© Copyright 2026 JoynStack. All rights reserved.</p>
          
          <div className="flex gap-8">
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