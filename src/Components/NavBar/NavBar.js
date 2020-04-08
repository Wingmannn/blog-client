import React, { Component } from 'react'
import "./NavBar.css"

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#abc" className="icons"><i className="far fa-address-card"  onClick={() => this.props.navigateTo("addressScreen")} ></i></a>
        <a href="#sad" className="icons"><i className="far fa-images"  onClick={() => this.props.navigateTo("imagesScreen")} ></i></a>
        <a href="#fds" id="home"className="icons"><i className="fas fa-home"  onClick={() => this.props.navigateTo("homeScreen")} ></i></a>
      </div>
    )
  }
}

export default NavBar