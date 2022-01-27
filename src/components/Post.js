import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MdFavorite, MdFlag, MdDelete } from "react-icons/md"
import '../css/Community.css'
import { db } from '../firebase';

const Post = (props) => {

    const { currentUser } = useAuth();

    const [del, setDel] = useState(false);

    const [likeNum, setLikeNum] = useState(props.entry.likes.length);
    const [userLiked, setUserLiked] = useState(false);
 

    useEffect(()=>{
        if(props.entry.userID === currentUser.uid){
            setDel(true);
        }

        if(props.entry.likes.includes(currentUser.uid)){
            setUserLiked(true);
        }
    }, []);

    const saveDelete = () => {
        
        db.collection('posts').doc(props.entry.key).delete();
        window.location.reload();
        
    };

    const saveLike = () => {
        
        const likesList = props.entry.likes;

        if(likesList.includes(currentUser.uid)){
            //dislike
            const userIndex = likesList.indexOf(currentUser.uid);
            likesList.splice(userIndex, 1);
            setUserLiked(false);

        }else{
            //like
            likesList.push(currentUser.uid);
            setUserLiked(true);
        }

        //then pushes the new like data to firebase
        db.collection('posts').doc(props.entry.key).update({
            likes: likesList
        })

        //then updates the like number for some reason for user
        setLikeNum((props.entry.likes.length) + 0);

    };

    return(
        <div id = 'post'>

            {del && <MdDelete id = "delete" onClick = {() => {saveDelete()}}/>}

            <h2 key={props.entry.key}>{props.entry.word}</h2>
            <p id = 'pos'>{props.entry.pos}</p>

            <h4>definition &#8628;</h4>
            <p id = 'definition'>{props.entry.definition}</p> 

            <div id = 'post-footer'>
               
                <div id = 'post-btn'>
                    <MdFlag id='flag-icon'/>
                    
                    {!userLiked && (<MdFavorite id='not-liked-icon' onClick={() => {saveLike()}}/>)}
                    {userLiked && (<MdFavorite id='liked-icon' onClick={() => {saveLike()}}/>)}

                    <p id = 'num-likes' className='noselect'>{likeNum}</p>
                </div>

                <p id = 'username' className='noselect'>{props.entry.username}</p>
            </div>

        </div>
    );
};

export default Post;
