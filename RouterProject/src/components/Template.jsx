import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frame from '../asset/frame.png'
import image from '../asset/login.png'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                {/* title */}
                <h1>{title}</h1>

                {/* description */}
                <p>
                    <span> {desc1}</span>
                    <span> {desc2}</span>
                </p>

                {/* form */}
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                {/* or */}
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                {/* button */}
                <button><p>Signup with Google </p></button>
            </div>

            {/* images */}

            <div>
                <img src={frame} alt='frame' width={558} height={504} loading='lazy' />
                <img src={image} alt='student' width={558} height={504} loading='lazy' />
            </div>


        </div>
    )
}

export default Template
