import React from 'react'
import Navbar from './navbar'
function Home() {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 py-12'>
                <div className='text-center mb-12'>
                    <h1 className='text-5xl font-bold text-gray-900 mb-4'>
                        Welcome to MyBlog
                    </h1>
                    <p className='text-xl text-gray-600'>
                        Share your thoughts with the world
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8 mt-16'>
                    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                        <div className='text-4xl mb-4'>📝</div>
                        <h3 className='text-xl font-semibold mb-2'>Write</h3>
                        <p className='text-gray-600'>Create engaging blog posts with our easy-to-use editor</p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                        <div className='text-4xl mb-4'>👥</div>
                        <h3 className='text-xl font-semibold mb-2'>Connect</h3>
                        <p className='text-gray-600'>Build a community of readers who love your content</p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                        <div className='text-4xl mb-4'>🚀</div>
                        <h3 className='text-xl font-semibold mb-2'>Grow</h3>
                        <p className='text-gray-600'>Expand your reach and share your ideas globally</p>
                    </div>
                </div>

                <div className='text-center mt-12'>
                    <p className='text-gray-600 mb-4'>Ready to get started?</p>
                    <div className='flex gap-4 justify-center'>
                        <a href='/signup' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200'>
                            Sign Up
                        </a>
                        <a href='/login' className='bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors duration-200'>
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
