import React from 'react';
import './transfer-list.scss';
import TransferDevice, { Device } from '../transfer-device/transfer-device';

interface State {
  devices: Device[];
}

class TransferList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      devices: []
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('selectedDevices');
    if (json) {
      const devices = JSON.parse(json);
      this.setState({ devices: devices });
    }
  }

  render() {
    return (
      <div className="TransferList">
        {this.state.devices.length === 0
          ? <span>Add devices in the settings</span>
          : this.state.devices.map((t: any) => {
            return <TransferDevice device={t} key={t.id}></TransferDevice>
          })}
      </div>
    );
  }
}

export default TransferList;
