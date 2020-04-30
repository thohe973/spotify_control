import React from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';

class SettingsDevices extends React.Component<{}> {

  items = [
    { title: 'Nexus 7', id: '0'},
    { title: 'Desktop', id: '1'},
  ]

  handleDelete = (id: string): void => {
    console.log('device delete', id);
  }

  handleAdd = (item: Item): void => {
    console.log('device add', item);
  }

  handleUpdate = (): void => {
    console.log('device update');
  }

  render() {
    return (
      <div className="SettingsDevices">
        <AddItem title="Devices" items={this.items} onAdd={this.handleAdd} onUpdate={this.handleUpdate}></AddItem>
        <DeleteList title="Saved Devices" items={this.items} onDelete={this.handleDelete}></DeleteList>
      </div>
    )
  }
}

export default SettingsDevices;
