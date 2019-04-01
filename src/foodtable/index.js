import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Foodtable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          totalCalories: ''
        }
      }

    calculateTotalCalories = () => {
      var total = 0;
      this.props.Items.map((food, id) => (
        total = total + food.calories * food.quantity

      ))
      console.log("total cal", total)
      this.setState({
        totalCalories: total
      })
      return(total)
    }

    render(){
        return(
            <div>
                <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      
                      <TableCell>Image</TableCell>
                      <TableCell  align="right">Fooditem (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total Calories</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.Items.map((food, index) => (
                    

                      <TableRow index={food.Id}>
                        <TableCell component="th" scope="row">{food.ImageUrl}</TableCell>
                        <TableCell align="right">{food.name}</TableCell>
                        <TableCell align="right">{food.calories}</TableCell>
                        <TableCell align="right">{food.quantity}</TableCell>
                        <TableCell align="right">{food.calories * food.quantity}</TableCell>
                       
                      </TableRow>

                    ))}
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell align="right">{this.props.Items.reduce((result, item) => {
                        return result + item.quantity * item.calories;
                      }, 0)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                </Paper>
            </div>
        )
    }
}