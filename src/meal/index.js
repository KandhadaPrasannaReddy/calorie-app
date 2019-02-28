import React from 'react';
import Breakfast from '../breakfast/index';
import Navbar from "../navbar/index";
import Goaltab from "../goaltab/index";

export default class Meal extends React.Component{
    render(){
        return(
            <div>
            <Goaltab/>
            <Breakfast name={'Breakfast'} />  
            {/* <Breakfast name={'Lunch'} />  
            <Breakfast name={'Dinner'} />      */}
            <Navbar/>
            </div>
        )
    }
}



