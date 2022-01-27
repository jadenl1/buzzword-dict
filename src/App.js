import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Trending from './pages/Trending';
import Browse from './pages/Browse';

import Community from './pages/Community';
import NewPost from './pages/NewPost';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';

import { AuthProvider } from './contexts/AuthContext';
import Post from './components/Post';

const App = () => {

    return (
        <Routes>
            
            <Route exact path='/' element={
                <AuthProvider>
                    <Home/>
                </AuthProvider>
            }/>
            
            <Route exact path='/signup' element={
                <AuthProvider>
                    <SignUp/>
                </AuthProvider>
            }/>
            
            <Route exact path='/login' element={
                <AuthProvider>
                    <Login/>
                </AuthProvider>
            }/>

            <Route exact path='/forgot-password' element={
                <AuthProvider>
                    <ForgotPassword/>
                </AuthProvider>
            }/>

            <Route exact path='/profile' element={
                <AuthProvider>
                    <Profile/>
                </AuthProvider>
            }/>

            <Route path='/update-profile' element={
                <AuthProvider>
                    <UpdateProfile/>
                </AuthProvider>
            }/>

            <Route exact path='/about' element={
                <AuthProvider>
                    <About/>
                </AuthProvider>
            }/>
            
            <Route exact path='/contact' element={
                <AuthProvider>
                    <Contact/>
                </AuthProvider>
            }/>

            <Route exact path='/trending' element={
                <AuthProvider>
                    <Trending/>
                </AuthProvider>
            }/>

            <Route exact path='/community' element={
                <AuthProvider>
                    <Community/>
                </AuthProvider>
            }/>

            <Route exact path='/new-post' element={
                <AuthProvider>
                    <NewPost/>
                </AuthProvider>
            }/>

            <Route exact path='/browse' element={
                <AuthProvider>
                    <Browse/>
                </AuthProvider>
            }/>
        
        </Routes>
    )
}

export default App
