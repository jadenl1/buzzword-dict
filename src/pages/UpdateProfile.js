import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { Link, useNavigate } from 'react-router-dom';

import { AuthProvider, useAuth } from '../contexts/AuthContext'

import '../css/SignUp.css'

export default function UpdateProfile(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { currentUser, updatePassword, updateEmail } = useAuth();
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('passwords do not match');
        }

        const promises = []
        setError("");
        setLoading(true);
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            navigate('/profile', {replace: true})
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <>
            <NavBar/>
            
            <div id = 'signup'>
                <div id = 'card'>
                    <h2>update profile</h2>
                    {error && <p id = 'error'>{error}</p>}
                    
                    <form onSubmit={handleSubmit} id='form'>
                        <form id='email'>
                            <p>email</p>
                            <input type='email' ref = {emailRef} required defaultValue={currentUser.email}/>
                        </form>

                        <form id='password'>
                            <p>password</p>
                            <input type='password' ref = {passwordRef} placeholder='leave blank to keep the same'/>
                        </form>

                        <form id='password-confirm'>
                            <p>confirm password</p>
                            <input type='password' ref = {passwordConfirmRef} placeholder='leave blank to keep the same'/>
                        </form>

                        <button type='submit' disabled={loading}>update</button>
                    </form>
                </div>

                <p><Link to='/profile'>Cancel</Link></p>

            </div>
            
            <Footer/>
        </>
    )
}
