import React from 'react'

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import PageList from '../components/PageList';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <NavBar/>
            <Search/>
            <PageList/>
            <Footer/>
        </>
    );
}

export default Home
