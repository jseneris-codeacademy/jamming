import React, { Component } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist'

class App extends Component {
  constructor(props){
    super(props);

    this.state =
    {
      searchResults: [{id: 3, name: "Dream Into Action", artist: "Howard Jones", album:"Dream Into Action"}],
      playlistName: "Test Playlist",
      playlistTracks: [{id: 1, name: "Elegy", artist: "Howard Jones", album:"Dream Into Action"},
                      {id: 2, name: "No One Is To Blame", artist: "Howard Jones", album:"Dream Into Action"}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    const playlistIndex = this.state.playlistTracks.findIndex(t => t.id === track.id);
    if (playlistIndex === -1){
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track){
    const playlistIndex = this.state.playlistTracks.findIndex(t => t.id === track.id);
    if (playlistIndex !== -1){
      this.state.playlistTracks.splice(playlistIndex, 1);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component */}
          <div className="App-playlist">
              {/* Add a SearchResults component */}
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              {/* Add a Playlist component */}
              <Playlist playlistName={this.state.playlistName} playListTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
