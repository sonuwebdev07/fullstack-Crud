import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-primary text-white d-flex'>
      <Link to="/" className='nav-link me-2 ms-auto'>Home</Link>
      <Link to="list" className='nav-link me-auto'>List</Link>
    </div>
  )
}

export default Header
