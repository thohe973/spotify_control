import React from 'react';
import './media-controls.scss';

class MediaControls extends React.Component {

  play = (): void  => {
    console.log('play')
  }

  pause = (): void  => {
    console.log('pause')
  }

  next = (): void  => {
    console.log('next')
  }

  prev = (): void  => {
    console.log('prev')
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
