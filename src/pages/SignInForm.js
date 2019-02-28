import React, { Component } from 'react';
import { createBrowserHistory as createHistory } from "history";
import '../App.css';

var body;
let resStatus = 0
//let token= " ";


class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          form:{  name: '',
            password: ''
          
        }
        };

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
         email: this.state.form.email,
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
        resStatus = contents.status
            localStorage.setItem("AccessToken",contents.token);
            this.props.history.push(`/meal/`);
                        
  })
  .then(response => {
    switch (resStatus) {
      case 201:
        console.log('success')
        break
      case 400:
        if (response.code === 'ValidationFailed') {
          // My custom error messages from the API.
          console.log(response.fieldMessages)
        } else {
          console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
        }
        break
      case 500:
        alert('server error, try again')
        break
      default:
        console.log('unhandled')
        break
    }
  })
  
  .catch(() => alert("please enter correct details"))
          

        
    }


   
    render() {
        const { form } = this.state;
        return (
            <div className="cardapp">
            <div class="lcard"><br/>
        <div className="FormCenter">
            
            <form onSubmit={this.onSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email" ><font color="black">E-Mail Address</font></label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"><font color="black">Password</font></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</button> 

              </div>
            </form>
            </div> </div>
          </div>
        );
    }
}

export default   SignInForm;
