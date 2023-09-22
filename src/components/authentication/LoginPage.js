import React, { useEffect, useState } from 'react'
import classes from './Auth.module.css'
import {PiUserCircleThin} from 'react-icons/pi'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import {FcGoogle} from 'react-icons/fc'
import {IoLogoFacebook} from 'react-icons/io'
const LoginPage = () => {


  const[enteredEmail,setenteredEmail]=useState('')
  const[enteredPassword,setenteredPassword]=useState('')
  const[hasError,sethasError]=useState(true);
  const[isTouched,setisTouched]=useState(false)

    const emailChangeHandler=(e)=>{
      
    setenteredEmail(e.target.value)
    // setisTouched(true)
    }
    const passwordChangeHandler=(e)=>{
      
      setenteredPassword(e.target.value)
      // setisTouched(true)
      }
    const emailBlurHandler=()=>{
      setisTouched(true)
    }
    const PasswordBlurHandler=()=>{
      setisTouched(true);
     
    }
    const usernameChangeHandler=(e)=>{
      // enteredEmail=e.target.value;
     
     }   
    const validEmail=(enteredEmail)=>{
      if(enteredEmail.length<=0){
        return false;
      }
      return(enteredEmail.includes('@') &&enteredEmail.includes('.com'))
    }
    const validPassword=(enteredPassword)=>{
      return(enteredPassword.length<5? false:true)
    }

    let validForm = false;
  if (validEmail(enteredEmail) && validPassword(enteredPassword)) { // Call the functions
    validForm = true;
  }

  return (
    <section className={classes.container}>
    <div  className={classes.SignupBox}>
    <div className={classes.signupheading}><span><PiUserCircleThin style={{fontSize:'3rem',marginTop:10,color: '#7367F0'}}/></span> <span>User Login</span></div>
    <form className={classes.credentialBox}>
       
            <div className={classes.inputFields}>
            <span className={classes.inputtitle}>email</span>
            <input
            placeholder='Email'
            className={classes.inputBox}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            />
              { isTouched && !validEmail(enteredEmail) && <p style={{color:'red'}}>Enter valid email</p>}
            </div>

            <div className={classes.inputFields}>
            <span className={classes.inputtitle}>Password</span>
            <input
            className={classes.inputBox}
            placeholder='Password'
            onChange={passwordChangeHandler}
            onBlur={PasswordBlurHandler}
            />
            { isTouched && !validPassword(enteredPassword) && <p style={{color:'red'}}>password length can't be less than 5</p>}
            </div>
           
            <button className={classes.submitBtn} disabled={!validForm}>Login</button>
            <p  style={{color:'white'}}>Or</p>
              
    <div className={classes.signupOtions}>
<button type='button' className={classes.signupBtn}  disabled ><FcGoogle style={{fontSize:30}} />Google</button>
<button type='button' className={classes.signupBtn} disabled><IoLogoFacebook  style={{fontSize:30,color:'blue'}}/>Facebook</button>
    </div>
            
    </form>
    <div>

    <p style={{color:'white',marginTop:40,textAlign:'center'}}>New user ? <span style={{color:'skyblue'}}> Signup now</span></p>
    </div>
    </div>
    </section>
  )
}

export default LoginPage