import React from 'react'

export const Card = (props) => {
  //console.log(props)
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(props.location === 'Online'){
    badgeText = "ONLINE"
  }

  return (
    <>
    <div className='card'>
    {badgeText && <div className="card-badge">{badgeText}</div>}
    <img src= {`/${props.coverImg}`} className='card-img' alt="person image" />
    <div className='card-stats'>
    <img src= "/star.png" className='star' alt="star image" />
    <span>{props.stats.rating}</span>
    <span className='gray'>({props.stats.reviewCount}) • </span>
    <span className='gray'>{props.country}</span>
    </div>
    <p className='card-title'>{props.title}</p>
    <p className='card-price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>

    </>
  )
}
