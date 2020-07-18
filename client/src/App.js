import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Search from './pages/Search';
import Saved from'./pages/Saved';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path={['/', '/search']} component={Search} />
          <Route exact path='/saved' component={Saved} />
          <Route path='*' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
