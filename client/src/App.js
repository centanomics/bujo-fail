import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import setAuthToken from './utils/setAuthToken';

//private routes
import PrivateRoute from './components/auth/PrivateRoute';

// pages
import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Four04 from './pages/Four04';

if(localStorage.token) setAuthToken(localStorage.token)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <PrivateRoute exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Register} />
            <Route exact path='/logout' component={Logout} />
            <Route component={Four04} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
