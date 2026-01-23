import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        // STEP 1: Container (<nav>) - Semantic HTML element for navigation
        // bg-white: White background
        // shadow-md: Medium shadow for depth (makes navbar "float")
        // sticky top-0: Stays at top when scrolling
        // z-50: Ensures navbar stays above other content
        <nav className='bg-white shadow-md sticky top-0 z-50'>

            {/* STEP 2: Inner container for content width control */}
            {/* max-w-7xl: Maximum width (7xl = 80rem = 1280px) */}
            {/* mx-auto: Centers the container horizontally */}
            {/* px-4: Padding on left/right (4 = 1rem = 16px) */}
            <div className='max-w-7xl mx-auto px-4'>

                {/* STEP 3: Flex container - splits Logo and Navigation */}
                {/* flex: Creates flexbox container */}
                {/* justify-between: Logo on left, Nav on right */}
                {/* items-center: Vertically centers items */}
                {/* h-16: Fixed height (16 = 4rem = 64px) */}
                <div className='flex justify-between items-center h-16'>

                    {/* STEP 4: Logo/Brand Section */}
                    {/* text-2xl: Large text size */}
                    {/* font-bold: Bold weight */}
                    {/* text-blue-600: Blue color for branding */}
                    {/* cursor-pointer: Shows it's clickable */}
                    <Link to="/" className='text-2xl font-bold text-blue-600 cursor-pointer'>
                        MyBlog
                    </Link>

                    {/* STEP 5: Navigation Links */}
                    {/* flex: Horizontal layout */}
                    {/* gap-8: Space between links (8 = 2rem = 32px) */}
                    {/* list-none: Removes bullet points */}
                    <ul className='flex gap-8 list-none'>

                        {/* STEP 6: Individual Links */}
                        {/* text-gray-700: Dark gray (not pure black - easier on eyes) */}
                        {/* hover:text-blue-600: Blue on hover */}
                        {/* cursor-pointer: Shows clickability */}
                        {/* transition-colors: Smooth color change */}
                        {/* duration-200: Animation takes 200ms */}
                        {/* font-medium: Medium weight text */}
                        <li>
                            <Link to="/" className='text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className='text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className='text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium'>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar