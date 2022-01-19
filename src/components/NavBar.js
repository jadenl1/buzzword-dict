import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import { MdAccountCircle } from "react-icons/md"

import '../css/Contact.css'
import '../css/NavBar.css'

const NavBar = () => {


    let user = useAuth().currentUser;

    const [popup, setPopup] = useState(false);

    return (
        <>
            {popup && (
                    <>  <div id = 'center-pop'>
                            <div id = 'popup'>
                                    <h1>Contact</h1>
                                    <p>Got a question? Email us at buzzdict@gmal.com</p>
                                    <h4>Our Team &#8628;</h4>
                                    <p>Jaden Leonard - Front End: jleonardSTEM2021@gmail.com</p>
                                    <p>Rohan Bhatt - Back End: rohanbhattcs@gmail.com</p>
                                    <p>Aaryan Jadhav - API/Database: aaryanjadhavo1@gmail.com</p>
                            </div>
                        </div>
                        <div id = 'overlay' onClick={()=>{setPopup(false)}}/>
                    </>
            )}
            <header>


                <Link to = '/'>
                    <img src = {require('../images/logo.png')} alt = 'logo'/>
                </Link>
                <div id = 'nav-pages'>
                    <a onClick={()=>{setPopup(true)}}>contact</a>
                    <Link to='/about'>about</Link>
                    {user && <Link to='/profile'><MdAccountCircle id='profile'/></Link>}
                    {!user && <Link to='/login'>log-in</Link>}
                </div>
            </header>
        </>
    )
}

export default NavBar
