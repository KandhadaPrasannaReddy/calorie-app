import React, { Component } from 'react';
import logo from '../logo.jpeg';
import '../App.css';
import { createBrowserHistory as createHistory } from "history";

class Firstpage extends Component {
    constructor(props){
        super(props)
        this.onrouteChange= this.onrouteChange.bind(this)     
        }
    
    history = createHistory(this.props);
    onrouteChange(event){
        event.preventDefault();
        this.props.history.push(`/userpage/`);

    }

  render() {
    return (
      
      <div className="App">

          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br/><br/> 
           

          <div>
            <p> <i><font color="black">A Whole New Way to Take Your Vitamins..</font></i> </p>
          </div> <br/><br/>  

          <button class="button button1"  onClick={this.onrouteChange}> Get Started</ button> 
          </header> 

        
      </div>
     
    );
  }
}

export default Firstpage;