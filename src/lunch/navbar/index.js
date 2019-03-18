import React from "react";
import './index.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

var body;
// const styles = {
//     root: {
//       width: 500,
//     },
//   };

  
// class Navbar extends React.Component{
//     state = {
//         value: 0,
//       };
    
//     handleChange = (event, value) => {
//         this.setState({ value });
//     };
//     render() {
//         const { classes } = this.props;
//         const { value } = this.state;
    
//         return (
//           <BottomNavigation
//             value={value}
//             onChange={this.handleChange}
//             showLabels
//           >
//             <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//             <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//             <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//           </BottomNavigation>
//         );
//       }
//     }

//     export default Navbar;
class Navbar extends React.Component{
   
    constructor(props) {
        super(props);
    
        this.Logout = this.Logout.bind(this);
       
        this.state = {
          isOpen: false,
          data: []
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
        <li><a href="/goal">My Profile</a></li>
        <li><a href="/meal">My Day</a></li>
        <li><a href="/log">Trends</a></li>
        <li><a href="/recipes" >Recipes</a></li>
        <li className="li1"><a href="signout"  onClick={this.Logout}>Logout</a></li>
        </ul>
        </div>
        )
    }
}


export default Navbar;