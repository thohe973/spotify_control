import React, { useState, useEffect } from 'react';
import './transfer-list.scss';
import TransferDevice, { Device } from '../transfer-device/transfer-device';

const TransferList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const json = localStorage.getItem('selectedDevices');
    if (json) {
      const devices = JSON.parse(json);
      setDevices(devices);
    }
  }, []);

  return (
    <div className="TransferList">
      {devices.length === 0
        ? <span>Add devices in the settings</span>
        : devices.map((t: any) => {
          return <TransferDevice device={t} key={t.id}></TransferDevice>
        })}
    </div>
  );
}

export default TransferList;
