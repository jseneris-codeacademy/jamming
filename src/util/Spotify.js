var URI = require('urijs');

let accessToken;
const clientId = "c42ba68f7ede49919335dc210de8130a";
const redirectUri = "http://localhost:3000/";

class Spotify{
  getAccessToken(){
    if (accessToken){
      return accessToken;
    }

    if (!window.location.href.match('/access_token=([^&]*)//expires_in=([^&]*)/')) {
      let uriQueryResult = URI.parseQuery(window.location.search);
      accessToken = uriQueryResult.access_token;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    else{
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&&redirect_uri=${redirectUri}`;

    }
  }
}

export default Spotify;
