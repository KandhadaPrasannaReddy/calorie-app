import React from "react";
import './index.css';
var body;

class Navbar extends React.Component{
   
    constructor(props) {
        super(props);
    
        this.Logout = this.Logout.bind(this);
   
      
       
        this.state = {
          
            details:[],
            user:[]
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
        <ul style={{color: '#D65076'}}>
       
        <li><a href="/meal"><font size="6" font-family="Georgia" ><b>My Day</b></font></a></li> &nbsp;
        <li><a href="/log"><font size="6"><b>Trends</b></font></a></li>&nbsp;
        <li><a href="/recipes"><font size="6"><b>Recipes</b></font></a></li>&nbsp;
     
        <li className="li1" ><a href="signout"  onClick={this.Logout}><font size="6"><b>Logout</b></font></a></li>
       
        </ul>
        </div>
    //     <Nav variant="pills" >
    //     <Nav.Item>
    //     <Nav.Link href="/meal">My Day</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/log" eventKey="link-1">Trends</Nav.Link>
    //    </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="/recipes" eventKey="link-2">
    //         Recipes
    //         </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href="/viewprofile" >
    //         View profile
    //         </Nav.Link>
    //     </Nav.Item>

    //     <Nav.Item>
    //         <Nav.Link href="signout" onClick={this.Logout} >
    //         Logout
    //         </Nav.Link>
    //     </Nav.Item>
    //     </Nav>



        )
    }
}


export default Navbar;





















// import React from "react";
//  import { Navbar, Nav} from 'react-bootstrap';

//  export default class  Navbar extends React.Component{
//      render(){
//          return(
//              <div>
// <Navbar  collapseOnSelect className="Navbar"  expand="xl" >
// <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//     <Nav.Link href="/meal">My Day</Nav.Link>
//       <Nav.Link href="/log">Trends</Nav.Link> 
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">Logout</Nav.Link>
//     </Nav>
//     </Navbar.Collapse>
//     </Navbar>; 
//             </div>
//         )

//     }
// }


