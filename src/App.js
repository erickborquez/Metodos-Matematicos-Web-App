import React from 'react';
import './Styles/Home.css'
import Login from './Components/Login'
import UserProvider from './Providers/UserProvider';

const App = () => {
  
  return (
    <UserProvider>
      <div className="App home">
        <header className='header'>
          <h1 className="header__title">Aplicacion!!!</h1>
          <Login className="header__button" />
        </header>
      </div>
    </UserProvider>

  );
}

export default App;
