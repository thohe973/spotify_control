import React from 'react';
import TransferList from '../transfer-list/transfer-list';
import PlaylistList from '../playlist-list/playlist-list';
import MediaControls from '../media-controls/media-controls';
import './home.scss';
import IconLink from '../icon-link/icon-link';

class Home extends React.Component {

  fullscreen = () => {
    document.getElementById('App')?.requestFullscreen();
  }

  render() {
    return (
      <div className="Home">
        <TransferList></TransferList>
        <PlaylistList></PlaylistList>
        <div className="btm-container">
          <i className="material-icons fullscreen" onClick={this.fullscreen}>crop_free</i>
          <MediaControls></MediaControls>
          <IconLink icon="settings" path="/settings"></IconLink>
        </div>
      </div>
    );
  }
}

export default Home;
