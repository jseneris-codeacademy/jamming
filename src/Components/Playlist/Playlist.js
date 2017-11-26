import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }


  handleNameChange(event){
    console.log(`event: {event}`);
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue ={'New Playlist'} value={this.props.playlistName} onChange={this.handleNameChange}/>
        {/* Add a TrackList component */}
        <TrackList trackList={this.props.playListTracks} onRemove={this.props.onRemove}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
