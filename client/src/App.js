import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';

import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Four04 from './pages/Four04';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={Four04} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
