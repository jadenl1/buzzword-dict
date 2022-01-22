import { React, useState, useRef } from 'react'
import { db } from '../firebase'

import { useAuth } from '../contexts/AuthContext'

import { Link, useNavigate } from 'react-router-dom'


import Footer from '../components/Footer';

import '../css/NewPost.css'
import NavBar from '../components/NavBar';

const NewPost = () => {

    const { currentUser } = useAuth();
    let user = useAuth().currentUser;

    const navigate = useNavigate();

    const wordRef = useRef();
    const posRef = useRef();
    const defRef = useRef();

    const [error, setError] = useState("");

    const saveAnswer = (event) => {
        event.preventDefault();

        const username = "@" + (currentUser.email).slice(0, (currentUser.email).indexOf("@"))

        try{
            setError("");
            
            db.collection("posts").add({
                word: wordRef.current.value,
                pos: posRef.current.value,
                definition: defRef.current.value,
                username: username,
                userID: currentUser.uid,
                numLikes: 0,
                numReports: 0,
                date: new Date().toUTCString()
            });

            navigate('/', {replace: true});
        } catch {
            setError('Post Unsuccessful')
        }
    };

    return(
        <>
            <NavBar/>

            {error && <div id = 'error-container'><p id = 'error' onClick={()=>{setError("")}}>{error}</p></div>}

            <h1 id = 'title-2'>NEW WORD&#8628;</h1>
            <div id="entry-center">
                <form id="entry-container" onSubmit={saveAnswer}>
                    <p id="init-text">
                        please review our <a>content guidelines</a> before writing your definition.
                    </p>

                    <p id="rules-1">
                        never post hate speech or personal information of any kind. users that violate our guidelines will be permanently banned.
                    </p>

                    <h2 id="word-title">
                        word &#8628;
                    </h2>
                    <input id='word' autoComplete='off' placeholder='ex. keyboard' ref={wordRef} maxLength={50} required/>

                    <h2 id="pos-title">
                        part of speech &#8628;
                    </h2>
                    <input id='pos' autoComplete='off' placeholder='ex. noun' ref={posRef} maxLength={10} required/>

                    <h2 id="def-title">
                        definition &#8628;
                    </h2>
                    <textarea id='definition' autoComplete='off' ref={defRef} placeholder='ex. the device i am using right now to type this...' rows="4" cols="50" maxLength={200} required/>

                    <p id="rules-2">
                        definitions are subject to our <a>terms of service</a> and <a>privacy policy</a>
                    </p>

                    <div id="submit-center">
                        <button type='submit' id='new-word-submit'>submit</button>
                    </div>
                </form>
                <Link to='/community' id='cancel'>cancel</Link>
            </div>

            <Footer/>
        </>
    );
};

export default NewPost;
