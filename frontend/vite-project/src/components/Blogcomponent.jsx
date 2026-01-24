import React from 'react'

function Blogcomponent({ item, index }) {
    return (
        <div className='flex flex-col gap-4 p-4 h-auto w-80 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200' key={index}>
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-semibold text-gray-900'>{item.title}</h2>
                <p className='text-gray-600 line-clamp-3'>{item.content}</p>
            </div>
            <div className='flex gap-7 justify-center mt-auto'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Read More</button>
            </div>
        </div>
    )
}

export default Blogcomponent