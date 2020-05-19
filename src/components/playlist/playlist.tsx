import React from 'react';
import './playlist.scss';
import emptyCover from '../../assets/empty_cover.png';
import { ReactComponent as ShuffleIcon } from '../../assets/icons/shuffle.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/play-outline.svg';
import { PlaylistJSON } from '../playlist-list/playlist-list';
import { setShuffleUrl, playPlaylistUrl, playPlaylistRecentlyAddedUrl } from '../../util/urls';
import { handleError } from '../../util/handleError';
import { getControlDeviceId } from '../../util/local-storage';


interface Props {
  playlist: PlaylistJSON;
}

const Playlist: React.FC<Props> = (props) => {

  const play = async (): Promise<void> => {
    await fetch(`${setShuffleUrl}?state=false${getDeviceQuery()}`, { method: 'PUT' }).then(handleError);
    const query = `?playlist=${props.playlist.id}${getDeviceQuery()}`;
    fetch(`${playPlaylistRecentlyAddedUrl}${query}`, { method: 'PUT' }).then(handleError);
  }

  const shuffle = async (): Promise<void> => {
    await fetch(`${setShuffleUrl}?state=true${getDeviceQuery()}`, { method: 'PUT' }).then(handleError);
    const query = `?playlist=${props.playlist.uri}${getDeviceQuery()}`;
    fetch(`${playPlaylistUrl}${query}`, { method: 'PUT' }).then(handleError);
  }

  const getImage = (): string => {
    if (props.playlist && props.playlist.images.length > 0) {
      return props.playlist.images[0].url;
    }
    return emptyCover;
  }

  return (
    <div className="Playlist">
      <div className="cover-container">
        <img src={getImage()} alt="cover" className="playlist-cover" />
        <div className="play" onClick={play}>
          <PlayIcon></PlayIcon>
        </div>
        <div className="shuffle" onClick={shuffle}>
          <ShuffleIcon></ShuffleIcon>
        </div>
        <div className="shadow"></div>
      </div>
      <span className="playlist-name">
        {props.playlist.name}
      </span>
    </div >
  );
}

const getDeviceQuery = (): string => {
  const deviceId = getControlDeviceId();
  if (deviceId) {
    return `&device_id=${deviceId}`;
  }
  return '';
}

export default Playlist;
