import React, { useState, useEffect } from 'react';
import DeleteList from '../delete-list/delete-list';
import AddItem, { Item } from '../add-item/add-item';
import { devicesUrl } from '../../util/urls';


const SettingsDevices: React.FC = () => {
  const [devices, setDevices] = useState<Item[]>([]);
  const [selectedDevices, setSelectedDevices] = useState<Item[]>([]);

  useEffect(() => {
    const selectedDevicesJSON = localStorage.getItem('selectedDevices');
    if (selectedDevicesJSON) {
      const parsed = JSON.parse(selectedDevicesJSON);
      setSelectedDevices(parsed ? parsed : []);
    }
  }, []);

  const handleDelete = (id: string): void => {
    const filteredDevices = selectedDevices.filter(d => d.id !== id);
    setSelectedDevices(filteredDevices);
    localStorage.setItem('selectedDevices', JSON.stringify(filteredDevices));
  }

  const handleAdd = (item: Item): void => {
    if (!selectedDevices.find(d => d.id === item.id)) {
      const devices = [...selectedDevices, item];
      setSelectedDevices(devices);
      localStorage.setItem('selectedDevices', JSON.stringify(devices));
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
    <div className="SettingsDevices">
      <AddItem title="Devices" items={devices} onAdd={handleAdd} onUpdate={handleUpdate}></AddItem>
      <DeleteList title="Saved Devices" items={selectedDevices} onDelete={handleDelete}></DeleteList>
    </div>
  );
}

export default SettingsDevices;
