import React from 'react';
import Feed from './Feed';
import '../Styles/Home.css'
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Feed />
            <Footer />
        </div>
    )
}

export default Home;