import React from 'react'
import HeroSection from './component/HeroSection'
import TechnologyPartner from './component/TechnologyPartner'
import WhatWeBuild from './component/WhatWeBuild'
import HelpBusiness from './component/HelpBusiness'
import ModernSolutions from './component/ModernSolutions'
import PortfolioTestimonials from './component/PortfolioTestimonials'
import ScheduleSection from './component/ScheduleSection'
import Layout from '../component/Layout'


export default function Page() {
  return (
    <div>
 <Layout>
     <HeroSection />
    <TechnologyPartner />
    <WhatWeBuild />
    <HelpBusiness />
    <ModernSolutions />
    <PortfolioTestimonials />
    <ScheduleSection />
 </Layout>
      
    </div>
  )
}
