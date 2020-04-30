import React from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';

class SettingsPlaylists extends React.Component<{}> {

  items = [
    { title: 'Favoriter', id: '0'},
    { title: 'Discover Weekly', id: '1'},
  ]


  handleDelete = (id: string): void => {
    console.log('delete', id);
  }

  handleAdd = (item: Item): void => {
    console.log('add', item);
  }

  handleUpdate = (): void => {
    console.log('update');
  }

  render() {
    return (
      <div className="SettingsPlaylists">
        <AddItem title="Playlists" items={this.items} onAdd={this.handleAdd} onUpdate={this.handleUpdate}></AddItem>
        <DeleteList title="Saved Playlists" items={this.items} onDelete={this.handleDelete}></DeleteList>
      </div>
    )
  }
}

export default SettingsPlaylists;
