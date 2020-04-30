import React from 'react';
import './App.scss';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './components/settings/settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route path="/login">
            login
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
