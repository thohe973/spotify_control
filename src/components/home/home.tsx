import React from 'react';
import TransferList from '../transfer-list/transfer-list';
import PlaylistList from '../playlist-list/playlist-list';
import MediaControls from '../media-controls/media-controls';
import './home.scss';
import IconLink from '../icon-link/icon-link';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <TransferList></TransferList>
      <PlaylistList></PlaylistList>
      <MediaControls></MediaControls>
      <IconLink icon="settings" path="/settings"></IconLink>
    </div>
  );
}

export default Home;
