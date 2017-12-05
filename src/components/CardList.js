import React from 'react'
import Card from './Card'

const CardList = props => (
  <div>
    {props.items.map(item => <Card key={item.id} {...item} />)}
  </div>
)

export default CardList