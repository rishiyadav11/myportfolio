import React, { useState } from 'react'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const NavItems = () => {
    return(
        <ul className='nav-ul'>
           {
            navLinks.map(({id,href,name})=>(
                <li key={id} className='nav-li'>
                 <NavLink to={href} className='nav-li_a'>{name}</NavLink>


                </li>
            ))
           }

        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const toogleMenu = () =>{setisOpen((prev)=>!prev) }
  return (
    <header className='fixed  select-none top-0 left-0  right-0 z-50 bg-black/90'>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className='text-neutral-400 hidden sm:flex font-bold text-xl hover:text-white transition-colors'>Rishi yadav</a>
                <img className='w-8 h-8 object-cover rounded-md flex sm:hidden' src="/assets/logo.png" alt="" />
                <button onClick={toogleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                    <img src={isOpen ?"https://raw.githubusercontent.com/rishiyadav11/myportfolio/24b1bc8c032ecf3e0551de12c5681dd05462c899/public/assets/close.svg" :"https://raw.githubusercontent.com/rishiyadav11/myportfolio/24b1bc8c032ecf3e0551de12c5681dd05462c899/public/assets/menu.svg"} alt="toggle " className='w-6 h-6' />
                </button>
                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar  ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className='p-5  '>
                <NavItems />
            </nav>
        </div>
    </header>
  )
}

export default Navbar
