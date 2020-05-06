import React from 'react';
import './playlist.scss';
import emptyCover from '../../assets/empty_cover.png';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play-outline.svg';
import { PlaylistJSON } from '../playlist-list/playlist-list';
import { setShuffleUrl, playPlaylistUrl, playPlaylistRecentlyAddedUrl } from '../../util/urls';


interface Props {
  playlist: PlaylistJSON;
}

class Playlist extends React.Component<Props> {

  play = async (event: React.MouseEvent): Promise<void> => {
    await fetch(`${setShuffleUrl}?state=false`, { method: 'PUT' });
    fetch(`${playPlaylistRecentlyAddedUrl}?playlist=${this.props.playlist.id}`, { method: 'PUT'});
  }

  shuffle = async (event: React.MouseEvent): Promise<void> => {
    await fetch(`${setShuffleUrl}?state=true`, { method: 'PUT' });
    fetch(`${playPlaylistUrl}?playlist=${this.props.playlist.uri}`, { method: 'PUT'});
  }

  getImage = (): string => {
    if (this.props.playlist && this.props.playlist.images.length > 0) {
      return this.props.playlist.images[0].url;
    }
    return emptyCover;
  }

  render() {
    return (
      <div className="Playlist">
        <div className="cover-container">
          <img src={this.getImage()} alt="cover" className="playlist-cover" />
          <div className="play" onClick={this.play}>
            <PlayIcon></PlayIcon>
          </div>
          <div className="shuffle" onClick={this.shuffle}>
            <ShuffleIcon></ShuffleIcon>
          </div>
          <div className="shadow"></div>
        </div>
        <span className="playlist-name">
          {this.props.playlist.name}
        </span>
      </div >
    );
  }
}

export default Playlist;
