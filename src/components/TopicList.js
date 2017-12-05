import React from 'react'
import TopicListItem from './TopicListItem'

const TopicList = ({topics}) => (
  <ul className='nav flex-column'>
    {topics.map(topic => <TopicListItem label={topic} />)}
  </ul>
)

export default TopicList