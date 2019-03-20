import React from "react";
import './index.css';


var body;



class Navbar extends React.Component{
   
    constructor(props) {
        super(props);
    
        this.Logout = this.Logout.bind(this);
      
       
        this.state = {
          data: [],
          open: false,
        };
      }

    
      Logout() {
        body = { token: localStorage.getItem("AccessToken") }
        console.log(localStorage.getItem("AccessToken"))
        const url = "http://10.10.200.25:9000/signOut?token="+localStorage.getItem("AccessToken"); 
        console.log(url)       
        let headers = new Headers();
    
              headers.append('Content-Type', 'application/json');
              headers.append('Accept', 'application/json');
    
              headers.append('Access-Control-Allow-Origin', url);
              headers.append('Access-Control-Allow-Credentials', 'true');
    
              headers.append('PUT', 'GET');
              console.log("1")  
              console.log(JSON.stringify(body))
              fetch(url, {
                  headers: headers,
                  method: 'PUT',
                  body :JSON.stringify(body)
              })
             localStorage.removeItem("AccessToken")
            
              .then(response =>{ })
              .then(contents => {     })
               .catch(() => console.log("Can’t access " + url + " response. "))          
      }


    
    render(){

        return(
        <div>
        <ul style={{color: '#fffa8b'}}>
       
        <li><a href="/meal">My Day</a></li>
        <li><a href="/log">Trends</a></li>
        <li><a href="/recipes" >Recipes</a></li>
        <li><a href="signout"  onClick={this.Logout}></a></li>
        </ul>
            </div>
        )
    }
}


export default Navbar;