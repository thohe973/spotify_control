import React from 'react';
import './media-controls.scss';
import { pauseUrl, playUrl, nextUrl, prevUrl } from '../../util/urls';
import { handleError } from '../../util/handleError';

const MediaControls: React.FC = () => {

  const play = (): void => {
    fetch(playUrl, { method: 'PUT' }).then(handleError);
  }

  const pause = (): void => {
    fetch(pauseUrl, { method: 'PUT' }).then(handleError);
  }

  const next = (): void => {
    fetch(nextUrl, { method: 'PUT' }).then(handleError);
  }

  const prev = (): void => {
    fetch(prevUrl, { method: 'PUT' }).then(handleError);
  }

  return (
    <div className="MediaControls">
      <i onClick={prev} className="material-icons prev">skip_previous</i>
      <i onClick={play} className="material-icons">play_arrow</i>
      <i onClick={pause} className="material-icons">pause</i>
      <i onClick={next} className="material-icons next">skip_next</i>
    </div>
  );
}

export default MediaControls;
