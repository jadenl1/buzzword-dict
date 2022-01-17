import {React, useState} from 'react'

import NavBar from '../components/NavBar';
import PageList from '../components/PageList';
import Footer from '../components/Footer';

import{ getFirestore, collection, getDocs } from 'firebase/firestore';

import '../css/Home.css'

import Axios from "axios";


const Home = () => {

    // const db = getFirestore()
    // const colRef = collection(db, 'words')
    // getDocs(colRef)
    // .then((snapshot) => {
    //     let words = []
    //     snapshot.docs.forEach((doc) => {
    //         words.push({ ...doc.data(), id: doc.id })
    //         })
    //     console.log(words) bruh this is me tyei
    //     })

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");
   
    function getMeaning() {         
        Axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
        ).then((response) => {
            setData(response.data[0]);
        })
    }

    return (
        <>
            <NavBar/>
            
            <div id = 'body'>
                <h1>
                    OFFICIAL DICTIONARY
                </h1>

                <input type = 'text' id = 'search-bar' placeholder='Search all buzzwords...'
                    onChange={(e) => {
                        setSearchWord((e.target.value).toLowerCase());
                    }}
                    onKeyPress={
                        (e) => {
                            if (e.key === "Enter"){
                                e.preventDefault();
                                getMeaning();
                            }
                        }
                    }
                />

                {data && (
                    <div id = "result-container">
                        <div className="showResults">
                        <h2>
                            {data.word}{" "}
                        </h2>
                    
                        <p id = 'pos'>{data.meanings[0].partOfSpeech}</p>

                        <h4>Definition:</h4>

                        <p>{data.meanings[0].definitions[0].definition}</p>

                        <h4>Example:</h4>
                        
                        <p>{data.meanings[0].definitions[0].example}</p>

                        </div>
                    </div>
                    )
                }


            </div>

            <PageList/>
            <Footer/>
        </>
    );
}

export default Home



