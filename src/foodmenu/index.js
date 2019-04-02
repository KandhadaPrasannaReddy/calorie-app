import React from "react";
import { Table, Button } from 'react-bootstrap';

class Foodmenu extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [],
      selectedItem: '1',
    }
  }
  setSelectedItem = (e) => {
    this.setState({
      selectedItem: e.target.value,
    })
  }
  componentDidMount(){

  
    const url = "http://10.10.200.25:9000/foods"; //sanjana
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');
 
    headers.append('GET', 'POST');

    fetch(url, {
        headers: headers,
        method: 'GET'
    })
    .then(response => response.json())
    .then(contents => {
                        this.setState ({
                        data : contents}) 
                      })
    .catch(() => console.log("Can’t access food menu" + url + " response. "))
   
  }
  
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Food Image</th> 
            <th>Food Name</th>
            <th>Food Calorie</th>
            <th>Quantity</th>
            <th>Add</th>
            
          </tr>
        </thead>
        <tbody>
         
            {this.state.data.map((foodItem, index) => {
             return (
                <tr key={index} >
                        <td><img src = {foodItem.ImageUrl} width="80px" height="80px"/></td>
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>                        
                        <td>  <input type="text" name="quantity" autoFocus defaultValue = '1' onChange={this.setSelectedItem}/></td>
                        <td>  <Button bsStyle="primary" bsSize="small" onClick={() => this.props.onAddClick(foodItem, this.state.selectedItem)}>Add</Button></td>
                </tr>
            )
        })}
        </tbody>
        </Table>
        </div>
    )
  }
}

export default Foodmenu;

/*

var fooddata = {
  content: {
      food: [
        {
          id: 1,
          name: "Banana",
          calorie: 80,
          quantity: ''
        },
        {
          id: 2,
          name: "Apple",
          calorie: 75,
          quantity: ''
        },
        {
          id: 3,
          name: "Walnuts",
          calorie: 95,
          quantity: ''
        }
      ]
   }
};
*/