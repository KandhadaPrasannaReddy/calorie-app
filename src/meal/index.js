import React from 'react';
import Breakfast from '../breakfast/index';
import Navbar from "../navbar/index";
import Goaltab from "../goaltab/index";

export default class Meal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakfast_calories: '',
            lunch_calories: '',
            dinner_calories: ''
        }}
    

    handleCallback = (data) => {
        console.log('In parent', data)
        
        this.setState({
            breakfast_calories : data
          })

        }
        

    render(){
        return(
            <div>
            <Goaltab  updatedBreakfastCals={this.state.breakfast_calories} />
            <Breakfast ParentCallBack={this.handleCallback}/>  
       
            <Navbar/>
            </div>
        )
    }
}



