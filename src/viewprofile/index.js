import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


export default class Viewprofile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      details:[],
      user:[]
    
    //    username: '',
    };
  }
  componentDidMount(){

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


  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  
  }

  render() {
    return (

      <div>
        <Button id="Popover1" type="button">
         View Profile<i class='fas fa-power-off'></i>
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Profile</PopoverHeader>
          <PopoverBody>
            <span>Username: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.user.name}</span><br></br>
            <span>Age: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.age}</span><br></br>
            <span>Height: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.height}</span><br></br>
            <span>Weight: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.weight}</span><br></br>
            <span>Goal: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.details.goalPlan}</span><br></br>
         
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}




























// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

// class Viewprofile extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//           Slide in alert dialog
//         </Button>
//         <Dialog
//           open={this.state.open}
//           TransitionComponent={Transition}




//           keepMounted
//           onClose={this.handleClose}
//           aria-labelledby="alert-dialog-slide-title"
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogTitle id="alert-dialog-slide-title">
//             {"Use Google's location service?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-slide-description">
//               Let Google help apps determine location. This means sending anonymous location data to
//               Google, even when no apps are running.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Disagree
//             </Button>
//             <Button onClick={this.handleClose} color="primary">
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

// export default Viewprofile;