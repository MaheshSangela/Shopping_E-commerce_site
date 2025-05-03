import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo2.png'

const Header = ({allProduct}) => {

  return (
    <div className='flex bg-gray-800 text-white flex-wrap items-center px-4 justify-between  w-full'>
      <div>
        <img src={Logo} alt="img" className='w-[100px]' />
      </div>
      <div className=' flex gap-5 text-white items-center '>

        <div>
        <Link className='text-white !no-underline' to='/card'>Cart 
        <i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
        <span className=' py-0 px-1.5 bg-orange-500 text-black font-bold rounded-full relative bottom-2 '>
        {allProduct.length}
        </span>
        
        </div>
     

      </div>
    </div>
  )
}

export default Header
