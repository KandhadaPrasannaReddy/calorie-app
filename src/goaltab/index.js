import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'

export default class Goaltab extends React.Component{

    // state = {
    //     goal: 2000, //get values from db
    //     total_meal_calories: 0, //after calculation ()
    //     remaining_calories: 0, 
    //     percentage : 0
    // }

    // componentDidMount(){
    //     this.calculateRemainingCalories()
    //     this.calculatePercentage()
    // }

    // calculatePercentage = () => {
    //     var percentage_value = this.props.breakfast_cals / this.state.goal  * 100;
    //     console.log(this.props.breakfast_cals + "total    "+ this.state.goal+ "goal    " + percentage_value+ " perc val" );
    //     this.setState({
    //         percentage: percentage_value
    //     })
    // }
    // calculateRemainingCalories = () => {
    //     var remaining_value = this.state.goal - this.props.breakfast_cals;
    //     this.setState({
    //         remaining_calories : remaining_value
    //     });
    //     return remaining_value;
    // }
 
    // updateConsumedMealCalories = () => {
    //     var total_cals = this.props.breakfast_cals + this.props.lunch_cals
    //     this.setState({
    //         total_meal_calories: total_cals
    //     })
    //     return total_cals
    // }
    
    render(){
        return(
            <div>
                <ProgressBar animated="true" striped variant="warning"  
                        now={(this.props.Total_Meal_Calories / this.props.Goal)  * 100} 
                        label={`${(this.props.Total_Meal_Calories / this.props.Goal) * 100}%`} />
            
                <Alert variant="success">
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