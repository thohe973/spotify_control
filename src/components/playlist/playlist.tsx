import React from 'react';
import './playlist.scss';
import cover from '../../example_cover.jpg';
import cover2 from '../../example_cover2.png';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play-outline.svg';


interface Props {
  name: string,
  id: string
}

class Playlist extends React.Component<Props> {

  play = (event: React.MouseEvent): void => {
    console.log(`play ${this.props.id}`);
  }

  shuffle = (event: React.MouseEvent): void => {
    console.log(`shuffle ${this.props.id}`);
  }

  render() {
    return (
      <div className="Playlist">
        <div className="cover-container">
          <img src={Math.random() > 0.5 ? cover : cover2} alt="cover" className="playlist-cover" />
          <div className="play" onClick={this.play}>
            <PlayIcon></PlayIcon>
          </div>
          <div className="shuffle" onClick={this.shuffle}>
            <ShuffleIcon></ShuffleIcon>
          </div>
          <div className="shadow"></div>
        </div>
        <span className="playlist-name">
          {this.props.name}
        </span>
      </div >
    );
  }
}

export default Playlist;
