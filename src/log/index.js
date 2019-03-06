import React from "react";

import LineChart from 'react-linechart';
//import '../node_modules/react-linechart/dist/styles.css';
export default class Log extends React.Component {	
	render() {
		
		const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
		
		return (
		<div>
			<h1>Ideal calorie intake Vs Seen calorie intake</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />

		</div>
		);
	}
}