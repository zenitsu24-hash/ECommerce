import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestProducts from '../Components/BestProducts'
import OurPolicy from '../Components/OurPolicy'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestProducts/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home
