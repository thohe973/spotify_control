import React from 'react';
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

interface State {
  selectedPlaylist: string | undefined;
}

class AddItem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedPlaylist: '-1'
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ selectedPlaylist: event.target.value });
  }

  handleAdd = (): void => {
    if (this.state.selectedPlaylist !== '-1') {
      const item = this.props.items.find(x => x.id === this.state.selectedPlaylist);
      this.props.onAdd(item as Item);
    }
  }

  render() {
    return (
      <div className="AddItem">
        <div className="title">{this.props.title}</div>
        <select onChange={this.handleChange} value={this.state.selectedPlaylist}>
          <option value="-1">(Select)</option>
          {this.props.items.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}
        </select>
        <button className="update" onClick={this.props.onUpdate}>Update</button>
        <button className="add" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItem;
