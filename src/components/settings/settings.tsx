import React from 'react';
import IconLink from '../icon-link/icon-link';
import './settings.scss';
import SettingsPlaylists from '../settings-playlists/settings-playlists';
import SettingsDevices from '../settings-devices/settings-devices';
import SettingsControls from '../settings-controls/settings-controls';

class Settings extends React.Component {

  render() {
    return (
      <div className="Settings">
        <div className="nav">
          <div>
            <IconLink icon="chevron_left" path="/"></IconLink>
          </div>
          <span>Settings</span>
          <div>{/* dummy element for alignment */}</div>
        </div>
        <div className="content">
          <SettingsDevices></SettingsDevices>
          <SettingsPlaylists></SettingsPlaylists>
          <SettingsControls></SettingsControls>
        </div>
      </div>
    );
  }
}

export default Settings;
