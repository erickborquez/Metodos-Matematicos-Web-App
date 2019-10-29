import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserProvider from './Providers/UserProvider';
import { RouteContext } from './Providers/RouteProvider';

import Home from './Components/Home'



const App = () => {
  const baseURL = useContext(RouteContext);

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact={true} path={`${baseURL}`} render={({ match }) => <Home match={match} />} />
          <Route exact={true} path={`${baseURL}feed`} render={({ match }) => <Home match={match} />} />
          <Route render={({ match }) => (<div>Pagina no encontrada :$</div>)} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
