import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import About from './pages/About';
import Four04 from './pages/Four04';

function App() {
  return (
    <Router>
      <div className='App'>Bujo App</div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route component={Four04} />
      </Switch>
    </Router>
  );
}

export default App;
