import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext'

// change to login css
import '../css/SignUp.css'

export default function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/', {replace: true});
        } catch {
            setError('failed to sign in');
        }
        setLoading(false);
    }

    return (
        <>
            <NavBar/>
            
            <div id = 'signup'>
                <div id = 'card'>
                    <h2>log in</h2>
                    {error && <p id = 'error'>{error}</p>}
                    
                    <form onSubmit={handleSubmit} id='form'>
                        <form id='email'>
                            <p>email</p>
                            <input type='email' ref = {emailRef} required/>
                        </form>

                        <form id='password'>
                            <p>password</p>
                            <input type='password' ref = {passwordRef} required/>
                        </form>

                        <button type='submit' disabled={loading}>log in</button>
                    </form>
                </div>

                <p>need an account? <Link to='/signup'>Sign Up</Link></p>

            </div>
            
            <Footer/>
        </>
    )
}