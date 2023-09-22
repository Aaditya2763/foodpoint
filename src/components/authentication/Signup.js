import React from 'react'
import classes from './Auth.module.css'
import { PiUserCircleThin } from 'react-icons/pi'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
const Signup = () => {
    const usernameChangeHandler = () => {

    }
    return (
        <section className={classes.container}>
            <div className={classes.SignupBox}>
                <div className={classes.signupheading}>
                    <span><PiUserCircleThin style={{ fontSize: '3rem', marginTop: 10, color: '#7367F0' }} />
                    </span> <span>User Singup</span>
                </div>
                <div className={classes.signupOtions}>
                    <div className={classes.signupBtn}><FcGoogle style={{ fontSize: 30 }} />Google</div>
                    <div className={classes.signupBtn}><IoLogoFacebook style={{ fontSize: 30, color: 'blue' }} />Facebook</div>
                </div>
                <form className={classes.credentialBox}>
                    <div className={classes.inputFields}>
                        <span className={classes.inputtitle}>Username</span>
                        <input
                            className={classes.inputBox}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className={classes.inputFields}>
                        <span className={classes.inputtitle}>email</span>
                        <input
                            className={classes.inputBox}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className={classes.inputFields}>
                        <span className={classes.inputtitle}>Password</span>
                        <input
                            className={classes.inputBox}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className={classes.inputFields}>
                        <span className={classes.inputtitle}>Phone number</span>
                        <input
                            className={classes.inputBox}
                            onChange={usernameChangeHandler}
                        />
                        <button className={classes.submitBtn}>Signup now</button>
                    </div>
                </ form>
               
                    <p style={{ color: 'white',textAlign:'center'  }}>Already have an account ? <span  style={{ color: 'blue' }} > Login now</span></p>

               
            </div>
        </section>
    )
}

export default Signup









