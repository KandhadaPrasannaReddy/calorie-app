import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import '../App.css';

class Userpage extends Component {
    render() {
      return (
      
 
               
        
        <BrowserRouter>
        <div className="App">
        
          <div className="PageSwitcher">
          <div class="center">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink  exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            </div>

            

            
            <Route   path="/sign-up" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
           
        </div>
        </ BrowserRouter>
        

      
  
            
  
             
  
  
      );
    }
  }
  
  export default Userpage;
  