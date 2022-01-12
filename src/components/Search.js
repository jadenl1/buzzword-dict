import React from 'react'
import '../images/search-icon.png'

const Search = () => {

    var search_input = "";

    const userSearchClick = () => {
        search_input = document.getElementById('search-bar').value;
        alert(search_input);
    }

    const userSearchEnter = (e) => {
        if(e.key === 'Enter'){
            search_input = document.getElementById('search-bar').value;
            alert(search_input);
        }
    }

    return (
        <div id = 'body'>
            <h1>
                OFFICIAL DICTIONARY
            </h1>
            {/* <img src="" alt="verified" /> */}
            <input type = 'text' id = 'search-bar' placeholder='Search all buzzwords...' onKeyDown={userSearchEnter} />
            {/* <input type="image" src={require('../images/search-icon.png')} id = 'search-icon' onClick={userSearchClick}/> */}
        </div>
    )
}

export default Search
