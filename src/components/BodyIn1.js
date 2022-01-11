import React from 'react'

const BodyIn1 = () => {
    return (
        <div id = 'body'>
            <h1>
                OFFICIAL DICTIONARY
            </h1>
            {/* <img src="" alt="verified" /> */}
            <input type = 'text' id = 'search-bar' placeholder='Search all buzzwords...'/>
            <input type="image" src={require('../images/search-icon.png')} id = 'search-icon'/>
        </div>
    )
}

export default BodyIn1
