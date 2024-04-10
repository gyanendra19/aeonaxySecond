import React, { useEffect, useState } from 'react'
import { RiCameraFill } from '@remixicon/react'
import {PinkBtn} from '../../shared/pinkBtn'
import axios from 'axios'
import { useUserContext } from '../../contexts/userContext'
import { Alert } from '../../shared/alert'
import { NavLink } from 'react-router-dom'

const AddPic = () => {
    const [image, setImage] = useState()
    const [location, setLocation] = useState('')
    const { user, imageUrl, setImageUrl} = useUserContext()
    const formData = new FormData()
    formData.append("image", image);

    console.log(user);
    useEffect(() => {
        (async () => {
            const res = await axios.patch('https://aeonaxysecond-4.onrender.com/api/v1/user/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if(res.status === 200){
                Alert('Photo Added')
            }else{
                Alert('Something went wrong!')
            }
            setImageUrl(res.data.data.secure_url);
        })()
    }, [image])

    return (
        <section className='w-full pb-6 alert-active'>
            <div className='w-11/12 mx-auto py-4'>
                <NavLink to='/'>
                <img className='h-8 cursor-pointer' src="./dribble.png" alt="" />
                </NavLink>
            </div>

            <div className='md:w-5/12 w-5/6 mx-auto'>
                <p className='text-3xl font-extrabold'>Welcome! Let's create your profile</p>
                <p className='text-sm text-gray-500 mt-5 font-medium'>Let others get to know you better! You could do this later</p>

                <p className='mt-10 font-extrabold'>Add an avatar</p>
                <div className='flex mt-7 gap-10 relative'>
                    <img className='absolute z-10 -top-4 md:-top-0 rounded-full md:w-36 md:h-36 w-24 h-24 object-cover' src={`${imageUrl}`} alt="/" />
                    <div className='flex justify-center items-center opacity-60 md:w-36 md:h-36 w-24 h-16 rounded-full border-[3px] border-gray-400 border-dashed'><RiCameraFill color='gray' /></div>
                    <div className='flex flex-col gap-5'>
                        <form>
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                className='hidden'
                                type="file" name="file" id="file" />
                            <label className='mt-6 w-fit py-1 px-3 text-sm rounded-md font-semibold cursor-pointer border-[1px] border-gray-400' htmlFor="file">Choose Image</label>
                        </form>
                        <p className='text-sm text-gray-500 font-semibold cursor-pointer'>{'>'} or choose one of your defaults</p>
                    </div>
                </div>

                <div className='mt-14'>
                    <p className='text-xl font-bold'>Add your Location</p>
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        className='mt-4 p-2 mb-8 w-full placeholder:text-gray-400 focus:outline-none opacity-65 border-b-[1px] border-gray-400'
                        placeholder='Enter a location' type="text" />
                    <PinkBtn text='Next' toPage='choose-field' readOnly = {location} onPage='add-photo' />
                </div>
            </div>
        </section>
    )
}

export default AddPic