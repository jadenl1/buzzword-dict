import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext'

import '../css/SignUp.css'

export default function ForgotPassword() {
    
    const emailRef = useRef();

    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setMessage('')
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('failed to reset password');
        }
        setLoading(false);
    }

    
    return (
        <>
            <NavBar/>
            
            <div id = 'signup'>
                <div id = 'card'>
                    <h2>password reset</h2>
                    {error && <p id = 'error'>{error}</p>}
                    {message && <p id = 'message'>{message}</p>}
                    <form onSubmit={handleSubmit} id='form'>
                        <form id='email'>
                            <p>email</p>
                            <input type='email' ref = {emailRef} required/>
                        </form>

                        <button type='submit' disabled={loading}>reset password</button>
                    </form>
                </div>

                <p><Link to='/login'>Back to Login</Link></p>

            </div>
            
            <Footer/>
        </>
    )
}
