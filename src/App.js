import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Users from './components/Users';
import EditArticle from './components/EditArticle';
import Login from './components/Login';
import Nav from './components/Nav';


class App extends Component {

  render() {
    return (
            <Router>
              <div className='container'>
              <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/users' component={Users} />
                        <Route path="/articles/:id/edit" component={ EditArticle }/>
                        <Route path="/login" component={ Login }/>
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
