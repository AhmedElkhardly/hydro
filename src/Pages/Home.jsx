import React from 'react'
import HeaderSwiper from '../Components/HeaderSwiper/HeaderSwiper'
import About from '../Components/About/About'
import HomeSpecifications from '../Components/HomeSpecifications/HomeSpecifications'
import Booking from '../Components/Booking/Booking'
import ProjectSection from '../Components/ProjectSection/ProjectSection'

function Home() {
  return (
    <>
    <HeaderSwiper />
    <About />
    <HomeSpecifications />
    <Booking/>
    <ProjectSection />
    </>
  )
}

export default Home