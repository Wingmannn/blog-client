import React, { Component } from 'react';
import "./Twitter.css"

class Twitter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/twitter")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          tweets: data
        })
      })
  }

  render() {
    return (
      <div className="twitter-component">
        {
          this.state.tweets.map((tweet, index) => {
            return(
            <p>{tweet.text}</p>
            )
          })
        }
      </div>
    );
  }
}

export default Twitter;

