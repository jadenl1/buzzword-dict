import { React, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../css/Home.css'

import { db } from '../firebase';


const Home = () => {

    // fetching firestore database
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
        .collection('words')
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

    const [error, setError] = useState("");

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

            <NavBar/>
            
            <div id = 'body'>
                
                {error && <div id = 'error-container'><p id = 'error'>{error}</p></div>}

                <h1>
                    OFFICIAL DICTIONARY
                </h1>


                <input type = 'text' id = 'search-bar' autocomplete="off" placeholder='Search all buzzwords...'
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
                        <div className="showResults">
                            <h2>
                                {word}{" "}
                            </h2>
                        
                            <p id = 'pos'>{pos}</p>

                            <h4>definition &#8628;</h4>
                            <p>{def}</p>
                        </div>
                    </div>
                    )
                }


            </div>

            <div id = 'body2'>
                <p id = 'divider'>
                    --------- or ---------
                </p>
                <div id = 'pages'>
                    <Link to = '/trending'>
                        <a>
                            trending
                        </a>
                    </Link>
                    <Link to = '/community'>
                        <a>
                            community
                        </a>
                    </Link>
                    <Link to = '/browse'>
                        <a>
                            browse
                        </a>
                    </Link>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default Home



