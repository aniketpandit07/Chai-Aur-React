import React from 'react'
// import logo from '././assets/Logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink to="/"><img src="assets/Logo.svg" alt='fsdd' /></NavLink>
        </div>
    )
}

export default Navbar
