import React from 'react';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './components/settings/settings';
import { loginNeededUrl, fetchAndSaveTokens } from './util/urls';
import Login from './components/login/login';
import { ToastContainer, Slide } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component<{}> {

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      if (!document.location.href.endsWith('/login')) {
        this.checkIfLoginNeeded();
      }
    } else {
      window.history.replaceState(null, '', window.location.pathname);
      this.sendCode(code);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/settings">
              <Settings></Settings>
            </Route>
            <Route path="/login">
              <Login></Login>
          </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
        <ToastContainer transition={Slide} closeButton={false} position={'bottom-left'}/>
      </div>
    );
  }

  checkIfLoginNeeded() {
    fetch(loginNeededUrl, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {
        if (json.loginNeeded) {
          document.location = '/login' as any;
        }
      });
  }

  sendCode(code: string) {
    fetch(fetchAndSaveTokens, {
      method: 'POST',
      body: `{"code": "${code}"}`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export default App;
