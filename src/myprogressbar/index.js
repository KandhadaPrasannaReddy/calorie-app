import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//update snackbar style to warning

export default class MyProgressBar extends React.Component{

    notify = () => toast.error("Uh oh! Your calorie intake is more than required!", {
        position: toast.POSITION.TOP_RIGHT
      });
    
    render(){
        console.log('meal cals', this.props.Total_Meal_Calories)
        console.log('Goal cals', this.props.Goal)
        if(this.props.Total_Meal_Calories  <= this.props.Goal){
            return(
                <div>
                    <ProgressBar animated="true" striped variant="warning"  
                        now={(this.props.meal_calories_percentage).toFixed(2)} 
                        label={`${(this.props.meal_calories_percentage).toFixed(2)}%`} />
                </div>
            )}
        else {
            this.notify()
            return(
                <div>
                     <ToastContainer />
         
                </div>
            )}
    }
}
