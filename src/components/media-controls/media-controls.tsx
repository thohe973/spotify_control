import React from 'react';
import './media-controls.scss';
import { pauseUrl, playUrl, nextUrl, prevUrl } from '../../util/urls';
import { handleError } from '../../util/handleError';

class MediaControls extends React.Component {

  play = (): void => {
    fetch(playUrl, { method: 'PUT' }).then(handleError);
  }

  pause = (): void => {
    fetch(pauseUrl, { method: 'PUT' }).then(handleError);
  }

  next = (): void => {
    fetch(nextUrl, { method: 'PUT' }).then(handleError);
  }

  prev = (): void => {
    fetch(prevUrl, { method: 'PUT' }).then(handleError);
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
