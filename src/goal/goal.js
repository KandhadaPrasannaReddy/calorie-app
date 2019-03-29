import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import { createBrowserHistory as createHistory } from "history";
import '../App.css';
 var body, gender1;
 
class Goal extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      form: {
        age: '',
        gender: '',
        height: '',
        weight: '',
        goal:0,
        hasAgreed: false,
        selectDialogOpen: false
      } ,
      goalPlan: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateBmi = this.calculateBmi.bind(this);
    this.onSelect = this.onSelect.bind(this);
 }

 onSelect = (event) => { 
    this.props.history.push({
    pathname: '/meal'
    });


  body =
    { age: this.state.form.age,
      height: this.state.form.height,
      weight: this.state.form.weight,
      goalPlan: event.currentTarget.innerText,
      gender: this.state.form.gender
    }

  console.log(body)
  const url = "http://10.10.200.25:9000/profile"; 
  let headers = new Headers();
 
  let token =  localStorage.getItem('AccessToken');
  const AuthStr = 'Bearer '.concat(token);
  
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Authorization',AuthStr);
  headers.append('Access-Control-Allow-Origin', url);
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('POST','PUT');
  
 
  fetch(url, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(body) 
  })
  .then(response => response.json())
  .then(contents => {console.log(contents);
})

  .catch(() => console.log("Can’t access " +this.state.errors + " response. "))
 } 


calculateBmi(){
  function find(id){
    return document.getElementById(id)
  }

  // var age1 = find("age").value
  var height = find("height").value
  var weight = find("weight").value 


  if(weight > 0 && height > 0){	
        var finalBmi = weight / (height/100 * height/100);
        document.bmiForm.bmi.value = finalBmi
        if (find("mbutton").checked) {
          if (finalBmi <= 20) {document.bmiForm.meaning.value ="underweight"}
          else if ((finalBmi > 20) && (finalBmi <= 25)) {document.bmiForm.meaning.value = "normal"}
          else if ((finalBmi > 25) && (finalBmi <= 30)) {document.bmiForm.meaning.value ="over weight"}
          else if ((finalBmi > 30) && (finalBmi <= 40)) {document.bmiForm.meaning.value ="obese"}
          else {document.bmiForm.meaning.value =" seriously obese"}

        }

        else  if (find("fbutton").checked) {
          
          if (finalBmi<= 18.5) {document.bmiForm.meaning.value ="underweight"}
          else if ((finalBmi > 18.5) && (finalBmi <= 24)) {document.bmiForm.meaning.value = "normal"}
          else if ((finalBmi > 24) && (finalBmi <= 30)) {document.bmiForm.meaning.value ="over weight"}
          else if ((finalBmi > 30) && (finalBmi <= 40)) { document.bmiForm.meaning.value ="obese"}
          else {document.bmiForm.meaning.value =" seriously obese"}
        
        }
    }
    else{
      alert("Please Fill in everything correctly")
      }
}

setGender = (e) => {
  gender1 = e.target.value;
}

handleChange() {
   
  this.setState({selectDialogOpen: true})

    function find(id){
      return document.getElementById(id)
    }

    var age1 = find("age").value
    var height1 = find("height").value
    var weight1 = find("weight").value 
    var Calculated_Goal = 0;

    if (find("mbutton").checked) {
      
      Calculated_Goal = (10 * weight1)+ (6.25 * height1) - (5 * age1 )+ 5;
    }

   else  if (find("fbutton").checked) {
      Calculated_Goal = (10 * weight1)+ (6.25 * height1) - (5 *age1 ) -161; 
    }
   
    this.setState (
      {
        form:{
              goal: Calculated_Goal,
              age: age1,
              height:height1,
              weight:weight1,
              gender:gender1,
            
            }
    }
    );
  
}


handleClose = () => {
 this.setState({selectDialogOpen: false})
}


history = createHistory(this.props);
handleSubmit(e) {
  e.preventDefault();
 
  
}


   render()
   {
       
     return(
      <div className ="homeimg">
      <div className="cardapp">
      
      <div>
      
      <div class="card">
     
      <div className="text-center">
                <h3 className="dark-grey-text mb-5">
            <br/>   <font color= "black"> <b>  <strong>Enter your details</strong> </b></font>
                </h3>
       </div>
      <form  name = "bmiForm" onSubmit={this.handleSubmit} className="FormFields"> 
      <br/>
      <div className="FormField1">
          <label  htmlFor="Age">   <span> Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </span></label> 
          <label> <input id="age" type="number"   placeholder="Enter your  age" name="age"  /></label>
        </div>
        
        <div className="FormField1" onChange={this.setGender}>
          <label htmlFor="gender"> <span>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span></label>
           
              <input type="radio"    name="gender"  id="mbutton" value= "0"   /><font color="black">Male</font>
              <input type="radio"  name="gender"   id="fbutton"  value= "1"   /><font color="black">Female</font> 
           <br/>
        </div>

        <div className="FormField1">
          <label htmlFor="height"><span>Height(cm): &nbsp;&nbsp;</span></label>
          <input type="number" name="height"  id="height" size="10"   />
        </div>

        <div className="FormField1">
          <label  htmlFor="weight"><span>Weight(kg):&nbsp;&nbsp;&nbsp;&nbsp;</span></label>
          <input type="number" name="weight"  id="weight" step="1" min="10" max="150"  />
        </div>
           
        <div className="FormField1">
        <input type="button" className="FormField__Button mr-20" value="Calculate BMI" onClick={this.calculateBmi}/><br />
        </div>


        <div className="FormField1">

           <span>Your BMI: &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span><input type="text" name="bmi" size="10"/><br /><br />
           <span> This Means: &nbsp;&nbsp;</span> <input type="text" name="meaning" size="25"/><br />
          <input type="reset" value="Reset" />
        </div>

        
        <div className="FormField1">
            <button className="FormField__Button mr-20" onClick={this.handleChange}>Calculate Goal</button> 
        </div>



      </form>
    </div>
    </div>
     
 
    <Dialog open={this.state.selectDialogOpen} onClose={this.handleClose} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Choose Goal</DialogTitle>
                
     
                <table id="goal_table"  >
                 <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Calories</th> 
                  </tr>
                </thead>
                <tbody> 
            
                 
            <tr >
                <td>Maintain Weight</td>
                <td   onClick={this.onSelect}>{this.state.form.goal * 100/100}</td>
              
            </tr> 
            <tr   >
                <td>Mild Weight Loss</td>
                <td   onClick={this.onSelect}>{this.state.form.goal * 90/100} </td>
                
            </tr>

            <tr>
                <td> Weight Loss</td>
                <td   onClick={this.onSelect}>{this.state.form.goal * 80/100}</td>
               
            </tr>

            <tr> 
                <td>Extreme Weight Loss</td>
                <td  onClick={this.onSelect} >{this.state.form.goal * 61/100}</td>  
            </tr>

        
            </tbody>
                        </table>
                   

            
                
            </Dialog>
           
            </div>
            
  </div>
     );
   }
   }
  
  export default Goal;




  // const styles = theme => ({
  //   table: {
  //     fontFamily: theme.typography.fontFamily,
  //   },
  //   flexContainer: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     boxSizing: 'border-box',
  //   },
  //   tableRow: {
  //     cursor: 'pointer',
  //   },
  //   tableRowHover: {
  //     '&:hover': {
  //       backgroundColor: theme.palette.grey[200],
  //     },
  //   },
  //   tableCell: {
  //     flex: 1,
  //   },
  //   noClick: {
  //     cursor: 'initial',
  //   },
  // });