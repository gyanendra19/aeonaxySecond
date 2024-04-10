import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useUserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'
import { signupBtn } from '../../shared/pinkBtn'
import { Alert } from '../../shared/alert'


const Login = () => {
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    const { user, setUser } = useUserContext()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data, e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://aeonaxysecond-4.onrender.com/api/v1/user',
                data: {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            })

            console.log(res);
            if (res.data.status === 'success') {
                Alert('You are signed in')
            }
            navigate('add-photo')
            setUser(res.data.data)
        } catch (err) {
            Alert(err.response.data.status)
        }
    }

    return (
        <section className='w-full alert-active'>
            <div className='w-full h-screen md:flex'>
                <img src="./art.jpg" alt="art" />

                <div className='w-full py-4'>
                    <div className='w-[90%] mx-auto'>
                        <div className='flex justify-end gap-1'>
                            <p className='text-sm font-semibold'>Already a member?</p>
                            <NavLink className='text-sm cursor-pointer text-blue-800 font-semibold' to='/login'>Signup</NavLink>
                        </div>

                        <div className='md:w-8/12 mx-auto py-10'>
                            <p className='text-2xl font-extrabold'>Sign up to Dribble</p>

                            <form className='mt-10' onSubmit={handleSubmit(onSubmit)}>

                                {/* Name and Username */}
                                <div className='md:flex'>
                                    <div className='flex flex-col md:mb-0 mb-10'>
                                        <label className='text-sm font-extrabold' htmlFor="name">Name</label>
                                        <input
                                            {...register('name')}
                                            className='w-[85%] rounded-md bg-gray-100 mt-1 h-[30px] focus:outline-none p-3 pl-2 text-sm'
                                            type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm font-extrabold' htmlFor="name">Username</label>
                                        <input
                                            {...register('username')}
                                            className='w-[85%] rounded-md bg-gray-100 mt-1 h-[30px] focus:outline-none p-3 pl-2 text-sm'
                                            type="text" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex flex-col mt-10'>
                                    <label className='text-sm font-extrabold' htmlFor="name">Email</label>
                                    <input
                                        {...register('email')}
                                        className='md:w-[76%] w-[85%] rounded-md bg-gray-100 mt-1 h-[30px] focus:outline-none p-3 pl-2 text-sm'
                                        type="text" />
                                </div>

                                {/* Password */}
                                <div className='flex flex-col mt-10'>
                                    <label className='text-sm font-extrabold' htmlFor="name">Password</label>
                                    <input
                                        {...register('password')}
                                        className='md:w-[76%] w-[85%] rounded-md bg-gray-100 mt-1 h-[30px] focus:outline-none p-3 pl-2 text-sm'
                                        type="text" />
                                </div>

                                <div className='flex gap-3 md:w-[76%] mt-4 text-sm'>
                                    <input onChange={() => setChecked(prev => !prev)} className='w-10 h-7' type="checkbox" />
                                    <p className='font-medium'>Creating an account means you're okay with our <span className='text-blue-800'>Terms of Service, Privacy Policy,</span> and our default <span className='text-blue-800'>Notification settings.</span></p>
                                </div>

                                {signupBtn('Create Account', checked)}

                                <p className='text-[10px] mt-4 font-medium text-gray-400 w-1/2'>This site is protected by reCaptcha and the Google <span className='text-blue-800'>Privacy Policy,</span> and <span className='text-blue-800'>Terms of Services </span>apply</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login