import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
var body;
export default class LogHeader extends React.Component {
  constructor(props) {
    super(props);

    this.Logout = this.Logout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      data: []
    };
  }

  Logout() {
    body = { token: localStorage.getItem("AccessToken") }
    console.log(localStorage.getItem("AccessToken"))
    const url = "http://10.10.200.25:9000/signOut?token="+localStorage.getItem("AccessToken"); 
    console.log(url)       
    let headers = new Headers();

          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');

          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');

          headers.append('PUT', 'GET');
          console.log("1")  
          console.log(JSON.stringify(body))
          fetch(url, {
              headers: headers,
              method: 'PUT',
              body :JSON.stringify(body)
          })
         localStorage.removeItem("AccessToken")
        
          .then(response =>{ })
          .then(contents => {     })
           .catch(() => console.log("Can’t access " + url + " response. "))          
  }

  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{backgroundColor:'#353535'}}>

       
        <Navbar color="#353535" light expand="md">
          <NavbarBrand href="/firstpage" style={{color: '#fffa8b'}}>Weigh-To-Go</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
              <NavItem>
                <NavLink href="/home" style={{color: '#fffa8b',borderStyle:'groove'}} onClick={this.Logout}>Logout</NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
       
      </div>
    );
  }
}