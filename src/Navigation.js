import React from 'react'
import { Link } from '@reach/router'

export default () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
    </nav>
  )
}
