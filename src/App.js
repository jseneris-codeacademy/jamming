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
      searchResults: [{name: "Dream Into Action", artist: "Howard Jones", album:"Dream Into Action"}],
      playlistName: "Test Playlist",
      playlistTracks: [{name: "Elegy", artist: "Howard Jones", album:"Dream Into Action"},
                      {name: "No One Is To Blame", artist: "Howard Jones", album:"Dream Into Action"}]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component */}
          <div className="App-playlist">
              {/* Add a SearchResults component */}
              <SearchResults searchResults={this.state.searchResults} />
              {/* Add a Playlist component */}
              <Playlist playlistName={this.state.playlistName} playListTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
