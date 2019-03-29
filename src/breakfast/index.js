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
import { ToastContainer, toast } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import '../App.css';

var body = [], previousStoredData = [];

class Breakfast extends React.Component {

  state = {
    selectedItems: [],
    selectDialogOpen: false,
    Total_Calories: '',

    mealType: '',
    food_quantity: '',
    food_ID: '',

    previousMealType: '',
    previousFoodQuantity: '',
    previousFoodId: '',

    previousItems: [{}],
    previousFoodItems: []
  }

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);

  }

  componentDidMount() {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        this.retrievePreviousData()
        alert("This page is reloaded");
      } else {
        alert("This page is not reloaded");
      }
    }
  }

  retrievePreviousData = () => {
    const url = "http://10.10.200.25:9000/foodIntake/intake?startDate=2019-03-28&endDate=2019-03-28";
    let headers = new Headers();

    let token = localStorage.getItem('AccessToken');
    const AuthStr = 'Bearer '.concat(token);

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', AuthStr);
    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'PUT');


    fetch(url, {
      headers: headers,
      method: 'GET',
      previousStoredData: JSON.stringify(previousStoredData)
    })

      .then(response => response.json())
      .then(contents => {
        console.log("Previous data contents", contents);
        this.setState({
          previousItems: contents
        })

        {
          this.state.previousItems.map((food, index) => {
            if (food.mealType === "BREAKFAST") {
              console.log("breakfast item", food.food)
              console.log("prev food item id", food.food.Id)
              console.log("prev food item name", food.food.name)
              console.log("prev food item cal", food.food.calories)
              console.log("prev food item quantity", food.quantity)
              return (
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
                    {this.state.previousItems.map((food, index) => (
                    

                      <TableRow index={food.food.Id}>
                        <TableCell component="th" scope="row">
                          {food.food.name}
                        </TableCell>
                        <TableCell align="right">{food.food.calories}</TableCell>
                        <TableCell align="right">{food.quantity}</TableCell>
                        <TableCell align="right">{food.food.calories * food.quantity}</TableCell>
                      </TableRow>

                    ))}
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell align="right">{this.state.Total_Calories}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                </Paper>)
            }

          })
        }



      })

      .catch(() => console.log("Can’t access previous data" + this.state.errors + " response. "));
  }


  routeChange() {
    let path = `foodmenu`;
    this.props.history.push(path);
  }

  handleDialogOpen = () => {
    this.setState({ selectDialogOpen: true })
  }

  onAddClick = (foodItem, value) => {
    console.log('Quantity in breaky: ' + foodItem.quantity);

    this.setState((state) => {
      const { selectedItems } = state;
      const _items = [...selectedItems, {
        ...foodItem,
        quantity: value,
        mealType: '0'

      }];
      console.log({ _items });
      return { selectedItems: _items, selectDialogOpen: false };
    })
  }


  addToFoodIntakeTable = () => {

    this.state.selectedItems.map(function (item) {
      body = [...body, {
        mealType: '0',
        quantity: item.quantity,
        food_Id: item.Id
      }]
      console.log("iterating over items id:", item.Id)
    })

    console.log("body is", body)
    return 1;
  }


  handleOnChange = (value, index) => {
    this.setState({
      selectedItems: this.state.selectedItems.map((obj, i) => {
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
    //check limit

    if (total_calories_count < this.calculateMinimumBreakfastCalorieLimit()) {
      console.log('total breakfast cals', total_calories_count)
      console.log('min brekafast cals', this.calculateMinimumBreakfastCalorieLimit())
      toast.warn("Calorie limit is less than maximum breakfast calorie. Bon apetit! 🍳", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      });
    }

    if (total_calories_count > this.calculateMaximumBreakfastCalorieLimit()) {
      //alert('Oops! Calorie limit is more than maximum breakfast calorie.🍳')
      toast.warn("Oops! Calorie limit is more than maximum breakfast calorie.🍳", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      });
    }

    this.setState({
      Total_Calories: total_calories_count
    });
    this.props.ParentCallBack(total_calories_count)
  }

  calculateMinimumBreakfastCalorieLimit = () => {
    return ((this.props.Goal * 30) / 100).toFixed(2);
  }

  calculateMaximumBreakfastCalorieLimit = () => {
    return ((this.props.Goal * 35) / 100).toFixed(2);
  }

  onSaveClick = () => {
    this.calculateMealCalories();
    this.addToFoodIntakeTable();
  }

  render() {
    console.log(this.state.selectedItems)

    const url = "http://10.10.200.25:9000/foodIntake";
    let headers = new Headers();

    let token = localStorage.getItem('AccessToken');
    const AuthStr = 'Bearer '.concat(token);

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', AuthStr);
    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('POST', 'PUT');


    fetch(url, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(body)
    })

      .then(response => response.json())
      .then(contents => {
        console.log(contents);

      })

      .catch(() => console.log("Can’t access " + this.state.errors + " response. "));

    return (
      <div>

        <Wrapper>
          <Title>
            Breakfast         <button class="button5" onClick={this.handleDialogOpen}> + </button>
            {/* <Fab size="medium" className="fab" style={style} color="secondary" aria-label="Add"  onClick={this.handleDialogOpen}>
                        <AddIcon />
                      </Fab> */}

          </Title>
          (min:{this.calculateMinimumBreakfastCalorieLimit()} kcal, max: {this.calculateMaximumBreakfastCalorieLimit()} kcal)
            </Wrapper>


        <Dialog open={this.state.selectDialogOpen} onClose={this.onAddClick} aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Select food items:</DialogTitle>
          <Foodmenu onAddClick={this.onAddClick} onChange={this.handleOnChange} />
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
                    <TableCell align="right">{row.calories * row.quantity}</TableCell>
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
        {/* <Button_OK onClick={this.onSaveClick} > Save items </Button_OK>   */}
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={this.onSaveClick} >
            Save items
            </Button>
        </MuiThemeProvider>
        < ToastContainer />
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


export default Breakfast;
