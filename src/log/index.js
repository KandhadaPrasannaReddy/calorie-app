import React from "react";
import Navbar from "../navbar/index";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const options = {


		title: {
    text: 'My calorie progress'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

export default class Log extends React.Component {	
	render() {
		
		return (
			<div>
				
		 	<HighchartsReact
    		highcharts={Highcharts}
    		options={options}
  		/>
			<Navbar/>
			</div>
		);
	}
	}
