import React from 'react'
import HeroSection from './HeroSection'
import Collections from './Collections'
import Features from './Features'
import LogoClouds from './LogoClouds'
import Testimonial from './Testimonial'
import Team from './Team'
import AboutUs from './AboutUs'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Collections />
      <Features />
      <LogoClouds />
      <Testimonial />
      <Team /> 
      <AboutUs />

    </div>
  )
}

export default HomePage