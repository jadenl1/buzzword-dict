import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import NavBar from '../components/NavBar'

import '../css/Profile.css'

export default function Profile(){
    
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){

        setError("");

        try{
            // this requires users to refresh after they logout? im not sure why? FIXED! removed await before logout(), not sure if this is safe but ill find out later
            logout();
            navigate("/", {replace: true})
        } catch {
            setError('Failed to log out')
        }
    }
    
    return (
        <>
            <NavBar/>
            <div className='card'>
                <h2>profile</h2>
                <h3>{currentUser.email}</h3>
                <Link to='/update-profile'><button>update profile</button></Link>
                <button onClick={handleLogout}>log out</button>
            </div>
        </>
    )
}
