import React from 'react'

export  const Card = (props) => {
  return (
    <>
    <div className='card'>
    <img src= {`/${props.img}`} className='card-img' alt="person image" />
    <div className='card-stats'>
    <img src= "/star.png" className='star' alt="star image" />
    <span>{props.rating}</span>
    <span className='gray'>({props.reviewCount}) • </span>
    <span className='gray'>{props.country}</span>
    </div>
    <p>{props.title}</p>
    <p> <span className='bold'>From ${props.price}</span> / person</p>
    </div>

    </>
  )
}
