import React from 'react';
import Feed from './Feed';
import '../Styles/Home.css'
import Header from './Header';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Feed />
        </div>
    )
}

export default Home;