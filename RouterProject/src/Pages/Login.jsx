import React from 'react'
import Template from '../components/Template'
import image from '../asset/login.png'

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skill for today,tomorrow"
      desc2="Education to futureproof your career"
      formtype="login"
      image={image}
      setIsLoggedIn={setIsLoggedIn} />
  )
}

export default Login
