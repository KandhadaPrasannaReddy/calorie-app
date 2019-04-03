

import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import '../App.css';

import Sky from 'react-sky';
import juice from "../images/juice.jpg";
import burrito from "../images/burrito.png";
import cake from "../images/cake.png";
import watermelon from "../images/watermelon.png";
import taco from "../images/taco.jpg";
import pizza from "../images/pizza.png";


var body;

class SignInForm extends React.Component {
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
          name: this.state.form.name,
          password: this.state.form.password
        }
        console.log(body)
        const url = "http://10.10.200.25:9000/users/signin"; 
       // const url = "http://10.10.200.25:9000/Weigh-To-Go/signin"; 
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

  .catch(() => alert("please enter correct details"))
            
    }


   
    render() {
        const { form } = this.state;
        return (
            <div >
                 <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: juice,
            1: pizza,
            2: watermelon,
            3: burrito,
            4: cake,
            5: taco

        
          }}
          how={170} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={60} /* time of the animation. Dfaults at 20s */
          size={'80px'} /* size of the rendered images. Defaults at 150px */
          background={'palettedvioletred'} /* color of background. Defaults to none */
        />
            <div className="cardapp">
            <div>
            <div class="lcard"><br/>
            <div className="text-center">
                <h3 className="dark-grey-text mb-5"><br/>
               <font color= "white">   <strong><font size="7.5">Sign In</font></strong></font>
                </h3>
       </div>
        <div className="FormCenter">
            <form onSubmit={this.onSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name" ><font color="white">Name</font></label>
                <input type="name"   id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"><font color="white">Password</font></label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <br/>
              <div className="FormField">
                  {/* <button  width="100%" className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</button>  */}
                  <button type="button" class="button10" onClick={this.handleSubmit} >Sign In</button>
              </div>
            </form>
            </div> </div></div>

            </div>
          </div>
        );
    }
}

export default   SignInForm;