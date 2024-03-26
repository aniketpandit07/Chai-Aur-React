import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Logo from "../asset/Logo.svg"

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <div>
                <NavLink to="/"><img src={Logo} alt='fsdd' /></NavLink>
            </div>

            <nav>
                <ul className='flex gap-5 text-white '>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/" >About</NavLink></li>
                    <li><NavLink to="/" >Contact</NavLink></li>
                </ul>

            </nav>

            {/* login - signup - logout - dashboard */}

            <div className=' flex item-center gap-5  '>
                {!isLoggedIn &&
                    <NavLink to="/login">
                        <button className='bg-white text-black py-[8px] px-[12px] rounded-md border border-slate-500'>Login</button>
                    </NavLink>
                }
                {!isLoggedIn &&
                    <NavLink to="/signup">
                        <button className='bg-white text-black py-[8px] px-[12px] rounded-md border border-slate-500'>Signup</button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/home">
                        <button onClick={() => {
                            setIsLoggedIn(false)
                            toast.success("logged out")
                        }} className='bg-white text-black py-[8px] px-[12px] rounded-md border border-slate-500'>Logout</button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/dashboard">
                        <button className='bg-white text-black py-[8px] px-[12px] rounded-md border border-slate-500'>Dashboard</button>
                    </NavLink>
                }
            </div>

        </div>
    )
}

export default Navbar
