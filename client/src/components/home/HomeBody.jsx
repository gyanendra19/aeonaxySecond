import React from 'react'
import {RiMailCheckFill} from '@remixicon/react'
import { useUserContext } from '../../contexts/userContext'

const HomeBody = () => {
  const {user} = useUserContext()
  console.log(user);
  return (
    <section className='w-full py-14'>
        <div className='md:w-1/2 w-5/6 text-center mx-auto'>
            <div className="flex flex-col gap-[14px] items-center">
                <p className='text-2xl font-bold'>Please verify your email...</p>
                <RiMailCheckFill size={80} color='gray'/>
                <p className='text-gray-500'>Please verify your email. We have sent an confirmation to:</p>
                <p className='font-bold'>{user.email || 'myemail@example.com'}</p>
                <p className='text-gray-500 text-sm'>Click the comfirmation link in that email to begin using Dribble</p>
                <p className='text-sm text-gray-500'>Didn't receive the email? Check your spam folder, it may have been caught by a filter, if you still don't see it, you can <span className='text-pink-600 font-medium cursor-pointer'>resend the confirmation link</span></p>
                <p className='text-sm text-gray-500'>Wrong email address? <span className='text-pink-600 font-medium cursor-pointer'>Change it</span></p>
            </div>
        </div>
    </section>
  )
}

export default HomeBody