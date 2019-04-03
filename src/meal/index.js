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
            data:[],
            details:[],
            breakfast_consumed_calories: 0,
            lunch_consumed_calories: 0,
            dinner_consumed_calories: 0,
            goal: '',
            username: ''
        }}

        componentDidMount(){

            const url = "http://10.10.200.25:9000/profile/me"; 
            //const url = "http://localhost:9000/profile"; 
            let headers = new Headers(); 
 
            let token =  localStorage.getItem('AccessToken');
            const AuthStr = 'Bearer '.concat(token);
            
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Authorization',AuthStr);
            headers.append('Access-Control-Allow-Origin', url);
            headers.append('Access-Control-Allow-Credentials', 'true');
          
            headers.append('GET','POST');
        
            fetch(url, {
                headers: headers,
                method: 'GET'
            })
            .then(response => response.json())
            .then(contents => {console.log("in fetch: "+ contents);
                                this.setState ({
                                data: contents,
                                details:contents.user})
                                this.getUserGoal() 
                                this.getUserName()
                              })
            .catch(() => console.log("Can’t access " + url + " response. "))
           

        }

    getUserGoal = () => {
        console.log("Inside",this.state.data.goalPlan)
        this.setState({goal: this.state.data.goalPlan * 100})
    } 

    getUserName = () => {
        console.log("Username", this.state.details.name)
        this.setState({username: this.state.details.name})
    } 


    handleBreakfastCallback = (data) => {
        this.setState({
            breakfast_consumed_calories: data
          }, 
        )
    }
        
    handleLunchCallback = (data) => {
        this.setState({
            lunch_consumed_calories: data
          }, 
        )
    }

    handleDinnerCallback = (data) => {
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
                Remaining_Calories={this.state.goal - (this.state.breakfast_consumed_calories + this.state.lunch_consumed_calories + this.state.dinner_consumed_calories)}
              />
            <Breakfast ParentCallBack={this.handleBreakfastCallback} Goal={this.state.goal}/>  
            <Lunch ParentCallBack={this.handleLunchCallback} Goal={this.state.goal}/> 
            <Dinner ParentCallBack={this.handleDinnerCallback} Goal={this.state.goal}/>
            <Navbar position="sticky"/>
            </div>
        )
    }
}