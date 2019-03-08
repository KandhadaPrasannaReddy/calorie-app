import React from "react";
// import LineChart from 'react-linechart';
// //import '../node_modules/react-linechart/dist/styles.css';
import {LineChart} from 'react-easy-chart';
import Navbar from "../navbar/index";

export default class Log extends React.Component {	
	render() {
		
		return (
			<div>
				<LineChart
    			axes
    			xDomainRange={[0, 100]}
				yDomainRange={[0, 100]}
				lineColors={['pink', 'cyan']}
				axisLabels={{x: 'Day', y: 'Calories'}}
    			margin={{top: 0, right: 0, bottom: 100, left: 100}}
    			width={250}
    			height={250}
    			interpolate={'cardinal'}
    data={[
      [
        { x: 1, y: 2000 },
        { x: 2, y: 1250 },
        { x: 3, y: 2500 },
        { x: 4, y: 2523 },
        { x: 5, y: 2893 },
		{ x: 6, y: 2500 },
		{ x: 7, y: 2580 },
		{ x: 8, y: 2580 },
		{ x: 9, y: 2580 },
		{ x: 10, y: 2580 },
		{ x: 11, y: 2580 },
		{ x: 12, y: 2580 },
		{ x: 13, y: 2580 },
		{ x: 14, y: 2580 },
		{ x: 15, y: 2580 },
	  ], 
	  [
        { x: 10, y: 40 },
        { x: 20, y: 30 },
        { x: 30, y: 25 },
        { x: 40, y: 60 },
        { x: 50, y: 22 },
        { x: 60, y: 9 }
      ]
    ]}
  />
  			<Navbar/>
			</div>
		);
	}
	}
