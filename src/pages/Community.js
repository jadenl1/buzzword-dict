import React from 'react'
import NavBar from '../components/NavBar'

const Community = () => {
    return (
        <>
            <NavBar/>
            
            <div id='forum'>
                <h1>Community</h1>
                
                <h2>Post Text:</h2>
                <input type="text" />
                <h2>Username</h2>
                <input type="text" />
                <br/>
                <br/>
                <button>submit</button>
            </div>
        </>
    )
}

export default Community
