import React, { Component } from 'react';
import scales_img from '../images/scales.png';
import '../App.css';
import { createBrowserHistory as createHistory } from "history";
//  import Sky from 'react-sky';
// import juice from "../images/juice.jpg";
// import burrito from "../images/burrito.png";
// import cake from "../images/cake.png";
// import watermelon from "../images/watermelon.png";
// import taco from "../images/taco.jpg";
// import pizza from "../images/pizza.png";


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
        // <div>
        //     <Sky 
        //   images={{
        //     /* FORMAT AS FOLLOWS */
        //     0: juice,
        //     1: pizza,
        //     2: watermelon,
        //     3: burrito,
        //     4: cake,
        //     5: taco

        
        //   }}
        //   how={130} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
        //   time={60} /* time of the animation. Dfaults at 20s */
        //   size={'80px'} /* size of the rendered images. Defaults at 150px */
        //   background={'palettedvioletred'} /* color of background. Defaults to none */
        // />

        <div className="App-nav" >
     
        {/* <NavbarBrand href="/firstpage" style={{color: '#ffffff'}} align="center">Weigh-To-Go</NavbarBrand> */}
       
      
        <div className="App">
  
            <header className="App-header">
           
            {/* <img src={logo} className="App-logo" alt="logo" /><br/><br/>  */}
        
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
        //  </div> 
      );
   
  }
}

export default Firstpage;


// import React, { Component } from 'react';

// export default class Firstpage extends Component {
//         render(){
//             return(
//                 <div>
//                      <div id="circle-container">
//                     <div id="cc">
//                     <div class="circle" id="five"></div>
//                     <div class="circle" id="four"></div>
//                     <div class="circle" id="three"></div>
//                     <div class="circle" id="two"></div>
//                     <div class="circle" id="one"></div>
//                     </div>
//                 </div>  
//                             <div class="span9 btn-block no-padding">
//                     <button class="btn btn-large btn-block btn-primary full-width" type="button">Login</button>
//                     <button class="btn btn-large btn-block btn-primary full-width" type="button">Sign Up</button>
//                 </div>
//                 </div>
//             )
//         }

// }