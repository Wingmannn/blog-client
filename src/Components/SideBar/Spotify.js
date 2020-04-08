import React, { Component } from 'react';
import "./Spotify.css"

class Spotify extends Component {
  render() { 
    return (
      <div className="spotify-component">
        <iframe title="Spotify Embedded" src="https://open.spotify.com/embed/playlist/1zj0WbbUbf6Up0UtSEMEKH" width="100%" height="100%" frameborder="0" allow="encrypted-media"></iframe>
      </div>
      );
  }
}
 
export default Spotify ;