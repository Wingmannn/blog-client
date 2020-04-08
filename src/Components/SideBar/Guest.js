import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./Guest.css"
import CreateUser from "./CreateUser"


class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <div className="guest-component">
        <Router>
          <Route path="/" component={CreateUser}/>
        </Router>
      </div>
    )
  }
}

export default Guest;




