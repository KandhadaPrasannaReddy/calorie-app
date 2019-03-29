import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Foodmenu from '../foodmenu/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ToastContainer,toast } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

import './dinner.css';


var body=[];


class Dinner extends React.Component{
  
  state = {
    selectedItems: [],
    selectDialogOpen: false,
    Total_Calories : '',

    mealType: '',
    food_quantity: '',
    food_ID: '',  
  }

    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }


    routeChange(){
        let path = `foodmenu`;
        this.props.history.push(path);
    }

    handleDialogOpen = () => {
      this.setState({selectDialogOpen: true})
    }

    onAddClick = (foodItem, value) => {
      console.log('Quantity in dinner: ' + foodItem.quantity);
      
      this.setState((state) => {
          const {selectedItems} = state;
          const _items = [...selectedItems, {
            ...foodItem,
            quantity: value,
            mealType: '2'

          }];
          console.log({_items});
          return {selectedItems: _items, selectDialogOpen:false};
      })
    }


    addToFoodIntakeTable = () => {
      this.state.selectedItems.map(function(item) {
            body = [...body, {  
                    mealType: '2',
                    quantity: item.quantity,
                    foodId: item.Id
                  }]
            console.log("iterating over items id:", item.Id)
        })

        console.log("body is", body)
  }


    handleOnChange = (value, index) => {
      this.setState({
        selectedItems: this.state.selectedItems.map((obj, i)=> {
            return {
              ...obj,
              quantity: value,
            }
        })
      })
    }

    calculateMealCalories = () => {

      var total_calories_count = 0;
      this.state.selectedItems.map(item =>
        total_calories_count = total_calories_count + (item.calories * item.quantity) 
      )
     //console.log(total_calories_count);

     if( total_calories_count < this.calculateMinimumDinnerCalorieLimit()){
      toast.warn("Calorie limit is less than maximum dinner calorie. Bon apetit! 🥘", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000 
      });
    }

     if( total_calories_count > this.calculateMaximumDinnerCalorieLimit()){
       toast.warn("Oops! Calorie limit is more than maximum dinner calorie.🥘", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000 
      });
     }


     this.setState({
        Total_Calories : total_calories_count
      });
      this.props.ParentCallBack(total_calories_count)
    }

    calculateMinimumDinnerCalorieLimit = () => {
      return ((this.props.Goal * 25) / 100).toFixed(2);
    }

    calculateMaximumDinnerCalorieLimit = () => {
      return ((this.props.Goal * 35) / 100).toFixed(2);
    }

    onSaveClick = () => {
      this.calculateMealCalories();
      this.addToFoodIntakeTable();
    }

    render(){
      console.log(this.state.selectedItems)

      const url = "http://10.10.200.25:9000/foodIntake"; 
      let headers = new Headers();
    
      let token =  localStorage.getItem('AccessToken');
      const AuthStr = 'Bearer '.concat(token);
      
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Authorization',AuthStr);
      headers.append('Access-Control-Allow-Origin', url);
      headers.append('Access-Control-Allow-Credentials', 'true');
    
      headers.append('POST','PUT');
      
     
      fetch(url, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify(body) 
      })
    
      .then(response => response.json())
      .then(contents => {console.log(contents);
    })
    
      .catch(() => console.log("Can’t access " +this.state.errors + " response. "));
 
      return (
        <div>

            <Wrapper>
                <Title>
                 Dinner   <button class="button5" onClick={this.handleDialogOpen}> + </button>   {/* <Fab size="medium" style={style} color="secondary" aria-label="Add"  onClick={this.handleDialogOpen}>
                        <AddIcon />
                      </Fab> */}
                       {/* { <Button_OK onClick={this.handleDialogOpen}>
                            Add
                       </Button_OK>} */}
                      
                </Title>
                (min:{this.calculateMinimumDinnerCalorieLimit()} kcal, max: {this.calculateMaximumDinnerCalorieLimit()} kcal)
            </Wrapper>


            <Dialog open={this.state.selectDialogOpen} onClose={this.onAddClick} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Select food items:</DialogTitle>
                <Foodmenu onAddClick={this.onAddClick} onChange={this.handleOnChange}/>
            </Dialog>
            { 
                
                <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Fooditem (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total Calories</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.selectedItems.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.calories*row.quantity}</TableCell>
                      </TableRow>
                    
                    ))}
                      <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell align="right">{this.state.Total_Calories}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
                
            }
            <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" onClick={this.onSaveClick} >
            Save items
            </Button>
          </MuiThemeProvider>
           <ToastContainer/>
        </div>
    );
    }
}


const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;


export default Dinner;
