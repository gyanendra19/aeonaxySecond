import React from 'react'
import { RiSearchLine, RiBriefcase4Fill, RiFacebookFill, RiPinterestLine, RiInstagramLine, RiTwitterFill } from '@remixicon/react'


const Footer = () => {
    return (
        <div className='w-full bg-gray-100 pt-10'>
            <div className='w-[90%] mx-auto flex md:flex-row flex-col gap-8'>
                <div className='flex flex-col gap-4 md:w-[20%]'>
                    <img className='h-8 w-28' src="./dribble.png" alt="" />
                    <p className='text-sm font-medium'>Dribble is world's leading Community for creatives to share, grow and get hired.</p>
                    <div className='flex gap-3'>
                        <RiFacebookFill size={22} color='gray' />
                        <RiInstagramLine size={22} color='gray' />
                        <RiPinterestLine size={22} color='gray' />
                        <RiTwitterFill size={22} color='gray' />
                    </div>
                </div>

                <div className='flex flex-col gap-3 md:w-[14%]'>
                    <span className='font-bold text-sm'>For Designers</span>
                    <span className='text-sm font-medium'>Go Pro!</span>
                    <span className='text-sm font-medium'>Explore Design work</span>
                    <span className='text-sm font-medium'>Design blog</span>
                    <span className='text-sm font-medium'>Overtime podcast</span>
                    <span className='text-sm font-medium'>Playoffs</span>
                    <span className='text-sm font-medium'>Weekly Warm-up</span>
                    <span className='text-sm font-medium'>Refer a friend</span>
                    <span className='text-sm font-medium'>Code of conduct</span>
                </div>

                <div className='flex flex-col gap-3 md:w-[13%]'>
                    <span className='font-bold text-sm'>Hire Designer</span>
                    <span className='text-sm font-medium'>Post a job opening</span>
                    <span className='text-sm font-medium'>Post a freelance project</span>
                    <span className='text-sm font-medium'>Search for designers</span>
                    <span className='font-bold text-sm mt-2'>Brands</span>
                    <span className='text-sm font-medium'>Advertise with us</span>
                </div>

                <div className='flex flex-col gap-3 md:w-[12%]'>
                    <span className='font-bold text-sm'>Company</span>
                    <span className='text-sm font-medium'>About</span>
                    <span className='text-sm font-medium'>Career</span>
                    <span className='text-sm font-medium'>Support</span>
                    <span className='text-sm font-medium'>Media kit</span>
                    <span className='text-sm font-medium'>Testimonials</span>
                    <span className='text-sm font-medium'>API</span>
                    <span className='text-sm font-medium'>Terms of service</span>
                    <span className='text-sm font-medium'>Privacy Policy</span>
                    <span className='text-sm font-medium'>Cookie Policy</span>
                </div>

                <div className='flex flex-col gap-3 md:w-[13%]'>
                    <span className='font-bold text-sm'>Directories</span>
                    <span className='text-sm font-medium'>Design Jobs</span>
                    <span className='text-sm font-medium'>Designer for hire</span>
                    <span className='text-sm font-medium'>Freelance designers for hire</span>
                    <span className='text-sm font-medium'>Tags</span>
                    <span className='text-sm font-medium'>Places</span>
                    <span className='font-bold text-sm mt-1'>Design Assets</span>
                    <span className='text-sm font-medium'>Dribble Marketplace</span>
                    <span className='text-sm font-medium'>Creative Market</span>
                    <span className='text-sm font-medium'>Fontspring</span>
                    <span className='text-sm font-medium'>Font squirrel</span>
                </div>

                <div className='flex flex-col gap-3 md:w-[13%]'>
                    <span className='font-bold text-sm'>Design Resources</span>
                    <span className='text-sm font-medium'>Freelancing</span>
                    <span className='text-sm font-medium'>Design Hiring</span>
                    <span className='text-sm font-medium'>Design portfolio</span>
                    <span className='text-sm font-medium'>Design Education</span>
                    <span className='text-sm font-medium'>Creative process</span>
                    <span className='text-sm font-medium'>Design industry trends</span>
                </div>
            </div>

            <div className='w-full mx-auto mt-4 border-t-[1px] border-gray-200 p-8 flex justify-between'>
                <p className='text-sm font-medium text-gray-500'>2023 Dribble. All rights reserved</p>
                <div className='flex gap-2'>
                    <p className='text-sm font-medium'><span className='font-semibold'>20,34,178</span> shots dribbled</p>
                    <img className='h-6' src="./logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer