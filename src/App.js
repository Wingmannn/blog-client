import React, { Component } from 'react'
import "./App.css"
import Social from "./Components/Social"
import NavBar from "./Components/NavBar/NavBar"
import Address from "./Components/NavBar/Address"
import SideBar from "./Components/SideBar/SideBar"
import Twitter from "./Components/SideBar/Twitter"
import Spotify from "./Components/SideBar/Spotify"
import Guest from "./Components/SideBar/Guest"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeScreen: ""
    }
  }

  navigateTo = (screenName) => {
    console.log("navigasyon gerçekleşti: " + screenName)
    this.setState({
      activeScreen: screenName
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar  navigateTo={this.navigateTo} activeScreen={this.state.activeScreen}/>
        <Social/>
        <SideBar navigateTo={this.navigateTo} activeScreen={this.state.activeScreen}/>
        {this.state.activeScreen === "twitterScreen"? <Twitter/>:null}
        {this.state.activeScreen === "spotifyScreen"? <Spotify/>:null}
        {this.state.activeScreen === "guestScreen"? <Guest/>:null}
        {this.state.activeScreen === ""? null:null}
        {this.state.activeScreen === "imagesScreen"? <Spotify/>:null}
        {this.state.activeScreen === "addressScreen"? <Address/>:null}        
      </div>
    )
  }
}

export default App