import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function App(){
    return(
        <html>
            
            <Head/>
            
            <NavBar/>

            <Body/>

            <Body2/>

            <Footer/>

        </html>
    );
}

const Head = () => {
    return (
        <head>
            {/* Importing google fonts - 'Roboto Mono' */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        </head>
    );
}

const NavBar = () => {
    return(
        <header>
            <img src = {require('./images/logo.png')} alt = 'logo'/>
            <div id = 'nav-pages'>
                <a href = ''>contact</a>
                <a href = ''>about</a>
                <a href = ''>sign-in</a>
            </div>
        </header>
    );
}

const Body = () => {
    return(
        <div id = 'body'>
            <h1>
                OFFICIAL DICTIONARY
            </h1>
            {/* <img src="" alt="verified" /> */}
            <input type = 'text' id = 'search-bar' placeholder='Search all buzzwords...'/>
            <input type="image" src={require('./images/search-icon.png')} id = 'search-icon'/>
        </div>
    );
}

const Body2 = () => {
    return(
        <div id = 'body2'>
            <p id = 'divider'>
                --------- or ---------
            </p>
            <div id = 'pages'>
                <a href = "">trending</a>
                <a href = "">community</a>
                <a href = "">browse</a>
            </div>
        </div>
    );
}

const Footer = () => {
    return(
        <footer>
            <div id='links-container'>
                <div id = 'links'>
                    <a href = ''>GitHub</a>
                    <a href = ''>Discord</a>
                    <a href = ''>Twitter</a>
                    <a href = ''>Terms</a>
                </div>
            </div>
            <p>
                v1.0.1
            </p>
        </footer>
    );
}


ReactDom.render(<App/>, document.getElementById('root'));

