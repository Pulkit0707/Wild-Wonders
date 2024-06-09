import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from './firebase'

function Login() {
  const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
          if(auth){
            history('/')
          }
        })
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //console.log(auth)
          if(auth){
            history('/')
          }
        })
        .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <Link to='/'>
      <img className='login_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbBD-heBk8o6fTu4xNWr-HpO820005f6qWg&s'/>
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
        </form>
        <p>By signing in you take the first step towards helping ANIMALS</p>
        <button onClick={register} type='submit' className='login_registerButton'>Join the Alveus Family</button>
      </div>
    </div>
  )
}

export default Login
