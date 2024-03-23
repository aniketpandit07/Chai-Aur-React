import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
   <Template 
   title="Wlcome Back"
   desc1="Build skill for today,tomorrow"
   desc2="Education to futureproof your career"
   formtype="login"
   setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Login
