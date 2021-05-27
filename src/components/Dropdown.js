import React from 'react'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <ul className={isOpen ? 'grid grid-rows-6 text-center items-center bg-green-800 text-white' : 'hidden'} 
        onClick={toggle}>
                <li className="p-4" to='/' value='About'>About</li>
                <li className="p-4 " to='/menu' value='Home'>Study History</li>
                <li className="p-4" to='/about' value='Home'>Work History</li>
                <li className="p-4" to='/about' value='Home'>Hobbies</li>
                <li className="p-4" to='/contact' value='Home'>Contact</li>
        </ul>
    )
}

export default Dropdown
