import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MyProgressBar from '../myprogressbar/index';
import Alert from 'react-bootstrap/Alert'

export default class Goaltab extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            data: [],
            username: '',
        }
    }

    // componentDidMount(){

    //     const url = "http://10.10.200.25:9000/profile"; 
    //     //const url = "http://localhost:9000/profile"; 
    //     let headers = new Headers();

    //     let token =  localStorage.getItem('AccessToken');
    //     const AuthStr = 'Bearer '.concat(token);
        
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //     headers.append('Authorization',AuthStr);
    //     headers.append('Access-Control-Allow-Origin', url);
    //     headers.append('Access-Control-Allow-Credentials', 'true');
      
    //     headers.append('GET','POST');
    
    //     fetch(url, {
    //         headers: headers,
    //         method: 'GET'
    //     })
    //     .then(response => response.json())
    //     .then(contents => {console.log("in fetch: "+ contents);
    //                         this.setState ({
    //                         data: contents})
    //                         this.getUserName() 
    //                       })
    //     .catch(() => console.log("Can’t access " + url + " response. "))
    // }

    // getUserName = () => {
    //     this.state.data.map((item) => {
    //         console.log(item.user_name)
    //         return(
    //             this.setState({username: item.user_name})
    //         )
    //     })  
    // } 


    render(){
        var meal_calories = (this.props.Total_Meal_Calories / this.props.Goal) * 100;
        return(
            <div>
                <MyProgressBar meal_calories={meal_calories}/>
            
                <Alert variant="success">
                {/* update with user name */}
                <Alert.Heading>Hey {this.props.Name}, nice to see you again! <span>👋</span> </Alert.Heading>
                <hr />
                <p>
                    <pre>Your goal: {this.props.Goal} kcal</pre>
                    <pre>Total meal calories : {this.props.Total_Meal_Calories} kcal</pre>
                    <pre>Remaining calories left: {this.props.Remaining_Calories} kcal</pre>          
                </p>
                </Alert>
            </div>
        )
    }
}

{/* <ProgressBar animated="true" striped variant="warning"  
now={meal_limit_check} 
label={`${((this.props.Total_Meal_Calories / this.props.Goal) * 100).toFixed(2)}%`} /> */}