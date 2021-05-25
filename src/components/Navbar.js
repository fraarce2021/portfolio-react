import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
            <input type='button'  className='pl-8'value='Home'/>
            <ul className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </ul>
            <ul className="pr-8 md:block hidden">
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
