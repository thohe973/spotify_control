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

  componentDidMount() {
    const selectedDevicesJSON = localStorage.getItem('selectedDevices');
    if (selectedDevicesJSON) {
      const parsed = JSON.parse(selectedDevicesJSON);
      this.setState({
        selectedDevices: parsed ? parsed : []
      });
    }
  }

  handleDelete = (id: string): void => {
    const filteredDevices = this.state.selectedDevices.filter(d => d.id !== id);
    this.setState({ selectedDevices: filteredDevices });
    localStorage.setItem('selectedDevices', JSON.stringify(filteredDevices));
  }

  handleAdd = (item: Item): void => {
    if (!this.state.selectedDevices.find(d => d.id === item.id)) {
      const devices = [...this.state.selectedDevices, item];
      this.setState({ selectedDevices: devices });
      localStorage.setItem('selectedDevices', JSON.stringify(devices));
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
