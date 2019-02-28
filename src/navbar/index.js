import React from "react";
import './index.css';


class Navbar extends React.Component{
    render(){

        return(
        <div>
        <ul>
        <li><a href="/goal">My Profile</a></li>
        <li><a href="/meal">My Day</a></li>
        <li><a href="#news">Log</a></li>
        <li><a href="/recipes">Recipes</a></li>
        </ul>
        </div>
        )
    }
}



export default Navbar;