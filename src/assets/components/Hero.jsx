import React from 'react'
import photo from "/photo-grid.png"

export const Hero = () => {
  return (
    <>
    <section className='hero'>
    <img src={photo} className='hero-img' alt=" collage photo" />
    <h1 className='hero-header'>Online Experiences</h1>
    <p className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore totam numquam sed ullam sunt cumque ipsum necessitatibus quis quae.</p>
    </section>
    </>
  )
}
