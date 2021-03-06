import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/Logo_Light.png'
import Logo1 from '../images/Logo_Dark.png'

// s

const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono' role='navigation'>
            <div><img src={Logo} alt="coding" className="personal-logo" /></div>
            <ul className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </ul>
            <ul className="pr-8 md:flex hidden ul-nav-hero">
                <li className="p-4" to='/' value='About'>About</li>
                <li className="p-4 " to='/menu' value='Home'>Study History</li>
                <li className="p-4" to='/about' value='Home'>Work History</li>
                <li className="p-4" to='/about' value='Home'>Hobbies</li>
                <li className="p-4" to='/contact' value='Home'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
