import React from 'react';
import './playlist-list.scss';
import Playlist from '../playlist/playlist';

interface Image {
  height: number;
  width: number;
  url: string;
}

export interface PlaylistJSON {
  id: string;
  name: string;
  uri: string;
  images: Image[]
}

interface State {
  playlists: Playlist[]
}

class PlaylistList extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      playlists: []
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('selectedPlaylists');
    if (json) {
      const playlists = JSON.parse(json);
      this.setState({ playlists: playlists });
    }
  }

  render() {
    return (
      <div className="PlaylistList">
        {this.state.playlists.length === 0
          ? <span>Add playlists in the settings</span>
          : this.state.playlists.map((t: any) => {
            return <Playlist key={t.id} playlist={t}></Playlist>
          })}
      </div>
    );
  }
}

export default PlaylistList;
