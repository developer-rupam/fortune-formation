import React from 'react';
import './App.css';
import Home from './pages/Home'
import Starter from './pages/Starter'
import Business from './pages/Business'
import Corporate from './pages/Corporate'
import International from './pages/International'

import {BrowserRouter as Router, Switch,Route,withRouter,NavLink,browserHistory} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/starter" component={Starter} />
          <Route path="/business" component={Business} />
          <Route path="/corporate" component={Corporate} />
          <Route path="/international" component={International} />
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
