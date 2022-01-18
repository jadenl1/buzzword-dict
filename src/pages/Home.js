import {React, useState} from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../css/Home.css'

import { words } from '../db/words.js';


const Home = () => {

    const [searchWord, setSearchWord] = useState("");
   
    const [word, setWord] = useState("");
    const [pos, setPos] = useState("");
    const [def, setDef] = useState("");

    const [error, setError] = useState("");

    const [filteredData, setFilteredData] = useState([]);

    function getMeaning(userWord) {
        try{
            setError('');

            const index = words.map(object => object.word).indexOf(userWord);
            const wordObj = words[index];        
            setWord(wordObj.word);
            setPos(wordObj.pos);
            setDef(wordObj.definition);
        } catch {
            setError('404 - word not found');
        }
    }

    const handleFilter = (event) => {
        const userSearch = event.target.value;
        const newFilter = words.filter((value) => {
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
                        setSearchWord((e.target.value).toLowerCase());
                    }}
                    onKeyPress={
                        (e) => {
                            if (e.key === "Enter"){
                                try{
                                    setError("");
                                    e.preventDefault();
                                    getMeaning(filteredData[0].word);
                                    setFilteredData([]);
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
                                    <p id = 'data-item' onMouseDown={() => {
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

                            <h4>Definition:</h4>
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
                        <a href = "">
                            trending
                        </a>
                    </Link>
                    <Link to = '/community'>
                        <a href = "">
                            community
                        </a>
                    </Link>
                    <Link to = '/browse'>
                        <a href = "">
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



