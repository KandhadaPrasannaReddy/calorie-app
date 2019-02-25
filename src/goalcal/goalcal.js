import React from "react";
import '../App.css';
import { Table } from 'react-bootstrap';

export default class Goalcal extends React.Component {


  render() {

    return (
     
        <div>
               
                <Table striped bordered condensed hover>
                <tbody>
                        <tr>
                             <th colspan="2">Choose Plan</th>
                       </tr>
                        <tr>
                            <td>Maintain Weight</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Mild Weight Loss</td>
                            <td>$80</td>
                        </tr>

                        <tr>
                            <td> Weight Loss</td>
                            <td>$80</td>
                        </tr>

                        <tr>
                            <td>Extreme Weight Loss</td>
                            <td>$80</td>
                        </tr>

                        </tbody>
                        </Table>
                
        </div> 

    )

  }

}
