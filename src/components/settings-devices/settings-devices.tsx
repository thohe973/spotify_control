import React from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';
import { devicesUrl } from '../../util/urls';

interface State {
  devices: Item[];
  selectedDevices: Item[];
}

class SettingsDevices extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      devices: [],
      selectedDevices: []
    };
  }

  handleDelete = (id: string): void => {
    this.setState({ selectedDevices: this.state.selectedDevices.filter(d => d.id !== id) });
  }

  handleAdd = (item: Item): void => {
    if (!this.state.selectedDevices.find(d => d.id === item.id)) {
      this.setState({ selectedDevices: [...this.state.selectedDevices, item] });
    }
  }

  handleUpdate = (): void => {
    fetch(devicesUrl, {
      method: 'GET'
    }).then(resp => resp.json()).then(json => {
      this.setState({ devices: json.devices })
    });
  }

  render() {
    return (
      <div className="SettingsDevices">
        <AddItem title="Devices" items={this.state.devices} onAdd={this.handleAdd} onUpdate={this.handleUpdate}></AddItem>
        <DeleteList title="Saved Devices" items={this.state.selectedDevices} onDelete={this.handleDelete}></DeleteList>
      </div>
    )
  }
}

export default SettingsDevices;
