import React from 'react';
import { clientId } from '../../util/spotify_ids';
import { scopes, redirectUrl } from '../../util/spotify';
import './login.scss';

class Login extends React.Component<{}> {

  redirectSpotifyLogin = (): void => {
    window.location = 'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + clientId +
      (scopes ? '&scope=' + encodeURIComponent(scopes as any) : '') +
      '&redirect_uri=' + encodeURIComponent(redirectUrl) as unknown as Location;
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.redirectSpotifyLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
