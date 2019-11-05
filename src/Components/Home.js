import React from 'react';
import Feed from './Feed';
import '../Styles/Home.css'
import Header from './Header';
import UserOptions from './UserOptions';


const Home = () => {
    return (
        <div className="App">
            <Header />
            <Feed />
        </div>
    )
}

export default Home;