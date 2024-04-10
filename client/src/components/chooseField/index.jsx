import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../contexts/userContext'
import axios from 'axios'
import { Alert } from '../../shared/alert'


const ChooseField = () => {
    const [clicked, setClicked] = useState([])
    const {user} = useUserContext()

    const selectClicked = (userRole) => {
        if (clicked.includes(userRole)) {
            const deleteRole = clicked.filter(role => role !== userRole)
            setClicked(deleteRole)
            return
        }
        if (!clicked.includes(userRole)) setClicked([userRole, ...clicked])
    }

    const sendingMail = async() => {
         try{await axios({
            method: 'POST',
            url: 'http://localhost:4888/api/sendemail',
            data:{
                name: user.name,
                email: user.email
            }
        })
    }catch(e){
        Alert('Something went wrong')
    }
    }

    // Function for the user Box
    const userBox = (userPhoto, userRole) => {
        return <div onClick={() => selectClicked(userRole)}
            className={`h-56 md:w-[20%] w-[85%]  border-gray-200 rounded-md gap-2 items-center flex flex-col justify-center cursor-pointer ${clicked.includes(userRole) ? 'shadow-md border-2 border-pink-300' : 'border-[1px]'}`}>
            <div className={`flex flex-col relative ${clicked.includes(userRole) ? '-translate-y-[70px]' : ''}`}>
                <img className='h-28' src={`./${userPhoto}`} alt="" />
                <div className='ml-3 flex flex-col items-center'>
                    <p className=' w-[90%] text-center font-bold text-[14px]'>{userRole}</p>
                </div>
                <p className={`absolute w-[90%] left-3 text-sm text-center -bottom-16 ${clicked.includes(userRole) ? 'block' : 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro repellendus</p>
            </div>
            <input
                checked={clicked.includes(userRole)}
                type="checkbox" className='w-4 h-4 accent-pink-500 mt-1' />
        </div>
    }

    return (
        <section className='py-2 w-full'>
            <div className='w-11/12 py-4 mx-auto'>
                <NavLink to='/'>
                    <img className='h-8 cursor-pointer' src="./dribble.png" alt="" />
                </NavLink>            </div>
            <div className='w-5/6 mx-auto'>

                <div className='w-full flex flex-col items-center justify-center gap-4 mt-8'>
                    <p className='font-extrabold md:text-3xl text-xl'>What brings you to Dribble?</p>
                    <p className='text-sm text-gray-600'>Selct the options that best describes you. Don't worry you can explore other options later.</p>
                </div>

                <div className='w-full flex md:flex-row flex-col justify-center items-center gap-4 mt-20'>
                    {userBox('first.png', 'I am a Designer looking to share my work')}
                    {userBox('second.png', `I'm looking to hire a Designer`)}
                    {userBox('first.png', `I'm looking for design inspiration`)}
                </div>

                <div className='w-full flex-col items-center flex justify-center mt-10'>
                    <p className='text-sm font-bold text-center'>Anything else? You can select multiple</p>
                    <NavLink to={`/${clicked.length === 0 ? 'choose-feild' : 'home'}`}>
                        <button onClick={() => sendingMail()} type='submit' className={`px-12 py-2 mt-6 rounded-md bg-pink-500 text-white text-sm font-medium ${clicked.length === 0 ? 'opacity-60' : ''}`}>Finish</button>
                    </NavLink >
                </div>
            </div>
        </section>
    )
}

export default ChooseField