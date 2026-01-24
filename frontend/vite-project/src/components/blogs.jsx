import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Blogcomponent from './Blogcomponent'
import axios from 'axios'


function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await axios.get('http://localhost:3000/api/blog/');
            setBlogs(res.data.blogs);
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <div className='flex flex-row gap-8 justify-center items-center h-screen'>
                    {blogs.map((item, index) => (

                        <Blogcomponent key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )

}

export default Blogs