import React, { Component } from 'react';
import { createBrowserHistory as createHistory } from "history";

import '../App.css';


var body;
class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          form: {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
          }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
    }
    
   
    
    handleChange(e) {
      e.persist();
      let store = this.state;
      store.form[e.target.name] = e.target.value;
      this.setState(store);
    }

    history = createHistory(this.props);

    handleSubmit(e) {
      e.preventDefault();
     
      body = {
        name: this.state.form.name,
        email: this.state.form.email,
        password: this.state.form.password
      }
      console.log(body)
      const url = "http://10.10.200.25:9000/users"; 
      let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', url);
      headers.append('Access-Control-Allow-Credentials', 'true');
  
      headers.append('POST','GET');
      
     
      fetch(url, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify(body) 
      })
     

      .then(response => response.json())
      .then(contents => {console.log(contents);
      
            localStorage.setItem("AccessToken",contents.token);
            this.props.history.push(`/goal/`);
                        
  })
     
     
      
      .catch(() => console.log("Can’t access " +this.state.errors + " response. "))
     

    }
    

    

    render() {
        return (
          <div className="myimg">
         <div className="cardapp">
      <div class="scard"><br/>
      <div className="text-center">
                <h3 className="dark-grey-text mb-5">
               <font color= "grey">   <strong>Sign Up</strong></font>
                </h3>
       </div>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"><font color="black">Full Name</font></label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"><font color="black">E-Mail Address</font></label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"><font color="black">Password</font></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign Up</button> 
              </div>
            </form>
            </div> </div></div>
          
        );
    }
}

export default SignUpForm;

// import React from "react";
// import '../App.css';
// import {  MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
// import { createBrowserHistory as createHistory } from "history";

// var body;
// export default class SignUpPage extends React.Component {
//   constructor(props) {
//             super(props);
    
//             this.state = {
//               form: {
//                 email: '',
//                 password: '',
//                 name: '',
//                 hasAgreed: false
//               }
//             }
    
//             this.handleChange = this.handleChange.bind(this);
//             this.handleSubmit = this.handleSubmit.bind(this);
       
//         }
//         handleChange(e) {
//                 e.persist();
//                 let store = this.state;
//                 store.form[e.target.name] = e.target.value;
//                 this.setState(store);
//               }
          
//               history = createHistory(this.props);
          
//               handleSubmit(e) {
//                 e.preventDefault();
               
//                 body = {
//                   name: this.state.form.name,
//                   email: this.state.form.email,
//                   password: this.state.form.password
//                 }
//                 console.log(body)
//                 const url = "http://10.10.200.25:9000/users"; 
//                 let headers = new Headers();
            
//                 headers.append('Content-Type', 'application/json');
//                 headers.append('Accept', 'application/json');
            
//                 headers.append('Access-Control-Allow-Origin', url);
//                 headers.append('Access-Control-Allow-Credentials', 'true');
            
//                 headers.append('POST','GET');
                
               
//                 fetch(url, {
//                     headers: headers,
//                     method: 'POST',
//                     body: JSON.stringify(body) 
//                 })
               
          
//                 .then(response => response.json())
//                 .then(contents => {console.log(contents);
                
//                       localStorage.setItem("AccessToken",contents.token);
//                       this.props.history.push(`/goal/`);
                                  
//             })
               
               
                
//                 .catch(() => console.log("Can’t access " +this.state.errors + " response. "))
               
          
//               }
                        

//   render(){
   
//   return (
//     <div>
//     <div className="mydivs">
//           <MDBCard>
//           <form  onSubmit={this.handleSubmit}>
//             <MDBCardBody className="mx-4">
//               <div className="text-center">
//                 <h3 className="dark-grey-text mb-5">
//                   <strong>Sign Up</strong>
//                 </h3>
//               </div>
//               <MDBInput
//                 label="Your username"
//                 group
//                 name="name" value={this.state.name} onChange={this.handleChange} type="text"
//               />  <br/>
//               <MDBInput
//                 label="Your email"
//                 group
//                 name="email" value={this.state.email} onChange={this.handleChange} type="email"
//               />  <br/>
//               <MDBInput
//                 label="Your password"
//                 group
//                 name="password" value={this.state.password} onChange={this.handleChange} type="password"
//               />  <br/>
//               <div className="text-center mb-3">
//                 <MDBBtn
//                   type="submit"
//                   gradient="blue"
//                   rounded
//                   className="btn-block z-depth-1a"
//                   name="submit" value="submit"
//                 >  <br/>
//                   Sign Up
//                 </MDBBtn>
//              </div>
//             </MDBCardBody>
//             </form>
//             <MDBModalFooter className="mx-5 pt-3 mb-1">
//               <p className="font-small grey-text d-flex justify-content-end">
//                 Have an account?
//                 <a href="/sign-in" className="blue-text ml-1">
//                  Login
//                 </a>
//               </p>
//             </MDBModalFooter>
//           </MDBCard>
//     </div>
//     </div>
//   );
//   }
// };