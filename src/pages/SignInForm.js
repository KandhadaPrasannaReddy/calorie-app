import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
          form:{  email: '',
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

    handleSubmit(e) {
        const url = "http://10.10.200.25:9000/users"; 
             let headers = new Headers();
         
             headers.append('Content-Type', 'application/json');
             headers.append('Accept', 'application/json');
         
             headers.append('Access-Control-Allow-Origin', url);
             headers.append('Access-Control-Allow-Credentials', 'true');
         
             headers.append('GET', 'POST','PUT');
             
             e.preventDefault();
             fetch(url, {
                 headers: headers,
                 method: 'PUT',
                 body: JSON.stringify(this.state.form) 
             })
        .then(console.log(this.state.form))
        .catch(() => console.log("Can’t access " + url + " response. "))
       // this.props.history.push(`/details`)
    }

    render() {
        const { form } = this.state;
        return (
        <div className="FormCenter">
            
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email" >E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
