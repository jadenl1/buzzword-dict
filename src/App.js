import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import Trending from './pages/Trending';
import Community from './pages/Community';
import Browse from './pages/Browse';

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>

            <Route exact path='/trending' element={<Trending/>}/>
            <Route exact path='/community' element={<Community/>}/>
            <Route exact path='/browse' element={<Browse/>}/>
        </Routes>
    )
}

export default App
