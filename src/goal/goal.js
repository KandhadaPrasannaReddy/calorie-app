import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Navbar from '../navbar';
import '../App.css';





class Goal extends Component {
  constructor() {
    super();
  
    this.state = {
        age: '',
        gender: '',
        height: '',
        weight: '',
        goal:0,
        hasAgreed: false,
        selectDialogOpen: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateBmi = this.calculateBmi.bind(this);
}


calculateBmi(){
  function find(id){
    return document.getElementById(id)
  }

  var age1 = find("age").value
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

handleChange() {
   
  this.setState({selectDialogOpen: true})
    function find(id){
      return document.getElementById(id)
    }

    var age1 = find("age").value
    var gender1 = find("group1").value
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
       goal: Calculated_Goal,
       age: age1,
       height:height1,
       weight:weight1,
       gender:gender1
      }
    );

}


handleClose = () => {
 this.setState({selectDialogOpen: false})
}

handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
}
   


 

   render()
   {
       
     return(
      <div className="cardapp">
      <div>
      <div class="card">
      <form  name = "bmiForm" onSubmit={this.handleSubmit} className="FormFields"> 
      <br/>
      <div className="FormField1">
          <label  htmlFor="Age">Age:</label> 
          <label> <input id="age" type="number"   placeholder="Enter your  age" name="age"  /></label>
        </div>
        
        <div className="FormField1">
          <label htmlFor="gender">Gender: </label>
            <fieldset id="group1"><label>
              <input type="radio"    name="gender"  id="mbutton"    /><font color="black">Male</font>
              <input type="radio"  name="gender"   id="fbutton"   /><font color="black">Female</font> 
            </label></fieldset><br/>
        </div>

        <div className="FormField1">
          <label htmlFor="height">Height(cm):</label>
          <input type="number" name="height"  id="height" size="10"   />
        </div>

        <div className="FormField1">
          <label  htmlFor="weight">Weight(kg):</label>
          <input type="number" name="weight"  id="weight" step="1" min="10" max="150"  />
        </div>
           
        <div className="FormField1">
        <input type="button" value="Calculate BMI" onClick={this.calculateBmi}/><br />
        </div>


        <div className="FormField1">

           Your BMI: <input type="text" name="bmi" size="10"/><br /><br />
           This Means: <input type="text" name="meaning" size="25"/><br />
          <input type="reset" value="Reset" />
        </div>

        
        <div className="FormField1">
            <button className="FormField__Button mr-20" onClick={this.handleChange}>Calculate Goal</button> 
        </div>



      </form>
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
                            <td>{this.state.goal * 100/100}</td>
                          
                        </tr>
                        <tr >
                            <td>Mild Weight Loss</td>
                            <td>{this.state.goal * 90/100}</td>
                            
                        </tr>

                        <tr>
                            <td> Weight Loss</td>
                            <td>{this.state.goal * 80/100}</td>
                           
                        </tr>

                        <tr>
                            <td>Extreme Weight Loss</td>
                            <td>{this.state.goal * 61/100}</td>  
                        </tr>

                        </tbody>
                        </table>


                        
                
            </Dialog>
            <Navbar/>
            </div>
  </div>
     );
   }
   }
  
  export default Goal;




  const styles = theme => ({
    table: {
      fontFamily: theme.typography.fontFamily,
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: 'initial',
    },
  });