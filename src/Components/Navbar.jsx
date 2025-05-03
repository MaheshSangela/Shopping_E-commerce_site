import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='flex items-center justify-evenly p-2 bg-black'>
      <Link className='text-white !no-underline' to='/'>Home</Link>
      <Link className='text-white !no-underline' to='/about'>About</Link>
      <Link className='text-white !no-underline' to='/mans'>Man's</Link>
      <Link className='text-white !no-underline' to='/woman'>Woman's</Link>
      <Link className='text-white !no-underline' to='/electronic'>Electronocs</Link>
      <Link className='text-white !no-underline' to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar;