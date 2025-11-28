import React from 'react'
import AboutUs from '../sections/Home/AboutUs'
import CompanyCaroursel from '../sections/Home/CompanyCaroursel'
import PastWorks from '../sections/Home/PastWorks'
import Services from '../sections/Home/Services'
import OurProcess from '../sections/Home/OurProcess'
import Faq from '../sections/Home/Faq'
import Footer from '../components/Footer'
import Hero from '../sections/Home/Hero'
import Pricing from '../sections/Home/Pricing'

function Home() {
  return (
    <>
        <Hero/>
        <AboutUs/>
        {/* <CompanyCaroursel/> */}
        <PastWorks/>
        <Services/>
        <OurProcess/>
        <Pricing/>
        <Faq/>
    </>
  )
}

export default Home