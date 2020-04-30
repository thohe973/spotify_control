export const authEndpoint = 'https://accounts.spotify.com/authorize';

  //Must match redirect_uri in spotify_control_api project
export const redirectUrl = "http://192.168.1.205:3000";
export const scopes = [
  "user-modify-playback-state",
  "user-read-playback-state",
  "playlist-read-private"
];
