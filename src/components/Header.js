import React from 'react'

const Header = props => (
  <header className='header--box'>
    <h2> {props.title} </h2>
    <b>&gt;</b> &nbsp;
    <small>
      a <a href='#'>hacker hunt</a> clone written by <a href='#'>@markisundefined</a>
    </small>
    <hr />
  </header>
)

export default Header