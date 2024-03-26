import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frame from '../asset/frame.png'
import { FcGoogle } from "react-icons/fc"

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className='flex w-11/12 max-w-[1160px] justify-between py-2 mx-auto gap-x-12'>
            <div className='w-11/12 '>
                {/* title */}
                <h1 className='text-white font-semibold text-[1.8rem] leading-[2.3rem]'>{title}</h1>

                {/* description */}
                <p className='text-gray-300'>
                    <span className='text-black'> {desc1}</span><br />
                    <span className='text-teal-100 italic'> {desc2}</span>
                </p>

                {/* form */}
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                {/* or */}
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-gray-100'></div>
                    <p className='text-gray-100 font-semibold'>OR</p>
                    <div className='w-full h-[1px] bg-gray-100'></div>
                </div>

                {/* button */}
                <button className='w-full flex justify-center items-center rounded text-gray-100 border px-[12px] py-[8px] gap-x-2'>
                    <FcGoogle />
                    <p>Signup with Google </p>
                </button>
            </div>

            {/* images */}

            <div className='relative w-11/12 max-w-[1160px]'>
                <img src={frame} alt='frame' width={558} height={504} loading='lazy' />
                <img src={image} alt='student' width={558} height={504} loading='lazy' className='absolute -top-4 right-4' />
            </div>


        </div>
    )
}

export default Template
