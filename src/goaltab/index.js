import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'

export default class Goaltab extends React.Component{

    state = {
        goal: 2000, //get values from db
        total_meal_calories: 1500, //after backend calculation
        remaining_calories: 0, 
        percentage : 0
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.calculateRemainingCalories()
        this.calculatePercentage()
    }

    calculatePercentage = () => {
        var percentage_value = this.state.total_meal_calories / this.state.goal  * 100;
        console.log(this.state.total_meal_calories + "total"+ this.state.goal+ "goal" + percentage_value+ "perc val" );
        this.setState({
            percentage: percentage_value
        })
    }
    calculateRemainingCalories = () => {
        var remaining_value = this.state.goal - this.state.total_meal_calories;
        this.setState({
            remaining_calories : remaining_value
        });
        return remaining_value;
    }

    render(){
        return(
            <div>
                <ProgressBar animated="true" striped variant="warning"  now={this.state.percentage} label={`${this.state.percentage}%`} />
            
                <Alert variant="success">
                <Alert.Heading>Hey, nice to see you again! 👋 </Alert.Heading>
                <hr />
                <p>
                    <pre>Your goal: {this.state.goal}</pre>
                    <pre>Total calories consumed today: {this.state.total_meal_calories}</pre>
                    <pre>Remaining calories left: {this.state.remaining_calories} </pre>          
                </p>
                </Alert>
            </div>
        )
    }
}
// <ProgressBar animated="true" striped variant="success"  now={this.state.percentage} label={`${this.state.percentage}%`} />

{/* <Paper elevation={1}>
                        { 
                        <Typography variant="h5" component="h3">
                        <div style={{ width: '100px' }}>

                        <ProgressBar animated="true" striped variant="success"  now={this.state.percentage} label={`${this.state.percentage}%`} />

                          {/* <CircularProgressbar
                          percentage={this.state.percentage}
                            text={`${this.state.goal}`}
                            styles={{
                                path: { stroke: `rgba(62, 152, 199, ${this.state.remaining_calories / 100})` },
                                text: { fill: '#f88', fontSize: '16px' },
                            }}
                            
                            />
                            - {this.state.total_meal_calories} = {this.state.remaining_calories} }

                        </div>
                        </Typography> }
                       

                </Paper> */}