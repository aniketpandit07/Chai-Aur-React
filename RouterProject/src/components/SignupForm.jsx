import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import image from "../asset/signup.png"


const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
        value: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault()
        if (formData.password != formData.confirmpassword) {
            toast.error("Password do not match")
        }

        
        setIsLoggedIn(true)
        toast.success("Account created")
        const accountData ={
            ...formData
        }
        const finalData={
            ...accountData,
            accountType
        }
        console.log("printing data")
        console.log(finalData)
        navigate("/dashboard")

    }
    return (
        <div>
            {/* student instructor tab */}
            <div className="flex bg-gray-100 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                    className={`${accountType === "student" ? "bg-gray-500 text-white" : "bg-transparent"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>Student</button>
                <button
                    className={`${accountType === "instructor" ? "bg-gray-500 text-white": "bg-transparent"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstname and lastName */}
                <div className="flex gap-x-4 justify-between">
                    <label className="w-full">
                        <p className='text-gray-100 leading-[1.375rem]'>
                            First Name <sup className='text-red-700'>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none'
                        />
                    </label>

                    <label className="w-full">
                        <p className='text-gray-100 leading-[1.375rem]'>
                            Last Name <sup className='text-red-700'>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none'
                        />
                    </label>
                </div>

                {/* email  */}
                <label>
                    <p className='text-gray-100 leading-[1.375rem]'>
                        Email <sup className='text-red-700'>*</sup>
                    </p>
                    <input
                        type="email"
                        required
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter your email"
                        value={formData.email}
                        className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none'
                    />
                </label>

                {/* create password and confirm password */}
                <div className="flex gap-x-4">
                    <label className="w-full relative">
                        <p className='text-gray-100 leading-[1.375rem]'>
                            Create Password <sup className='text-red-700'>*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter your password"
                            value={formData.password}
                            className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none'
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-5 top-[37px]'>
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24} />}
                        </span>
                    </label>

                    <label className=" w-full relative">
                        <p className='text-gray-100 leading-[1.375rem]'>
                            Confirm Password <sup className='text-red-700'>*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Confirm your password"
                            value={formData.confirmpassword}
                            className='bg-gray-100 rounded w-full p-[12px] border border-gray-500 outline-none'
                        />
                        <span onClick={() => setshowConfirmPassword((prev) => !prev)} className='absolute right-5 top-[37px]'>
                            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24} />}
                        </span>
                    </label>
                </div>

                <button className=' w-full bg-yellow-400 rounded font-medium text-white px-[12px] py-[8px] mt-4' >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
