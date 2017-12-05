import React from 'react'

const Card = ({title, desc}) => (
  <div className='card' style={{marginBottom:10}}>
    <div className='card-body'>
      <h5 className='card-title'>{title}</h5>
      <small className='card-text' style={{color: 'gray'}}>{desc}</small>
    </div>
  </div>
)

export default Card