import React from 'react';
import './playlist-list.scss';
import Playlist from '../playlist/playlist';

class PlaylistList extends React.Component<{}> {

  test = [
    { id: '0', name: 'Favoriter' },
    { id: '1', name: 'Discover Weekly' },
    { id: '2', name: 'Slussen' },
  ]

  render() {
    return (
      <div className="PlaylistList">
        {this.test.length === 0
          ? <span>Add playlists in the settings</span>
          : this.test.map((t: any) => {
            return <Playlist key={t.id} id={t.id} name={t.name}></Playlist>
          })}
      </div>
    );
  }
}

export default PlaylistList;
