import React from 'react';
import IconLink from '../icon-link/icon-link';
import './settings.scss';
import SettingsPlaylists from '../settings-playlists/settings-playlists';
import SettingsDevices from '../settings-devices/settings-devices';
import SettingsControls from '../settings-controls/settings-controls';

const Settings: React.FC = () => {
  return (
    <div className="Settings">
      <div className="nav">
        <IconLink icon="arrow_back" path="/"></IconLink>
        <span>Settings</span>
      </div>
      <div className="content">
        <SettingsDevices></SettingsDevices>
        <SettingsPlaylists></SettingsPlaylists>
        <SettingsControls></SettingsControls>
      </div>
    </div>
  );
}

export default Settings;
