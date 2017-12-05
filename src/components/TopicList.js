import React from 'react'
import TopicListItem from './TopicListItem'

const TopicList = ({topics}) => (
  <ul className='nav flex-column'>
    {topics.map(topic => <TopicListItem key={topic} label={topic} />)}
  </ul>
)

export default TopicList