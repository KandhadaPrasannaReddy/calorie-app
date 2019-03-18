import React, { Component } from 'react';
import logo from '../logo.jpeg';
import scales_img from '../images/scales.png';
import {NavbarBrand} from 'reactstrap';
import '../App.css';
import { createBrowserHistory as createHistory } from "history";

class Firstpage extends Component {
    constructor(props){
        super(props)
        this.onLoginChange= this.onLoginChange.bind(this)   
        this.onSignUpChange= this.onSignUpChange.bind(this)    
        }
    
    history = createHistory(this.props);
    onLoginChange(event){
        event.preventDefault();
        this.props.history.push(`/sign-in/`);

    }
    onSignUpChange(event){
      event.preventDefault();
      this.props.history.push(`/sign-up/`);

  }

  render() {
  

      return (
    
      
       
        <div className="homeimg">
            <div className="cardapp">
        
  
            <header className="App-header">
            <figure class="swing">
               <img src={scales_img} alt="logo" /><br/><br/> 
          </figure>
           
          
        
  
            <div>
              <p> <i><font color="black">A Whole New Way to Take Your Vitamins..</font></i> </p>
            </div> <br/><br/>  
  
              <div class="wrapper">
               <button class="button button1" align="left" onClick={this.onLoginChange}> Login</ button>  
               <button class="button button1" align="right"  onClick={this.onSignUpChange}> SignUp</ button> 
               </div> 
            </header> 
  
            
        </div>
        </div> 
      );
   
  }
}

export default Firstpage;