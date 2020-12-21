import React from 'react';
import './App.css';
import Home from './pages/Home'

import {BrowserRouter as Router, Switch,Route,withRouter,NavLink,browserHistory} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
