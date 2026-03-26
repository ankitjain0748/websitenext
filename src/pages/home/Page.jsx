import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from './component/HeroSection'
import TechnologyPartner from './component/TechnologyPartner'
import WhatWeBuild from './component/WhatWeBuild'
import HelpBusiness from './component/HelpBusiness'
import ModernSolutions from './component/ModernSolutions'
import Footer from './component/Footer'


export default function Page() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <TechnologyPartner />
    <WhatWeBuild />
    <HelpBusiness />
    <ModernSolutions />
    <Footer />
      
    </div>
  )
}
