import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Creative Studio', href: '#' },
    { name: 'Technology', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Hire Developers', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className={`w-full z-50 ${isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* 1440px Max-Width Container */}
      <div className="max-w-[1440px] mx-auto py-[15px] px-6 ">
        <div className="flex justify-between items-center ">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="relative flex items-center space-x-2">
           <img src="/icons/js-logo.svg" />
            </div>
          </div>

          {/* Desktop Navigation (Hidden on mobile/tablet) */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks?.map((link) => (
              <a
                key={link?.name}
                href={link?.href}
                className={`text-[18px] font-[500] leading-[100%] -tracking-[2] font-outfit transition-colors duration-200 ${
                  link.active 
                    ? 'text-blue-600' 
                    : 'text-[#282828] hover:text-blue-600'
                }`}
              >
                {link?.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="btn-brand-primary py-[14px] px-[25px] ">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
             {isOpen ? (
                  <HiX className="w-8 h-8" />
                ) : (
                  <HiMenu className="w-8 h-8" />
                )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl z-30">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium rounded-md ${
                  link.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
               <button className=" w-full bg-gradient-to-r from-[#4F75FF] to-[#2EC4B6]  text-white px-7 py-2.5 rounded-[10px] font-[400] text-[16px] hover:opacity-90 transition-opacity ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;