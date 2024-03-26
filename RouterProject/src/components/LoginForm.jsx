import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast'
import image from "../asset/login.png"

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ email: "", password: "" })

    const [showPassword, setshowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in")
      
        const finalData={
            ...formData,
            
        }
        console.log("printing data")
        console.log(finalData)
        navigate("/dashboard")
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-gray-100 leading-[1.375rem]'>Email Address <sup className='text-red-700'>*</sup></p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email '
                    name='email'
                    className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none' />
            </label>

            <label className='w-full relative'>
                <p className='text-gray-100 leading-[1.375rem]'>Password <sup className='text-red-700'>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password '
                    name='password'
                    className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none' />


                <span onClick={() => setshowPassword((prev) => !prev)}
                    className='absolute right-5 top-[37px]'>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />)}
                </span>

                <NavLink to="https://pbs.twimg.com/media/GCrDwb8aIAANaw1.jpg:large" target='_blank'>
                    <p className='mt-1 max-w-max ml-auto text-blue-900' > Forgot Password</p>
                </NavLink>

            </label>

            <button className=' w-full bg-yellow-400 rounded font-medium text-white px-[12px] py-[8px] mt-4 '>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
