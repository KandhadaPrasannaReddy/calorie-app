import React, { Component } from 'react';
import '../App.css';

class Goal extends Component {

   

   render()
   {
     return(
         <div>
        <div className="FormField">
        <label className="FormField__Label" htmlFor="dateofbirth">Date of Birth</label>
        <input type="date" id="dateofbirth" className="FormField__Input" placeholder="Enter your  date of birth" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange} />
      </div>
      
      <div className="FormField">
        <label className="FormField__Label" htmlFor="gender">Gender</label><br/>
        <label>  <input type="radio"    name="gender"   value="male" checked={this.state.gender === "male" } onChange={this.handleChange} /><font color="white">Male</font></label>
        <label><input type="radio"  name="gender"   value="female" checked={this.state.gender === "female" } onChange={this.handleChange} /><font color="white">Female</font></label><br/>
      </div>

      <div className="FormField">
        <label className="FormField__Label" htmlFor="height">Height</label>
        <input type="number" name="height" step="0.01" min="4.00" max="12.99" value={this.state.height} onChange={this.handleChange}/>
      </div>

      <div className="FormField">
        <label className="FormField__Label" htmlFor="weight">Weight</label>
        <input type="number" name="weight" step="1" min="10" max="150" value={this.state.weight} onChange={this.handleChange}/>
      </div>
         
      <div className="FormField">
        <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
        </label>
      </div>
      </div>
     );
   }
   }
  
  export default Goal;