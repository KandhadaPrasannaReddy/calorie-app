import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import MyProgressBar from '../myprogressbar/index';
import Alert from 'react-bootstrap/Alert'
import { ToastContainer, toast } from 'react-toastify';
import { Button} from 'reactstrap';
import './app.css';

var fdate;
export default class Goaltab extends React.Component{
 

    constructor(props){
        super(props);
        this.state = {
            data: [],
            details:[],
            user:[], 
            registration_date: '',
            startDate:''

        }
    }

 
    componentDidMount(){
         
        this.getRegistrationDateOfUser();
         //check for 30 day notification 
       
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
                                details: contents,
                                user:contents.user,
                            })
                          })
        .catch(() => console.log("Can’t access " + url + " response. "))
       
    
    }
    

    getRegistrationDateOfUser = () => {
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
                                registration_date : contents.registrationDate,
                            })
							var date = new Date(this.state.registration_date),
							mnth = ("0" + (date.getMonth()+1)).slice(-2),
							day  = ("0" + date.getDate()).slice(-2);
							 console.log([ date.getFullYear(), mnth, day ].join("-"));
							 fdate= [ date.getFullYear(), mnth, day ].join("-");
							this.setState({
								startDate:fdate 
                            })
                            console.log("reguser",this.state.startDate)
                             this.checkNotificationDuration(this.state.startDate);
                          })
        .catch(() => console.log("Can’t access sign up date" + url + " response. "))
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
 

    checkNotificationDuration = (regdate) => {
        var todayDate = this.formatDate();


        var signUpDate = regdate; 
        console.log("tday"+todayDate)
        console.log("sday"+signUpDate)

        var timeDiff = todayDate - signUpDate;
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        console.log(daysDiff, "sign up dif");
        if(daysDiff === 30 ){
            toast.info("Update your profile. It's time to see your progress!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000 
            });    
         
        }
    }



     openNav= () => {
        document.getElementById("mySidenav").style.width = "250px";
       
      }
      
     closeNav= () =>{
        document.getElementById("mySidenav").style.width = "0";
        
       
      }



    render(){       
        var meal_calories = 0
        if((this.props.Total_Meal_Calories > 0) && (this.props.Goal > 0)){
            meal_calories = (this.props.Total_Meal_Calories / this.props.Goal) * 100;
        }
        return(
            <div>
                <MyProgressBar Total_Meal_Calories={this.props.Total_Meal_Calories} meal_calories_percentage={meal_calories} Goal={this.props.Goal}/>
            
                <Alert variant="success">
                {/* update with user name */}
                <Alert.Heading>Hey {this.state.user.name}, nice to see you again!👋</Alert.Heading>
                <hr />
                <p>
                    <pre>Your goal: {this.props.Goal} kcal</pre>
                    <pre>Total meal calories : {this.props.Total_Meal_Calories} kcal</pre>
                    <pre>Remaining calories left: {this.props.Remaining_Calories} kcal</pre>          
                </p> 
  
               <div class='_profile'  onClick={this.openNav}>
                    <div class='_head'  onClick={this.openNav}></div>
                    <div class='_body'  onClick={this.openNav}></div>
                </div>

                <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a><br></br><br></br>
                        <span>Username: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.user.name}</span><br></br><br></br>
                        <span>Age: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.age}</span><br></br><br></br>
                        <span>Height: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.height}</span><br></br><br></br>
                        <span>Weight: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.weight}</span><br></br><br></br>
                        <span>Goal: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.goalPlan}</span><br></br><br></br>
                        <a href ="/goal"> <Button  type="button"> Update Profile </Button></a>
                </div>


                </Alert>
                <ToastContainer />
            </div>
        )
    }
}