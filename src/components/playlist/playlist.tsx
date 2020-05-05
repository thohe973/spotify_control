import React from 'react';
import './playlist.scss';
import emptyCover from '../../assets/empty_cover.png';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play-outline.svg';
import { PlaylistJSON } from '../playlist-list/playlist-list';
import { setShuffleUrl, playPlaylistUrl } from '../../util/urls';


interface Props {
  playlist: PlaylistJSON;
}

class Playlist extends React.Component<Props> {

  play = (event: React.MouseEvent): void => {
    this.playPlaylist(this.props.playlist.uri, false);
  }

  shuffle = (event: React.MouseEvent): void => {
    this.playPlaylist(this.props.playlist.uri, true);
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

  async playPlaylist(uri: string, shuffle: boolean): Promise<void> {
    await fetch(`${setShuffleUrl}?state=${shuffle}`, { method: 'PUT' });
    fetch(`${playPlaylistUrl}?playlist=${uri}`, { method: 'PUT'})
  }
}

export default Playlist;
