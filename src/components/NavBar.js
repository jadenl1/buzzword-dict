import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import { MdAccountCircle } from "react-icons/md"

const NavBar = () => {


    let user = useAuth().currentUser;


    return (
        <header>
            <Link to = '/'>
                <img src = {require('../images/logo.png')} alt = 'logo'/>
            </Link>
            <div id = 'nav-pages'>
                <Link to='/contact'>contact</Link>
                <Link to='/about'>about</Link>
                {user && <Link to='/profile'><MdAccountCircle id='profile'/></Link>}
                {!user && <Link to='/login'>log-in</Link>}
            </div>
        </header>
    )
}

export default NavBar
