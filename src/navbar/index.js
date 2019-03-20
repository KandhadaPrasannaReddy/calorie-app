import React from "react";
import './index.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

var body;

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  

  

class Navbar extends React.Component{
   
    constructor(props) {
        super(props);
    
        this.Logout = this.Logout.bind(this);
        this.Viewprofile = this.Viewprofile.bind(this);
       
 

        this.state = {
          data: [],
          open: false,
        };
      }

      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    

      Viewprofile(){
        return (
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Slide in alert dialog
              </Button>
              <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
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
        <li onClick={this.Viewprofile}>View Profile</li>
        <li className="li1"><a href="signout"  onClick={this.Logout}>Logout</a></li>
        </ul>
            </div>
        )
    }
}


export default Navbar;