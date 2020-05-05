import React from 'react';
import './media-controls.scss';
import { pauseUrl, playUrl, nextUrl, prevUrl } from '../../util/urls';

class MediaControls extends React.Component {

  play = (): void => {
    fetch(playUrl, { method: 'PUT' });
  }

  pause = (): void => {
    fetch(pauseUrl, { method: 'PUT' });
  }

  next = (): void => {
    fetch(nextUrl, { method: 'PUT' });
  }

  prev = (): void => {
    fetch(prevUrl, { method: 'PUT' });
  }

  render() {
    return (
      <div className="MediaControls">
        <i onClick={this.prev} className="material-icons prev">skip_previous</i>
        <i onClick={this.play} className="material-icons">play_arrow</i>
        <i onClick={this.pause} className="material-icons">pause</i>
        <i onClick={this.next} className="material-icons next">skip_next</i>
      </div>
    );
  }
}

export default MediaControls;
