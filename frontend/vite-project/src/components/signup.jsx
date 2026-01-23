import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/register', {
                username,
                password,
                email
            })
            if (res.data.success) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Signup error:', error)
            alert('Signup failed: ' + (error.response?.data?.message || error.message))
        }
    }
    return (
        <>
            <Navbar />
            <form onSubmit={handleSignup}>
                <div className='flex flex-col gap-4 justify-center items-center h-screen'>
                    <div className='flex flex-col gap-4'>
                        <p>Enter your details</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <input type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'

                        />
                        <input type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                        />


                        <input type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign Up</button>
                    </div>
                </div>
            </form>


        </>
    )
}

export default Signup