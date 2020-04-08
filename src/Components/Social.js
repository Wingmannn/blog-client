import React, { Component } from 'react'
import "./Social.css"

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a className="logos" href="https://www.facebook.com/profile.php?id=1151085803" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a className="logos" href="https://github.com/Wingmannn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a className="logos" href="https://www.instagram.com/kutlaytunc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a className="logos" href="https://twitter.com/KutlayTunc" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a className="logos" href="https://open.spotify.com/user/11133767533?si=F2UhxbaoSPCcwzRs5PErkQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
      </div>
    )
  }
}

export default Social