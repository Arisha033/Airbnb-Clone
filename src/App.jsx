import { useState } from 'react'
import { Nav }  from './assets/components/Nav'
import { Hero }  from './assets/components/Hero'
import { Card }  from './assets/components/Card'
import data from './Data'

function App() {

const cards = data.map ( (item) => {
 // console.log(item)
  return <Card
          key={item.id}
          // item={item}
          {...item}
  />
})

  return (
    <>
    <Nav/>
    <Hero/>
    <section className="cards-list">
      {cards}
    </section>
    </>
  )
}

export default App
