import React from 'react'
import Template from '../components/Template'
import image from '../asset/signup.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning code with studynotion for free"
      desc1="Build skill for today,tomorrow"
      desc2="Education to futureproof your career"
      formtype="signup"
      image={image}
      setIsLoggedIn={setIsLoggedIn} />
  )
}

export default SignUp
