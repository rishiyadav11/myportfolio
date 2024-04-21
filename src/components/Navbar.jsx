import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='  flex justify-between px-6 sm:container sm:pl-32 py-4 items-center bg-transparent absolute top-0 z-30 w-full h-fit'>
        <NavLink to="/" className="w-10 bg-white h-10 rounded-lg flex items-center justify-center font-bold shadow-md">
            <p className='blue-gradient_text'>RY</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium '>
            <NavLink to="/About" className={({isActive}) =>isActive  ? "text-blue-500  bg-gray-200 px-2 py-1 rounded-md" : 'text-black  bg-white px-2 py-1 rounded-md'}>
                About
            </NavLink>

            <NavLink to="/projects" className={ ({isActive}) =>isActive  ? "text-blue-500  bg-gray-200 px-2 py-1 rounded-md " : 'text-black bg-white px-2 py-1 rounded-md'}>
                Projects
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar;