import React, { Component } from 'react';
import axios from "axios"


class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            username: response.data.map(user => user.username)
          })
        }
      })
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username
    }
    console.log(user)

    axios.post("http://localhost:5000/users/add",user)
    .then(res=> console.log(res.data)) 

    this.setState({
      username: ""
    })
  }

  render() {
    return (
      <div className="crt-user-component">
        <form>
          <label>User name:</label>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          <input
            type="text"
            required
            name="username"
            value={this.state.user}
            placeholder="Enter name here"
            onChange={this.handleChange.bind(this)} />
        </form>
      </div>
    );
  }
}

export default CreateUser;