import React, { useState, useEffect } from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';
import { getPlaylistsUrl } from '../../util/urls';

const SettingsPlaylists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Item[]>([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState<Item[]>([]);

  useEffect(() => {
    const selectedPlaylistsJSON = localStorage.getItem('selectedPlaylists');
    if (selectedPlaylistsJSON) {
      const parsed = JSON.parse(selectedPlaylistsJSON);
      setSelectedPlaylists(parsed ? parsed : []);
    }
  }, []);

  const handleDelete = (id: string): void => {
    const filteredPlaylists = selectedPlaylists.filter(d => d.id !== id);
    setSelectedPlaylists(filteredPlaylists);
    localStorage.setItem('selectedPlaylists', JSON.stringify(filteredPlaylists));
  }

  const handleAdd = (item: Item): void => {
    if (!selectedPlaylists.find(d => d.id === item.id)) {
      const playlists = [...selectedPlaylists, item];
      setSelectedPlaylists(playlists);
      localStorage.setItem('selectedPlaylists', JSON.stringify(playlists));
    }
  }

  const handleUpdate = (): void => {
    fetch(getPlaylistsUrl, {
      method: 'GET'
    }).then(resp => resp.json()).then(json => {
      setPlaylists(json.items);
    });
  }

  return (
    <div className="SettingsPlaylists">
      <AddItem title="Playlists" items={playlists} onAdd={handleAdd} onUpdate={handleUpdate}></AddItem>
      <DeleteList title="Saved Playlists" items={selectedPlaylists} onDelete={handleDelete}></DeleteList>
    </div>
  );
}

export default SettingsPlaylists;
