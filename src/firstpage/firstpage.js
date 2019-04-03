// import React, { Component } from 'react';
// import scales_img from '../images/scales.png';
// import '../App.css';
// import { createBrowserHistory as createHistory } from "history";

// class Firstpage extends Component {
//     constructor(props){
//         super(props)
//         this.onLoginChange= this.onLoginChange.bind(this)   
//         this.onSignUpChange= this.onSignUpChange.bind(this)    
//     }
    
//     history = createHistory(this.props);
//     onLoginChange(event){
//         event.preventDefault();
//         this.props.history.push(`/sign-in/`);

//     }
//     onSignUpChange(event){
//       event.preventDefault();
//       this.props.history.push(`/sign-up/`);

//   }

//   render() {
  

//       return (
        

//         <div className="App-nav" >
     
//         {/* <NavbarBrand href="/firstpage" style={{color: '#ffffff'}} align="center">Weigh-To-Go</NavbarBrand> */}
       
      
//         <div className="App">
  
//             <header className="App-header">
           
//             {/* <img src={logo} className="App-logo" alt="logo" /><br/><br/>  */}
        
//             <figure class="swing">
//                <img src={scales_img} alt="logo" /><br/><br/> 
//           </figure> 
  
//             <div>
//               <p> <i><font color="black">A Whole New Way to Take Your Vitamins..</font></i> </p>
//             </div> <br/><br/>  
  
//               <div class="wrapper">
//                <button class="button button1" align="left" onClick={this.onLoginChange}> Login</ button>  
//                <button class="button button1" align="right"  onClick={this.onSignUpChange}> SignUp</ button> 
//                </div> 
//             </header> 
  
            
//         </div>
//         </div> 
     
//       );
   
//   }
// }

// export default Firstpage;


import React, { Component } from 'react';
import { createBrowserHistory as createHistory } from "history";
import "./homepagestyles.css";
import '../App.css';
export default class Firstpage extends Component {
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

        
        render(){
            return(
                <div>
                    
                    <div id="circle-container">
                    <div id="cc">
                    <div class="circle" id="five"></div>
                    <div class="circle" id="four"></div>
                    <div class="circle" id="three"></div>
                    <div class="circle" id="two"></div>
                    <div class="circle" id="one"></div>
                    </div> 
        
                <div class="wrapper">
                 <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> 
                 {/* <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/><br/> <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/> <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/>  <br/> <br/><br/> <br/> */}
                    <button class="button button1" align="bottom-left" onClick={this.onLoginChange}> Login</ button>  <span>&nbsp;&nbsp;</span>
                    <button class="button button1" align="right"  onClick={this.onSignUpChange}> Sign Up</ button>
                </div>
                
                </div>
             </div>
            )
        }

}