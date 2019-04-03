import React from "react";
import Navbar from "../navbar/index";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

var fdate;

const getOptions = (data,calInfo) => {

	const options = {
		title: {
			text: 'My calorie progress',
			style:{ "font-size": "35px",
	
            fontWeight: 'bold'},
				
			margin:50
		}, 
		chart: {
			//marginBottom: 40,
			spacingRight: 100,
			height: "1200",
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
				format: '{value} Kcals'
		},
		title: {
			text: 'Daily calorie consumption '
	}
},
legend: {
	align: 'right',
	verticalAlign: 'top',
	layout: 'vertical',
	x: 0,
	y: 100,
	
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
			registration_date:'',
			startDate:''
		
		}
}

	componentDidMount(){
		this.getSignUpDate();
		this.getUserGoalFromDatabase()
	
	
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
 
	  getSignUpDate = () =>{

		const url = "http://10.10.200.25:9000/users/me"; 
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
								registration_date: contents.registrationDate,
							})
							console.log("backend date"+this.state.registration_date);
							var date = new Date(this.state.registration_date),
							mnth = ("0" + (date.getMonth()+1)).slice(-2),
							day  = ("0" + date.getDate()).slice(-2);
							 console.log([ date.getFullYear(), mnth, day ].join("-"));
							 fdate= [ date.getFullYear(), mnth, day ].join("-");
							this.setState({
								startDate:fdate 
							})
							console.log("date from func:"+ this.state.startDate)
							this.getCaloriesFromDatabase(this.state.startDate)
							
						  })
		.catch(() => console.log("Can’t access " + url + " response. "))

	  }

	getCaloriesFromDatabase = (fdate) => {

		const todaysdate = this.formatDate()
		console.log("Today's date ! ", todaysdate);
		
		const regdate = fdate;
	    console.log("Sign Up date ! "+ regdate);

		var url1 = "http://10.10.200.25:9000/foodIntake/stats?startDate=";
	    var url2 = "&endDate=";
		const url = url1 + regdate + url2 + todaysdate;
	    //const url = url1 + url2 + todaysdate;
		  
	
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
			
				
		 	<HighchartsReact
			 
    		highcharts={Highcharts}
			options={getOptions(seriesData,calInfo)}
			
  			/>
			<Navbar/>
			</div>
		);
	}
	}
	