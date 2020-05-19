import React from 'react';
import { clientId } from '../../util/spotify_ids';
import { scopes, redirectUrl } from '../../util/spotify';
import './login.scss';

const Login: React.FC = () => {
  const redirectSpotifyLogin = (): void => {
    window.location = 'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + clientId +
      (scopes ? '&scope=' + encodeURIComponent(scopes as any) : '') +
      '&redirect_uri=' + encodeURIComponent(redirectUrl) as unknown as Location;
  }

  return (
    <div className="Login">
      <button onClick={redirectSpotifyLogin}>Login</button>
    </div>
  );
}

export default Login;
