import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        {/* <Switch>
          <Route exact path={['/', '/search']} />
          <Route exact path='/saved' />
          <Route path='*' />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
