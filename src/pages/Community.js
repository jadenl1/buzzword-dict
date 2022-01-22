import { React, useState, useRef } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { db } from '../firebase'

import { orderBy } from 'firebase/compat/firestore'

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import '../css/Community.css'

const Community = () => {
    
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
        .collection('posts')
        .orderBy('date', "desc")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
        });

        return () => subscriber();
    }, []);


    //setting all hooks up
    const [word, setWord] = useState("");
    const [pos, setPos] = useState("");
    const [def, setDef] = useState("");
    const [likes, setLikes] = useState("");
    const [acc, setAcc] = useState("");

    const [filteredData, setFilteredData] = useState([]);

    //takes in a word, then searches dictionary by word and finds the relative part of speech & definition
    function getMeaning(userWord) {
        try{
            setError('');
            const index = posts.map(object => object.word).indexOf(userWord);
            const wordObj = posts[index];        
            setWord(wordObj.word);
            setPos(wordObj.pos);
            setDef(wordObj.definition);
            setLikes(wordObj.numLikes);
            setAcc(wordObj.username)
        } catch {
            setError('404 - word not found');
        }
    }

    //everytime the user updates their search, the suggestions list is updated
    const handleFilter = (event) => {
        const userSearch = event.target.value;
        const newFilter = posts.filter((value) => {
            return value.word.toLowerCase().includes(userSearch.toLowerCase());
        })
        if(userSearch === ""){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }
    
    return (
        <>
            {error && <div id = 'error-container'><p id = 'error' onClick={()=>{setError("")}}>{error}</p></div>}

            <NavBar/>

            <h1 id = 'title'>COMMUNITY&#8628;</h1>
            
            <div id = "community-body">

                <h1 id = 'search-label'>
                    SEARCH COMMUNITY DICTIONARY
                </h1>

                {/* SEARCH FUNCTIONALITY */}

                <input type = 'text' id = 'search-bar' autocomplete="off" placeholder='Search community buzzwords...'
                    onChange={(e) => {
                        setError("");
                        handleFilter(e);
                    }}
                    onKeyPress={
                        (e) => {
                            if (e.key === "Enter"){
                                try{
                                    e.preventDefault();
                                    getMeaning(filteredData[0].word);
                                    setFilteredData([]);
                                    setError("");
                                } catch {
                                    setError('404 - word not found');
                                }
                            }
                        }
                    }
                />

                {filteredData.length != 0 && (
                    <div id = 'words-container'>
                        <div className='words-list'>
                            {filteredData.slice(0, 7).map((value, key) => {
                                return( 
                                    <p key = {key} id = 'data-item' onMouseDown={() => {
                                        getMeaning(value.word);
                                        setFilteredData([]);
                                    }}>
                                        {value.word}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                )}

                {word && (
                    <div id = "result-container">
                        <div className="community-showResults">
                            <h2>
                                {word}{" "}
                            </h2>
                        
                            <p id = 'pos'>{pos}</p>

                            <h4>definition &#8628;</h4>
                            <p>{def}</p>
                            <div id="post-footer">
                                <p id = 'num-likes'>{likes} likes</p>
                                <p id = 'username'>{acc}</p>
                            </div>
                        </div>
                    </div>
                    )
                }

                <div id='posts'>
                    <div id="posts-top">
                        <h2 id="sub-title">this week&#8628;</h2>
                        <Link to='/new-post' id='new-post'> + New Definition</Link>
                    </div>
                        {posts.length > 0 ? (
                            posts.slice(0,10).map((post) => {
                                return(
                                    <div id = 'post'>
                                        
                                        <h2 key={post.key}>{post.word}</h2>
                                        <p id = 'pos'>{post.pos}</p>

                                        <h4>definition &#8628;</h4>
                                        <p id = 'definition'>{post.definition}</p> 

                                        <div id = 'post-footer'>
                                            <p id = 'num-likes'>{post.numLikes} likes</p>
                                            <p id = 'username'>{post.username}</p>
                                        </div>
                                    
                                    </div>
                                );
                            })
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

            <Footer/>
        </>
    )
}

export default Community
