import { useState } from 'react'
import { Nav } from './assets/components/Nav'
import { Hero } from './assets/components/Hero'
import { Card } from './assets/components/Card'
import {data} from './assets/components/Data'

function App() {

const cards = data.map ( (item) => {
  return <Card
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          
  />
})
  return (
    <>
    <Nav/>
    <Hero/>
    {cards}
    </>
  )
}

export default App
