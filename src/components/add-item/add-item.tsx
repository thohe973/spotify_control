import React, { useState } from 'react';
import './add-item.scss';

export interface Item {
  name: string;
  id: string;
}

interface Props {
  title: string;
  items: Item[];
  onUpdate: () => void;
  onAdd: (item: Item) => void;
}

const AddItem: React.FC<Props> = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState('-1');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedPlaylist(event.target.value);
  }

  const handleAdd = (): void => {
    if (selectedPlaylist !== '-1') {
      const item = props.items.find(x => x.id === selectedPlaylist);
      props.onAdd(item as Item);
    }
  }

  return (
    <div className="AddItem">
      <div className="title">{props.title}</div>
      <select onChange={handleChange} value={selectedPlaylist}>
        <option value="-1">(Select)</option>
        {props.items.map(item => {
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
      <button className="update" onClick={props.onUpdate}>Update</button>
      <button className="add" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddItem;
