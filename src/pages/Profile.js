import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import '../css/Profile.css'

export default function Profile(){
    
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        
        try{
            setError("");
            await logout();

            // this requires users to refresh after they logout? im not sure why
            navigate("/", {replace: true});
        } catch {
            setError('Failed to log out')
        }
    }
    
    return (
        <div className='card'>
            <h2>profile</h2>
            <h3>{currentUser.email}</h3>
            <Link to='update-profile'><button>update profile</button></Link>
            {error && <p id = 'error'>{error}</p>}
            <button onClick={handleLogout}>log out</button>
        </div>
    )
}
