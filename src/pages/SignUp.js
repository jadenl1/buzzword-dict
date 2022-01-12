import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { AuthProvider, useAuth } from '../contexts/AuthContext'

import '../css/SignUp.css'

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signup } = useAuth()

    function handleSubmit(e){
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        // errors out here please fix
        <AuthProvider>
            <NavBar/>
            
            <div id = 'signup'>
                <div id = 'card'>
                    <h2>sign up</h2>
                    
                    <form id='email'>
                        <p>email</p>
                        <input type='email' ref = {emailRef} required/>
                    </form>

                    <form id='password'>
                        <p>password</p>
                        <input type='password' ref = {passwordRef} required/>
                    </form>

                    <form id='password-confirm'>
                        <p>confirm password</p>
                        <input type='password' ref = {passwordConfirmRef} required/>
                    </form>

                    <button type='submit'>Sign Up</button>

                </div>

                <p>already have an account? Log In</p>

            </div>
            
            <Footer/>
        </AuthProvider>
    )
}

export default SignUp;
