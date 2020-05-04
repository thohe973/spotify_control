import React from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';
import { getPlaylistsUrl } from '../../util/urls';

interface State {
  playlists: Item[];
  selectedPlaylists: Item[];
}

class SettingsPlaylists extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      playlists: [],
      selectedPlaylists: []
    };
  }

  componentDidMount() {
    const selectedPlaylistsJSON = localStorage.getItem('selectedPlaylists');
    if (selectedPlaylistsJSON) {
      const parsed = JSON.parse(selectedPlaylistsJSON);
      this.setState({
        selectedPlaylists: parsed ? parsed : []
      });
    }
  }

  handleDelete = (id: string): void => {
    const filteredPlaylists = this.state.selectedPlaylists.filter(d => d.id !== id);
    this.setState({ selectedPlaylists: filteredPlaylists });
    localStorage.setItem('selectedPlaylists', JSON.stringify(filteredPlaylists));
  }

  handleAdd = (item: Item): void => {
    if (!this.state.selectedPlaylists.find(d => d.id === item.id)) {
      const playlists = [...this.state.selectedPlaylists, item];
      this.setState({ selectedPlaylists: playlists });
      localStorage.setItem('selectedPlaylists', JSON.stringify(playlists));
    }
  }

  handleUpdate = (): void => {
    fetch(getPlaylistsUrl, {
      method: 'GET'
    }).then(resp => resp.json()).then(json => {
      this.setState({ playlists: json.items })
    });
  }

  render() {
    return (
      <div className="SettingsPlaylists">
        <AddItem title="Playlists" items={this.state.playlists} onAdd={this.handleAdd} onUpdate={this.handleUpdate}></AddItem>
        <DeleteList title="Saved Playlists" items={this.state.selectedPlaylists} onDelete={this.handleDelete}></DeleteList>
      </div>
    )
  }
}

export default SettingsPlaylists;
