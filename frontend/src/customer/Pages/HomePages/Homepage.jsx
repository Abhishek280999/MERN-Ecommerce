import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default Homepage