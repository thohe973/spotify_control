import React from 'react';
import './transfer-device.scss';

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

interface Props {
  name: string,
  type: DeviceType,
  id: string
}

class TransferDevice extends React.Component<Props> {

  icon = this.getIcon(this.props.type)

  handleClick = (event: React.MouseEvent): void => {
    console.log(this.props.id)
  }

  render() {
    return (
      <div className="TransferDevice" onClick={this.handleClick}>
        <i className={this.icon}></i>
        {this.props.name}
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
