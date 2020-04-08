import React, { Component } from 'react'
import "./SideBar.css"



class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <span className="spotify" onClick={() => this.props.navigateTo("spotifyScreen")} ></span>
        <span className="twitter"  onClick={() => this.props.navigateTo("twitterScreen")} ></span>
        <span className="guest"  onClick={() => this.props.navigateTo("guestScreen")} ></span>
      </div>
    )
  }
}

export default SideBar