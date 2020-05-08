import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Beers from './components/Beers';
// import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/beers' component={Beers} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
