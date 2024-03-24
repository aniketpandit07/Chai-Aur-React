import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import image from "../asset/signup.png"


const SignupForm = ({setIsLoggedIn}) => {

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
            navigate("/dashboard")
        
    }
    return (
        <div>
            {/* student instructor tab */}
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstname and lastName */}
                <div>
                    <label>
                        <p>
                            First Name <sup>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>
                            Last Name <sup>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastName}
                        />
                    </label>
                </div>

                {/* email  */}
                <label>
                    <p>
                        Email <sup>*</sup>
                    </p>
                    <input
                        type="email"
                        required
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter your email"
                        value={formData.email}
                    />
                </label>

                {/* create password and confirm password */}
                <div>
                    <label>
                        <p>
                            Create Password <sup>*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter your password"
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>

                    <label>
                        <p>
                            Confirm Password <sup>*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Confirm your password"
                            value={formData.confirmpassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
