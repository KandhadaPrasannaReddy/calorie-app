import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MyProgressBar from '../myprogressbar/index';
import Alert from 'react-bootstrap/Alert'

export default class Goaltab extends React.Component{

    render(){
        var meal_calories = (this.props.Total_Meal_Calories / this.props.Goal) * 100;
        return(
            <div>
                <MyProgressBar meal_calories={meal_calories}/>
            
                <Alert variant="success">
                {/* update with user name */}
                <Alert.Heading>Hey , nice to see you again! <span>👋</span> </Alert.Heading>
                <hr />
                <p>
                    <pre>Your goal: {this.props.Goal}</pre>
                    <pre>Total meal calories : {this.props.Total_Meal_Calories}</pre>
                    <pre>Remaining calories left: {this.props.Remaining_Calories} </pre>          
                </p>
                </Alert>
            </div>
        )
    }
}

{/* <ProgressBar animated="true" striped variant="warning"  
now={meal_limit_check} 
label={`${((this.props.Total_Meal_Calories / this.props.Goal) * 100).toFixed(2)}%`} /> */}