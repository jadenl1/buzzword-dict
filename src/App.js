import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Trending from './pages/Trending';
import Community from './pages/Community';
import Browse from './pages/Browse';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
// import PrivateRoute from './pages/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
        <Routes>
            
            <Route path='/' element={
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

            <Route exact path='/profile' element={
                <AuthProvider>
                    <Profile/>
                </AuthProvider>
            }/>
            
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>

            <Route exact path='/trending' element={<Trending/>}/>
            <Route exact path='/community' element={<Community/>}/>
            <Route exact path='/browse' element={<Browse/>}/>

        </Routes>
    )
}

export default App
