import React, { useEffect, useState } from 'react'
import HeaderSwiper from '../Components/HeaderSwiper/HeaderSwiper'
import About from '../Components/About/About'
import HomeSpecifications from '../Components/HomeSpecifications/HomeSpecifications'
import Booking from '../Components/Booking/Booking'
import ProjectSection from '../Components/ProjectSection/ProjectSection'
import System from '../Components/System/System'
import Sponsers from '../Components/Sponsers/Sponsers'
import { getBody } from '../APIs/home'

function Home() {
  const [body, setBody] = useState('')
  useEffect(() => {
    (async () => { const res = await getBody(); setBody(res.data.data) })()
  }, [])
    
  return (
    <>
      <HeaderSwiper />
      <About data={body[0]}/>
      <HomeSpecifications data={body[1]}/>
      <Booking data={body[2]}/>
      <ProjectSection data={body[3]}/>
      <System />
      <Sponsers />
    </>
  )
}

export default Home