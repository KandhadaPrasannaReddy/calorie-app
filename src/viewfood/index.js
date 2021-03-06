import React from "react";
import { Table } from 'react-bootstrap';

class Viewfood extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [],
     
    }}

  componentDidMount(){

    //const url = "http://10.10.200.25:9000/foods"; 
    const url = "http://localhost:9000/foods"; 
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
    .then(contents => {console.log("in fetch: "+ contents);
                        this.setState ({
                        data : contents}) 
                      })
    .catch(() => console.log("Can’t access " + url + " response. "))
   
  }
  
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Calorie</th>
          
          </tr>
        </thead>
        <tbody>
         
            {this.state.data.map((foodItem, index) => {
             return (
                <tr key={index} >
                        <td>{foodItem.name}</td>
                        <td>{foodItem.calories}</td>                        
                
                        
                </tr>
            )
        })}
        </tbody>
        </Table>
        </div>
    )
  }
}
//ReactDOM.render(<Foodmenu />, document.getElementById('root'));

export default Viewfood;

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