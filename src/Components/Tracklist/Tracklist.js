import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return(
      <div className="TrackList">
          {/* You will add a map method that renders a set of Track components  */}
          {this.props.trackList.map(track => {
            return <Track key={track.id} track={track} />
          })}
      </div>
    );
  }
}

export default TrackList;
