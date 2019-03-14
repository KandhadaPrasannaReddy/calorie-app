import React from 'react';
import Breakfast from '../breakfast/index';
import Lunch from '../lunch/index';
import Dinner from '../dinner/index';
import Navbar from "../navbar/index";
import Goaltab from "../goaltab/index";

export default class Meal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakfast_consumed_calories: 0,
            lunch_consumed_calories: 0,
            dinner_consumed_calories: 0,
            goal: 2500 //retreive from db
        }}

    handleBreakfastCallback = (data) => {
        this.setState({
            breakfast_consumed_calories: data
          }, 
        )
    }
        
    handleLunchCallback = (data) => {
        //console.log('In lunch parent', data)
        this.setState({
            lunch_consumed_calories: data
          }, 
        )
    }

    handleDinnerCallback = (data) => {
        //console.log('In lunch parent', data)
        this.setState({
            dinner_consumed_calories: data
          }, 
        )
    }

    render(){
        return(
            <div>
            <Goaltab  
                breakfast_cals={this.state.breakfast_consumed_calories} 
                lunch_cals={this.state.lunch_consumed_calories} 
                dinner_cals={this.state.dinner_consumed_calories}
                Total_Meal_Calories={this.state.breakfast_consumed_calories + this.state.lunch_consumed_calories + this.state.dinner_consumed_calories}
                Goal = {this.state.goal}
                Remaining_Calories={this.state.goal - (this.state.breakfast_consumed_calories + this.state.lunch_consumed_calories + this.state.dinner_consumed_calories)}/>

            <Breakfast ParentCallBack={this.handleBreakfastCallback}/>  
            <Lunch ParentCallBack={this.handleLunchCallback}/>  
            <Dinner ParentCallBack={this.handleDinnerCallback}/>
            <Navbar/>
            </div>
        )
    }
}



