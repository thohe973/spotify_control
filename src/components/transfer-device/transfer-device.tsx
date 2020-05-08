import React from 'react';
import './transfer-device.scss';
import { transferUrl } from '../../util/urls';
import { handleError } from '../../util/handleError';

// Taken from Spotify web api docs
type DeviceType = 'Computer'
  | 'Tablet'
  | 'Smartphone'
  | 'Speaker'
  | 'TV'
  | 'AVR'
  | 'STB'
  | 'AudioDongle'
  | 'GameConsole'
  | 'CastVideo'
  | 'CastAudio'
  | 'Automobile'
  | 'Unknown';

export interface Device {
  id: string;
  type: DeviceType;
  name: string;
}

interface Props {
  device: Device;
}

class TransferDevice extends React.Component<Props> {

  icon = this.getIcon(this.props.device.type)

  handleClick = (event: React.MouseEvent): void => {
    fetch(`${transferUrl}?device_id=${this.props.device.id}`, { method: 'PUT', }).then(handleError);
  }

  render() {
    return (
      <div className="TransferDevice" onClick={this.handleClick}>
        <i className={this.icon}></i>
        {this.props.device.name}
      </div >
    );
  }

  getIcon(type: DeviceType): string {
    switch (type) {
      case 'Computer':
        return 'las la-desktop';
      case 'Smartphone':
        return 'las la-mobile';
      case 'Tablet':
        return 'las la-tablet';
      default:
        return 'las la-desktop';
    }
  }
}

export default TransferDevice;
