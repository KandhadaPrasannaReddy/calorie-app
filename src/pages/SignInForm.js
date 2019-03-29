// import React, { Component } from 'react';
// import { createBrowserHistory as createHistory } from "history";
// import '../App.css';

// var body;
// const style =
// `
// input {
//     color: red;
//     }`

// class SignInForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//           form:{  name: '',
//             password: ''
 
//         }
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
     
//     }

//     handleChange(e) {
//         e.persist();
//         let store = this.state;
//         store.form[e.target.name] = e.target.value;
//         this.setState(store);
//     }

//     history = createHistory(this.props);
    
//     handleSubmit(e) {
//         e.preventDefault();
//         body = {
//           name: this.state.form.name,
//           password: this.state.form.password
//         }
//         console.log(body)
//         const url = "http://10.10.200.25:9000/users/signin"; 
//              let headers = new Headers();
         
//              headers.append('Content-Type', 'application/json');
//              headers.append('Accept', 'application/json');
         
//              headers.append('Access-Control-Allow-Origin', url);
//              headers.append('Access-Control-Allow-Credentials', 'true');
         
//              headers.append('GET','PUT');
             
//              e.preventDefault();
//              fetch(url, {
//                  headers: headers,
//                  method: 'PUT',
//                  body: JSON.stringify(body) 
//              })

//         .then(response => response.json())
//       .then(contents => {console.log(contents);
        
//             localStorage.setItem("AccessToken",contents.token);
//             this.props.history.push(`/meal/`);
                        
//   })
//   // .then(response => {
//   //   switch (resStatus) {
//   //     case 201:
//   //       console.log('success')
//   //       break
//   //     case 400:
//   //       if (response.code === 'ValidationFailed') {
//   //         // My custom error messages from the API.
//   //         console.log(response.fieldMessages)
//   //       } else {
//   //         console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
//   //       }
//   //       break
//   //     case 500:
//   //       alert('server error, try again')
//   //       break
//   //     default:
//   //       console.log('unhandled')
//   //       break
//   //   }
//   // })
  
//   .catch(() => alert("please enter correct details"))
            
//     }


   
//     render() {
//         const { form } = this.state;
//         return (
//             <div className="myimg">
//             <div className="cardapp">
//             <div>
//             <div class="lcard"><br/>
//             <div className="text-center">
//                 <h3 className="dark-grey-text mb-5">
//                <font color= "white">   <strong>Sign In</strong></font>
//                 </h3>
//        </div>
//         <div className="FormCenter">
//             <form onSubmit={this.onSubmit} className="FormFields" onSubmit={this.handleSubmit}>
//             <div className="FormField">
//                 <label className="FormField__Label" htmlFor="name" ><font color="white">Name</font></label>
//                 <input type="name"   id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="password"><font color="white">Password</font></label>
//                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                   <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</button> 

//               </div>
//             </form>
//             </div> </div></div>

//             </div>
//           </div>
//         );
//     }
// }

// export default   SignInForm;



import React from "react";
import '../App.css';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn,} from 'mdbreact';
import { createBrowserHistory as createHistory } from "history";
// import Sky from 'react-sky';
// import juice from "../images/juice.jpg";
// import burrito from "../images/burrito.png";
// import cake from "../images/cake.png";
// import watermelon from "../images/watermelon.png";
// import taco from "../images/taco.jpg";
// import pizza from "../images/pizza.png";


var body;
export default class SignInForm extends React.Component {
  constructor(props) {
            super(props);
    
            this.state = {
              form: {
                name: '',
                password: '',
               
               
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
                          password: this.state.form.password
                        }
                        console.log(body)
                        const url = "http://10.10.200.25:9000/users/signin"; 
                             let headers = new Headers();
                         
                             headers.append('Content-Type', 'application/json');
                             headers.append('Accept', 'application/json');
                         
                             headers.append('Access-Control-Allow-Origin', url);
                             headers.append('Access-Control-Allow-Credentials', 'true');
                         
                             headers.append('GET','PUT');
                             
                             e.preventDefault();
                             fetch(url, {
                                 headers: headers,
                                 method: 'PUT',
                                 body: JSON.stringify(body) 
                             })
                
                        .then(response => response.json())
                      .then(contents => {console.log(contents);
                        
                            localStorage.setItem("AccessToken",contents.token);
                            this.props.history.push(`/meal/`);
                                        
                  })
                }

  render(){
   
  return (

    <div>
     
      
    <div className="logdivs">
         
          <MDBCard>
          <form  onSubmit={this.handleSubmit}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Login</strong>
                </h3>
              </div>
              <MDBInput
                label="Your username"
                group
                name="name" value={this.state.name} onChange={this.handleChange} type="text"
              />
             <br/>
              <MDBInput
                label="Your password"
                group
                name="password" value={this.state.password} onChange={this.handleChange} type="password"
              />


              <br/><br/>
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  name="submit" value="submit"
                >
                  Log In
                </MDBBtn>
             </div>
            </MDBCardBody>
            </form>

          </MDBCard>

    </div></div>
  );
  }
};