import React from "react";
import Navbar from "../navbar/index";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const getOptions = (data,calInfo) => {

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

			negativeColor: 'lightblue',
			marker: {
					enabled: false
			},
			name: "Daily Progress"
		},
		{
			data: data,
			color: 'green',
			dashStyle: 'shortdot',
			lineWidth: 4 ,
			marker: {
					enabled: false
			},
			name: "Target goal"
		}
],


}

	return options;
}






export default class Log extends React.Component {	

	constructor(props){
		super(props);
		this.state = {
			daily_calories: [{ }],
			user_goal: '',
			backenddate:''
		
		}
}

	componentDidMount(){
		this.getUserGoalFromDatabase()
		this.getCaloriesFromDatabase()
	
	}
	
	formatDate = () => {
		var d = new Date(),
		  month = '' + (d.getMonth() + 1),
		  day = '' + d.getDate(),
		  year = d.getFullYear();
	
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
	
		return [year, month, day].join('-');
	  }
 
	//   getSignUpDate = () =>{

	// 	const url = "http://10.10.200.25:9000/users/me"; 
	// 	let headers = new Headers();

	// 	let token =  localStorage.getItem('AccessToken');
	// 	const AuthStr = 'Bearer '.concat(token);
		
	// 	headers.append('Content-Type', 'application/json');
	// 	headers.append('Accept', 'application/json');
	// 	headers.append('Authorization',AuthStr);
	// 	headers.append('Access-Control-Allow-Origin', url);
	// 	headers.append('Access-Control-Allow-Credentials', 'true');
	
	// 	headers.append('GET','POST');

	// 	fetch(url, {
	// 			headers: headers,
	// 			method: 'GET'
	// 	})
	// 	.then(response => response.json())
	// 	.then(contents => {console.log("in fetch: "+ contents);
	// 											this.setState ({
	// 											backenddate: contents.date,
	// 											})
	// 										console.log("backend date"+backenddate);
	// 										})
	// 	.catch(() => console.log("Can’t access " + url + " response. "))

	//   }


	getCaloriesFromDatabase = () => {

		const todaysdate = this.formatDate()
		//console.log("Today's date ! ", todaysdate);
		
		// const startdate = this.getSignUpDate()
		// console.log("Sign Up date ! ", startdate);

		var url1 = "http://10.10.200.25:9000/foodIntake/stats?startDate=2019-03-29";
	    var url2 = "&endDate=";
		//const url = url1 + todaysdate + url2 + todaysdate;
	    const url = url1 + url2 + todaysdate;
		  
	
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
													daily_calories: contents,
													
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
											
											})
		.catch(() => console.log("Can’t access " + url + " response. "))
	}

	render() {
		const seriesData = [this.state.user_goal,this.state.user_goal,this.state.user_goal,this.state.user_goal,this.state.user_goal,this.state.user_goal,this.state.user_goal];
		
		const calInfo = this.state.daily_calories.map( function(daily_calories) {
			if( daily_calories.calories !== "0"){
				var info  =  daily_calories.calories        
				return info;
			}
		   });
	
	 
	
		return (
			<div className="logcenter">
			<br/><br/><br/><br/><br/><br/>
				
		 	<HighchartsReact
			 
    		highcharts={Highcharts}
			options={getOptions(seriesData,calInfo)}
			
  			/>
			<Navbar/>
			</div>
		);
	}
	}
	