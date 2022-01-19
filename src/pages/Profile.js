import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import '../css/Profile.css'

export default function Profile(){
    
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const atPos = (currentUser.email).indexOf("@");
    const userName = "@" + (currentUser.email).slice(0, atPos);
    const emailExt = (currentUser.email).slice(atPos, currentUser.length);

    async function handleLogout(){

        setError("");

        try{
            logout();
            navigate("/", {replace: true})
        } catch {
            setError('Failed to log out')
        }
    }
    
    return (
        <>
            <NavBar/>
            <div id='profile-head'>
                <p>MY PROFILE</p>
                <div id = 'full-name'>
                    <p id = 'name'>{userName}</p>
                    <p id = 'email-ext'>{emailExt}</p>
                </div>
                <div id = 'buttons'>
                    <Link to='/update-profile'><button>update profile</button></Link>
                    <a><button onClick={handleLogout}>log out</button></a>
                 </div>
            </div>
            <Footer/>
        </>
    )
}
