import React from 'react';
import './settings-controls.scss';

export interface Device {
  title: string;
  id: string;
}

interface State {
  selectedDevice: string | undefined;
  devices: Device[];
}

class SettingsControls extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedDevice: '-1',
      devices: [
        { title: 'device1', id: '1'}
      ]
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ selectedDevice: event.target.value });
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
            return <option key={device.id} value={device.id}>{device.title}</option>
          })}
        </select>
      </div>
    );
  }
}

export default SettingsControls;
