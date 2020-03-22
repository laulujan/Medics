import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from '../src/Components/Menu';
import Main from '../src/Components/Main';
import Search from '../src/Components/Search/index';
import Profile from '../src/Components/Profile/profile';
//import {Container} from 'reactstrap';

import './App.css';


class App extends Component {
  render() {
    return (

    <Router>
      <Menu></Menu>
      <Switch>
      <Route path="/search">
            <Search />
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      </Switch>
      <Route exact path="/">
            <Main />
          </Route>
      
    </Router>
    
    )  
  }
}

export default App;