import React from 'react';
import './transfer-list.scss';
import TransferDevice from '../transfer-device/transfer-device';

class TransferList extends React.Component<{}> {

  test = [
    { id: '2', name: 'Nexus 7', type: 'Tablet' },
    { id: '0', name: 'DESKTOP-B1', type: 'Computer' },
    { id: '1', name: 'SM-G930F', type: 'Smartphone' },
  ]

  render() {
    return (
      <div className="TransferList">
        {this.test.length === 0
          ? <span>Add devices in the settings</span>
          : this.test.map((t: any) => {
            return <TransferDevice name={t.name} type={t.type} id={t.id} key={t.id}></TransferDevice>
          })}
      </div>
    );
  }
}

export default TransferList;
