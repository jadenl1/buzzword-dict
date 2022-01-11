import React from 'react'

const NavBar = () => {
    return (
        <header>
            <img src = {require('../images/logo.png')} alt = 'logo'/>
            <div id = 'nav-pages'>
                <a href = ''>contact</a>
                <a href = ''>about</a>
                <a href = ''>sign-in</a>
            </div>
        </header>
    )
}

export default NavBar
