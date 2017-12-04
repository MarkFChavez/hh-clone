import React from 'react'

const Header = props => (
  <header className='header--box'>
    {props.children}
    <hr />
  </header>
)

export default Header