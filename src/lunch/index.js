import React from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Foodmenu from '../foodmenu/index';
import { ToastContainer, toast } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Foodtable from "../foodtable/index";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import '../App.css';


var body = [], previousStoredData = [];


class Lunch extends React.Component {

  state = {
    selectedItems: [],
   
    Total_Calories: '',

    mealType: '',
    food_quantity: '',
    food_ID: '',

    previousSelectedItems: [{
      Id: '',
      name: '',
      calories: '',
      quantity: ''
    }],
    previousItems: [{}],
    previousFoodItems: [],

    open: false,
  }

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }


  componentDidMount() {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        this.retrievePreviousData()
      } else {
        this.retrievePreviousData()
        //alert("This page is not reloaded");
      }
    }
  }

  formatDate = () => {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  retrievePreviousData = () => {

    const todaysdate = this.formatDate()
    console.log("Today's date ! ", todaysdate);

    var url1 = "http://10.10.200.25:9000/foodIntake/intake?startDate=";

    var url2 = "&endDate=";

    //const url = "http://10.10.200.25:9000/foodIntake/intake?startDate=2019-03-28&endDate=2019-03-28";

    const url = url1 + todaysdate + url2 + todaysdate;
  
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
        const lunchData = contents.filter((item) => (item.mealType === 'LUNCH'));
        this.setState({
          previousSelectedItems: lunchData.map((item) => {
            return {
              ...item.food,
              quantity: item.quantity
            }
          })
        }, () => {
          console.log(this.state.previousSelectedItems);
          this.getPreviousLunchCals();
        })

      })

      .catch(() => console.log("Can’t access lunch  previous data" + this.state.errors + " response. "));
  }

  routeChange() {
    let path = `foodmenu`;
    this.props.history.push(path);
  }

 
  getPreviousLunchCals= () => {
    var info = 0;
    console.log("CAL INFOoooo lunchhhh", this.state.previousSelectedItems);
    this.state.previousSelectedItems.map( function(daily_calories) {
			if( daily_calories.calories !== "0"){
				 info  =  info + daily_calories.calories       
			}
       });
       console.log("CAL INFO lunch", info);
       this.props.ParentCallBack(info);            
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };


  onAddClick = (foodItem, value) => {
    this.setState((state) => {
      const { selectedItems } = state;
      const _items = [{
        ...foodItem,
        quantity: value,
        mealType: '1'

      }];
      //console.log({_items});
      console.log("Selected items in lunch", { selectedItems });
      console.log(" items in lunch", { _items });
      this.setState({ open: false });
      return { selectedItems: _items, selectDialogOpen: false };
    })
  }


  addToFoodIntakeTable = () => {
    this.state.selectedItems.map(function (item) {
      body = [...body, {
              mealType: '1',
              quantity: item.quantity,
              foodId: item.Id
      }]
      console.log("iterating over items id:", item.Id)
    })

    console.log("body is", body)

    //post to db
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

      .catch(() => console.log("lunch - Can’t access " + this.state.errors + " response. "));
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

    if (total_calories_count < this.calculateMinimumLunchCalorieLimit()) {
      console.log('total Lunch cals', total_calories_count)
      console.log('min Lunch cals', this.calculateMinimumLunchCalorieLimit())
      toast.warn("Calorie limit is less than maximum Lunch calorie. Bon apetit! 🍳", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      });
    }

    if (total_calories_count > this.calculateMaximumLunchCalorieLimit()) {
     
      toast.warn("Oops! Calorie limit is more than maximum Lunch calorie.🍳", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      });
    }

    this.setState({
      Total_Calories: total_calories_count
    });
    this.props.ParentCallBack(total_calories_count)
  }

  calculateMinimumLunchCalorieLimit = () => {
    return ((this.props.Goal * 35) / 100).toFixed(2);
  }

  calculateMaximumLunchCalorieLimit = () => {
    return ((this.props.Goal * 40) / 100).toFixed(2);
  }


  onSaveClick = () => {
    this.calculateMealCalories();
    this.addToFoodIntakeTable();
  }

  render() {
    console.log("in  render selected items", this.state.selectedItems)

    return (
      <div>

        <Wrapper>
          <Title>
          Lunch <button class="button5" onClick={this.handleClickOpen}> + </button>   
         
          </Title>
          (min:{this.calculateMinimumLunchCalorieLimit()} kcal, max: {this.calculateMaximumLunchCalorieLimit()} kcal)
            </Wrapper>

        <Dialog   open={this.state.open}  onClose={this.onAddClick}  onClose={this.handleClose}  aria-labelledby="simple-dialog-title">
          <DialogTitle id="simple-dialog-title">Select food items:  </DialogTitle>  
          <DialogActions>
              <IconButton  color="inherit" aria-label="Close"  onClick={this.handleClose}>
                   <CloseIcon />
               </IconButton>
           </DialogActions>
         
          <Foodmenu onAddClick={this.onAddClick} onChange={this.handleOnChange} />
        </Dialog>

        {

          <Foodtable Items={this.state.selectedItems.concat(this.state.previousSelectedItems)} />

        }
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" size="large" color="primary" onClick={this.onSaveClick} >
            Save items
            </Button>
        </MuiThemeProvider>
        <ToastContainer />
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
  font-size: 2.5em;
  text-align: left;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background:#d2e7ff;
`;


export default Lunch;
