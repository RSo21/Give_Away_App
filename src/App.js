import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LogOut from './pages/LogOut';
import GiveAway from './pages/GiveAway';
import "../src/scss/main.scss";

import PrivateRoute from './components/Session/index';
import { AuthProvider } from "./components/Session/Context";


class App extends Component {

  render(){
  return (
      <div className="App">
        <BrowserRouter>
        <AuthProvider>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/logout" component={LogOut}/>
              <PrivateRoute path='/giveaway' component={GiveAway}/>
          </Switch>
        </AuthProvider>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
