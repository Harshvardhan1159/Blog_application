import React from 'react'

function Navbar() {
    return (
        <nav className='bg-white shadow-md'>
            <ul className='flex gap-6 p-4 list-none'>
                <li className='hover:text-blue-600 cursor-pointer transition-colors duration-200'>Home</li>
                <li className='hover:text-blue-600 cursor-pointer transition-colors duration-200'>Blog</li>
                <li className='hover:text-blue-600 cursor-pointer transition-colors duration-200'>About</li>
                <li className='hover:text-blue-600 cursor-pointer transition-colors duration-200'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar