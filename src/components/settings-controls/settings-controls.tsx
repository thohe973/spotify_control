import React, { useState, useEffect } from 'react';
import './settings-controls.scss';
import { devicesUrl } from '../../util/urls';
import { Item } from '../add-item/add-item';

const SettingsControls: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState('-1');
  const [devices, setDevices] = useState<Item[]>([]);

  useEffect(() => {
    const deviceJSON = localStorage.getItem('controlDevice');
    if (deviceJSON) {
      const device = JSON.parse(deviceJSON);
      setSelectedDevice(device.id);
      setDevices([device]);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.value !== '-1') {
      setSelectedDevice(event.target.value);
      const device = devices.find(d => d.id === event.target.value) as Item;
      localStorage.setItem('controlDevice', JSON.stringify(device));
    }
  }

  const handleUpdate = (): void => {
    fetch(devicesUrl, {
      method: 'GET'
    }).then(resp => resp.json()).then(json => {
      setDevices(json.devices);
    });
  }

  return (
    <div className="SettingsControls">
      <div className="title">
        Device For Playlist Covers
    </div>
      <select onChange={handleChange} value={selectedDevice}>
        <option value="-1">(Select)</option>
        {devices.map(device => {
          return <option key={device.id} value={device.id}>{device.name}</option>
        })}
      </select>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default SettingsControls;
