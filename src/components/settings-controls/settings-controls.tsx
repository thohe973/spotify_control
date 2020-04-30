import React from 'react';
import './settings-controls.scss';
import { devicesUrl } from '../../util/urls';
import { Item } from '../add-item/add-item';


interface State {
  selectedDevice: string | undefined;
  devices: Item[];
}

class SettingsControls extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedDevice: '-1',
      devices: []
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ selectedDevice: event.target.value });
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
      <div className="SettingsControls">
        <div className="title">
          Device For Media Controls
        </div>
        <select onChange={this.handleChange} value={this.state.selectedDevice}>
          <option value="-1">(Select)</option>
          {this.state.devices.map(device => {
            return <option key={device.id} value={device.id}>{device.name}</option>
          })}
        </select>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default SettingsControls;
