
import React from 'react'

export default function Card({img, title, extract}) {
  
  return (
    <div>
      
      <img src={img} alt={title} className='max-w-xs rounded-xl' />
      <p className='font-bold'>{title}</p>
      <p>{extract}</p>
    </div>
  )
}
