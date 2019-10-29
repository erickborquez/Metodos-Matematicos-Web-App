import React from 'react';

import Login from './Login'
import Feed from './Feed';
import SideBar from './Side';

import '../Styles/Home.css'


const Home = () => {
    return (
        <div className="App home">
            <header className='header'>
                <h1 className="header_title">Aplicacion!!!</h1>
                <Login className="header_user" />
            </header>
            <Feed />
            <SideBar />
        </div>
    )
}

export default Home;