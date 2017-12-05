import React from 'react'

const cloneUrl = 'https://hackerhunt.co/'
const twitterUrl = 'https://twitter.com/markisundefined'

const Header = props => (
  <header className='header--box'>
    <h2> {props.title} </h2>
    <b>&gt;</b> &nbsp;
    <small>
      a <a href={cloneUrl} target='_blank'>hacker hunt</a> clone written by <a href={twitterUrl}>@markisundefined</a>
    </small>
    <hr />
  </header>
)

export default Header