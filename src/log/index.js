import React from "react";
import Navbar from "../navbar/index";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

var UserGoal,info;



var daily_calories = [  
						{ "date"  : "26-03-2019", "calorie_count":2000 },
						{ "date"  : "27-03-2019", "calorie_count":2500 },
						{ "date"  : "28-03-2019", "calorie_count":3000 },	
					 ]

console.log(daily_calories); 
var calInfo = daily_calories.map( function(daily_calories) {
 if( daily_calories.calorie_count !== "0"){
      info  =  daily_calories.calorie_count        
     return info;
 }
});
console.log(calInfo);






const options = {
			title: {
				text: 'My calorie progress'
			}, 
			chart: {
				//marginBottom: 40,
				spacingRight: 100
			},

		xAxis: {
			categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			labels: {
					format: 'Day {value}',
					style: {
							color: 'black'
					},
					// formatter: function () { return ddd[this.value][0]; },
			},
			title: {
				text: 'Daily Progress'
			}
	},
		yAxis: {
			labels: {
					format: '{value} cals'
			},
			title: {
				text: 'Daily calorie consumption '
		}
	},
		series: [
			{
				data: calInfo,
				color: 'blue',

				//negativeColor: 'lightblue',
				marker: {
						enabled: false
				},
				name: "Progress"
			},
			{
				data: [],
				//data : [2500, 2500, 2500,2500],
				color: 'green',
				dashStyle: 'shortdot',
				lineWidth: 3 ,
				marker: {
						enabled: false
				},
				name: "Target goal"
			}
	],


}


export default class Log extends React.Component {	

	constructor(props){
		super(props);
		this.state = {
			daily_calorie_data: [],
			user_goal: '',
		
		}
}

	componentDidMount(){
		this.getUserGoalFromDatabase()
		//this.getCaloriesFromDatabase()
		
	}

	getCaloriesFromDatabase = () => {
		const url = "http://10.10.200.25:9000/profile/me"; 
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
													daily_calorie_data: contents,
												})
												
											})
		.catch(() => console.log("Can’t access " + url + " response. "))
	}

	
	getUserGoalFromDatabase = () => {
		const url = "http://10.10.200.25:9000/profile/me"; 
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
												user_goal: contents.goalPlan,
											 

												})
												UserGoal= this.state.user_goal
												console.log("state goal", UserGoal)	
											})
		.catch(() => console.log("Can’t access " + url + " response. "))
	}

	// setToGlobalUserGoal= () => {
	// 	UserGoal= this.state.user_goal
	// 	console.log("global goal", UserGoal)
		
	// }
	render() {
		options.series[1].data = [this.state.user_goal,this.state.user_goal];
		UserGoal = options.series[1].data;
		console.log("option series 1 "+ UserGoal);
		console.log("option series 0 "+ options.series[0].data);
	
		return (
			<div className="logcenter">
				
		 	<HighchartsReact
			 
    		highcharts={Highcharts}
			options={options}
			
  			/>
			<Navbar/>
			</div>
		);
	}
	}
	