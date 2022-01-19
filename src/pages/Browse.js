import { React, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { db } from '../firebase';

import '../css/Browse.css'

const Browse = () => {
    
    // fetching firestore database
    const [posts, setPosts] = useState([]);
    const [letterSearchList, setLetterSearchList] = useState([]);
    const [hoverLetter, setHoverLetter] = useState('A');

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

    function getLetterList(letter){
        var filteredList = []
        posts.forEach((post)=>{
            if (post.word[0].toLowerCase() == letter.toLowerCase()){
                console.log(post.word)
                filteredList.push(post.word);
            }
        })
        setLetterSearchList(filteredList.sort());
    }
    
    return (
        <>
            <NavBar/>
            <h1 id = 'title'>BROWSE&#8628;</h1>
            <div id = 'browse-body'>
                <div id = 'letter-buttons'>
                    <p onMouseOver={()=>{setHoverLetter('A')}} onClick={()=>{getLetterList('A')}}>A</p>
                    <p onMouseOver={()=>{setHoverLetter('B')}} onClick={()=>{getLetterList('B')}}>B</p>
                    <p onMouseOver={()=>{setHoverLetter('C')}} onClick={()=>{getLetterList('C')}}>C</p>
                    <p onMouseOver={()=>{setHoverLetter('D')}} onClick={()=>{getLetterList('D')}}>D</p>
                    <p onMouseOver={()=>{setHoverLetter('E')}} onClick={()=>{getLetterList('E')}}>E</p>
                    <p onMouseOver={()=>{setHoverLetter('F')}} onClick={()=>{getLetterList('F')}}>F</p>
                    <p onMouseOver={()=>{setHoverLetter('G')}} onClick={()=>{getLetterList('G')}}>G</p>
                    <p onMouseOver={()=>{setHoverLetter('H')}} onClick={()=>{getLetterList('H')}}>H</p>
                    <p onMouseOver={()=>{setHoverLetter('I')}} onClick={()=>{getLetterList('I')}}>I</p>
                    <p onMouseOver={()=>{setHoverLetter('J')}} onClick={()=>{getLetterList('J')}}>J</p>
                    <p onMouseOver={()=>{setHoverLetter('K')}} onClick={()=>{getLetterList('K')}}>K</p>
                    <p onMouseOver={()=>{setHoverLetter('L')}} onClick={()=>{getLetterList('L')}}>L</p>
                    <p onMouseOver={()=>{setHoverLetter('M')}} onClick={()=>{getLetterList('M')}}>M</p>
                    <p onMouseOver={()=>{setHoverLetter('N')}} onClick={()=>{getLetterList('N')}}>N</p>
                    <p onMouseOver={()=>{setHoverLetter('O')}} onClick={()=>{getLetterList('O')}}>O</p>
                    <p onMouseOver={()=>{setHoverLetter('P')}} onClick={()=>{getLetterList('P')}}>P</p>
                    <p onMouseOver={()=>{setHoverLetter('Q')}} onClick={()=>{getLetterList('Q')}}>Q</p>
                    <p onMouseOver={()=>{setHoverLetter('R')}} onClick={()=>{getLetterList('R')}}>R</p>
                    <p onMouseOver={()=>{setHoverLetter('S')}} onClick={()=>{getLetterList('S')}}>S</p>
                    <p onMouseOver={()=>{setHoverLetter('T')}} onClick={()=>{getLetterList('T')}}>T</p>
                    <p onMouseOver={()=>{setHoverLetter('U')}} onClick={()=>{getLetterList('U')}}>U</p>
                    <p onMouseOver={()=>{setHoverLetter('V')}} onClick={()=>{getLetterList('V')}}>V</p>
                    <p onMouseOver={()=>{setHoverLetter('W')}} onClick={()=>{getLetterList('W')}}>W</p>
                    <p onMouseOver={()=>{setHoverLetter('X')}} onClick={()=>{getLetterList('X')}}>X</p>
                    <p onMouseOver={()=>{setHoverLetter('Y')}} onClick={()=>{getLetterList('Y')}}>Y</p>
                    <p onMouseOver={()=>{setHoverLetter('Z')}} onClick={()=>{getLetterList('Z')}}>Z</p>
                </div>
            </div>
            <div id = 'results'>
                {hoverLetter && <h1 id = 'hover-letter'>{hoverLetter}</h1>}
                <p id = 'word-list-title'>complete word list &#8628;</p>
                {letterSearchList.length > 0 ? (
                        letterSearchList.map((word) => <p>{word}</p>)
                    ) : (
                        <p>404: no words found</p>
                        // posts.map((word) => <p>{word.word}</p> )
                    )
                }
            </div>

            <Footer/>

        </>
    )
}

export default Browse
