import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to = '/'>
                <img src = {require('../images/logo.png')} alt = 'logo'/>
            </Link>
            <div id = 'nav-pages'>
                <a href = ''><Link to='/contact'>contact</Link></a>
                <a href = ''><Link to='/about'>about</Link></a>
                <a href = ''><Link to='/signup'>sign-up</Link></a>
            </div>
        </header>
    )
}

export default NavBar
