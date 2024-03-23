import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {
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

    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/dashboard")
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email '
                    name='email' />
            </label>

            <label>
                <p>Password <sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password '
                    name='password' />


                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <NavLink to="https://pbs.twimg.com/media/GCrDwb8aIAANaw1.jpg:large" target='_blank'>
                    <p> Forgot Password</p>
                </NavLink>

            </label>

            <button >
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
