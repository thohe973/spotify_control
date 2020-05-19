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

const TransferDevice: React.FC<Props> = (props) => {
  const icon = getIcon(props.device.type)

  const handleClick = (event: React.MouseEvent): void => {
    fetch(`${transferUrl}?device_id=${props.device.id}`, { method: 'PUT', }).then(handleError);
  }

  return (
    <div className="TransferDevice" onClick={handleClick}>
      <i className={icon}></i>
      {props.device.name}
    </div >
  );
}

const getIcon = (type: DeviceType): string => {
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

export default TransferDevice;
