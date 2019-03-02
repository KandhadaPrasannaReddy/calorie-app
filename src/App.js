
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Firstpage  from './firstpage/firstpage';
import Goal  from './goal/goal';
import Meal from "./meal/index";
import Foodmenu from "./foodmenu/index";
import Recipes from './recipes';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Goaltab from './goaltab/index';
import Logout from './logout/index';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
       <Switch>              
              <Route exact path="/firstpage" component={Firstpage}></Route>
              

              <Route exact path="/sign-up" component={SignUpForm}> </Route>
              <Route  exact path="/sign-in" component={SignInForm}> </Route>
              
              <Route  exact path="/goal" component={Goal}> </Route>

              <Route exact path="/meal" component={Meal}/>
              <Route  exact path="/foodmenu" component={Foodmenu}/> 
              <Route exact path="/recipes" component={Recipes}/> 
              <Route exact path="/goaltab" component={Goaltab}/> 
              <Route exact path="/logout" component={Logout}/> 

             <Redirect to = "/firstpage" component={Firstpage}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
