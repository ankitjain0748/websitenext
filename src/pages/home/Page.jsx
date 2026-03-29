import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from './component/HeroSection'
import TechnologyPartner from './component/TechnologyPartner'
import WhatWeBuild from './component/WhatWeBuild'
import HelpBusiness from './component/HelpBusiness'
import ModernSolutions from './component/ModernSolutions'
import Footer from './component/Footer'
import PortfolioTestimonials from './component/PortfolioTestimonials'
import ScheduleSection from './component/ScheduleSection'


export default function Page() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <TechnologyPartner />
    <WhatWeBuild />
    <HelpBusiness />
    <ModernSolutions />
    <PortfolioTestimonials />
    <ScheduleSection />
    <Footer />
      
    </div>
  )
}
