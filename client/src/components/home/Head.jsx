import React, { useState } from 'react'
import { RiSearchLine, RiBriefcase4Fill, RiMenuAddLine, RiCloseCircleFill } from '@remixicon/react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'

const Head = () => {
    const [toggle, setToggle] = useState(false)
    const { imageUrl } = useUserContext()
    return (
        <div className='w-full border-b-[1px] border-gray-300'>
            <div className='pt-8 pb-5 w-[95%] mx-auto flex items-center justify-between'>

                <div className='md:flex items-center gap-10 hidden'>
                    <NavLink to='/'>
                        <img className='h-8 cursor-pointer' src="./dribble.png" alt="" />
                    </NavLink>                        
                    <ul className='flex gap-8'>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Inspiration</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Find work</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Learn Design</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Go pro</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Hire Designers</li>
                    </ul>
                </div>
                <div
                    onClick={() => setToggle(prev => !prev)}
                    className='relative md:hidden block'><RiMenuAddLine size={28} /></div>
                <div className={`absolute w-[200px] left-0 top-0 z-50 bg-slate-50 p-10 ${toggle ? '' : 'hidden'}`}>
                    <span
                        onClick={() => setToggle(prev => !prev)}
                        className='absolute top-4 left-4'><RiCloseCircleFill /></span>
                    <NavLink to='/'>
                        <img className='h-8 cursor-pointer mb-10 ' src="./dribble.png" alt="" />
                    </NavLink>
                    <ul className='flex md:flex-row flex-col gap-8'>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Inspiration</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Find work</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Learn Design</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Go pro</li>
                        <li className='text-sm text-gray-900 font-semibold opacity-85'>Hire Designers</li>
                    </ul>
                </div>

                <div className='flex items-center justify-end relative gap-4'>
                    <RiSearchLine className='absolute md:left-[110px] left-[90px]' color='gray' size={20} />
                    <input
                        className='p-2 w-[30%] pl-8 rounded-md focus:outline-none bg-gray-100'
                        placeholder={'Search'}
                        type="text" />
                    <RiBriefcase4Fill size={22} color='gray' />
                    <img className='h-9 w-9 rounded-full object-cover' src={`${imageUrl}`} alt="" />
                    <NavLink to='/'>
                        <button className='px-6 py-2 hidden md:block rounded-md bg-pink-500 text-white text-sm font-medium'>Upload</button>
                    </NavLink >
                </div>
            </div>
        </div>
    )
}

export default Head