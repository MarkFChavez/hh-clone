import React from 'react'

const TopicListItem = ({label}) => (
  <li className='nav-item'>
    <small> <a className='nav-link' href='#'>{label}</a> </small>
  </li>
)

export default TopicListItem