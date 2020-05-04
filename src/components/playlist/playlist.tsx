import React from 'react';
import './playlist.scss';
import emptyCover from '../../assets/empty_cover.png';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play-outline.svg';
import { PlaylistJSON } from '../playlist-list/playlist-list';


interface Props {
  playlist: PlaylistJSON;
}

class Playlist extends React.Component<Props> {

  play = (event: React.MouseEvent): void => {
    console.log(`play ${this.props.playlist.uri}`);
  }

  shuffle = (event: React.MouseEvent): void => {
    console.log(`shuffle ${this.props.playlist.uri}`);
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
