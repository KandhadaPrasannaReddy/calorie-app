
import React, { Component } from 'react';
import { HashRouter as Router, Route,  NavLink,Switch, Redirect } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Firstpage  from './firstpage/firstpage';
import Userpage  from './userpage/userpage';
import Goal  from './goal/goal';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
       <Switch>              
              <Route exact path="/firstpage" component={Firstpage}></Route>
              <Route exact path="/userpage" component={Userpage}></Route>
              <Route exact path="/sign-up" component={SignUpForm}> </Route>
              <Route  exact path="/sign-in" component={SignInForm}> </Route>
              <Route  exact path="/goal" component={Goal}> </Route>


             <Redirect to = "/firstpage" component={Firstpage}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
