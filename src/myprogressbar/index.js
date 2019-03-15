import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Snackbar from '@material-ui/core/Snackbar';

//update snackbar style to warning
export default class MyProgressBar extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        open: false,
    }

    handleClick = () => {
        this.setState({ open: true });
      };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
    }

    render(){
        if(this.props.meal_calories < 100){
            return(
                <div>
                    <ProgressBar animated="true" striped variant="warning"  
                        now={this.props.meal_calories} 
                        label={`${this.props.meal_calories}%`} />
                </div>
            )}
        else{
            return(
                <div>
                        <Snackbar
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                        open={true}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        
                        variant="warning"
                        message={<span id="message-id">Uh oh! Your calorie intake is more than required!</span>}
                       
        />
                </div>
            )}
    }
}
