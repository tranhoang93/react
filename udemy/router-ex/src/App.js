import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import User from './container/User/User';
import Courses from './container/Courses/Courses';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact>Home</NavLink>
            </li>
            <li>
              <NavLink to='/user' >User</NavLink>
            </li>
            <li>
              <NavLink to='/courses' >Courses</NavLink>
            </li>
          </ul>
        </nav>
        <Route path='/' exact render={() => <h1 style={{ textAlign: 'center' }}>WelCome</h1>} />
        <Switch>
          <Route path='/user' component={User} />
          <Route path='/courses' component={Courses} />
        </Switch>
      </div>
    );
  }
}

export default App;
