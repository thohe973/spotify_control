import React from 'react';
import './delete-list.scss';

interface Item {
  name: string;
  id: string;
}

interface ListProps {
  title: string;
  items: Item[];
  onDelete: (id: string) => void;
}

interface ItemProps {
  title: string;
  id: string;
  onDelete: (id: string) => void;
}

const DeleteItem: React.FC<ItemProps> = (props) => {
  const handleDelete = () => props.onDelete(props.id);

  return (
    <div className="DeleteItem">
      <span>{props.title}</span>
      <i className="material-icons"
        onClick={handleDelete}>remove_circle_outline</i>
    </div>
  );
}

const DeleteList: React.FC<ListProps> = (props) => {
  return (
    <div className="DeleteList">
      <span>{props.title}</span>
      <div className="list-container">
        {props.items.length === 0
          ? <span>No items added</span>
          : props.items.map(item =>
            <DeleteItem
              title={item.name}
              id={item.id}
              onDelete={props.onDelete}
              key={item.id}>
            </DeleteItem>)}
      </div>
    </div>
  );
}

export default DeleteList;
