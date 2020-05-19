import React, { useState, useEffect } from 'react';
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

const PlaylistList: React.FC = () => {
  const [playlists, setPlaylists] = useState<PlaylistJSON[]>([]);

  useEffect(() => {
    const json = localStorage.getItem('selectedPlaylists');
    if (json) {
      const playlists = JSON.parse(json);
      setPlaylists(playlists);
    }
  }, []);

  return (
    <div className="PlaylistList">
      {playlists.length === 0
        ? <span>Add playlists in the settings</span>
        : playlists.map(t => {
          return <Playlist key={t.id} playlist={t}></Playlist>
        })}
    </div>
  );
}

export default PlaylistList;
