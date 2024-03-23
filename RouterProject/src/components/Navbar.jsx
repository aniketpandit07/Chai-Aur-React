import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    return (
        <div className='flex justify-evenly'>
            <div>
                <NavLink to="/"><img src="assets/Logo.svg" alt='fsdd' /></NavLink>
            </div>

            <nav>
                <ul className='flex gap-5'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/" >About</NavLink></li>
                    <li><NavLink to="/" >Contact</NavLink></li>
                </ul>

            </nav>

            {/* login - signup - logout - dashboard */}

            <div className=' flex mr-3 ml-10 gap-4'>
                {!isLoggedIn &&
                    <NavLink to="/login">
                        <button>Login</button>
                    </NavLink>
                }
                {!isLoggedIn &&
                    <NavLink to="/signup">
                        <button>Signup</button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/home">
                        <button onClick={() => {
                            setIsLoggedIn(false)
                            toast.success("logged out")
                        }}>Logout</button>
                    </NavLink>
                }
                {isLoggedIn &&
                    <NavLink to="/dashboard">
                        <button>Dashboard</button>
                    </NavLink>
                }
            </div>

        </div>
    )
}

export default Navbar
