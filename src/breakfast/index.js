import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Foodmenu from '../foodmenu/index';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 1010,
  left: 'auto',
  position: 'fixed',
};

class Breakfast extends React.Component{
  
  state = {
    selectedItems: [],
    selectDialogOpen: false,
    Total_Calories : ''
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
      console.log('Quantity in breaky: ' + foodItem.quantity);
      
      this.setState((state) => {
          const {selectedItems} = state;
          const _items = [...selectedItems, {
            ...foodItem,
            quantity: value
          }];
          console.log({_items});
          return {selectedItems: _items, selectDialogOpen:false};
      })

      //save items to database
  
    }

    handleOnChange = (value, index) => {
      //console.log("In handleOnChange", e, index)
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
     console.log(total_calories_count);
     this.setState({
        Total_Calories : total_calories_count
      });

    }

    notifyTotalCalories = () => {
      console.log('Total cal' , this.state.Total_Calories);
    }

    onSaveClick = () => {
      this.calculateMealCalories();
      this.notifyTotalCalories();
    }

    render(){
      console.log(this.state.selectedItems)
      return (
        <div>

            <Wrapper>
                <Title>
                    Breakfast               
                      <Fab size="medium" className="fab" style={style} color="secondary" aria-label="Add"  onClick={this.handleDialogOpen}>
                        <AddIcon />
                      </Fab>
                </Title>
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
            <Button_OK onClick={this.onSaveClick} > Save items </Button_OK>  
        
        </div>
    );
    }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Coloumn = styled.div`
  float : right;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  //font-size: 1em;
  font-size: 12px;
  display: inline-block
  display: block;
  margin: 1em;
  //padding: 5px;
  width: 150px;
  height: 40px;
  padding: 0.50em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  :hover {      
    color: red;
  }
  ::after {
    content: '➕';
  }
`;




const  Button_OK = styled.button`
  float : center;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 2px 1px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;
const Button_Cancel = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 2px 1px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;


export default Breakfast;
