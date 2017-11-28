let accessToken;
const clientId = "c42ba68f7ede49919335dc210de8130a";
const redirectUri = "http://localhost:3000/";

let Spotify = {
  getAccessToken: function(){
    if (accessToken){
      return accessToken;
    }
    const accessTokenParm = window.location.href.match(/access_token=([^&]*)/);
    const expiresInParm = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenParm && expiresInParm) {
      accessToken = accessTokenParm[1];
      const expiresIn = expiresInParm[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    else{
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&&redirect_uri=${redirectUri}`;
    }
  },

  search: function(searchTerm){
    Spotify.getAccessToken();
    const urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
    return fetch(urlToFetch,
      {
          headers: {Authorization: `Bearer ${accessToken}`}
      })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.tracks){
        console.log(jsonResponse.tracks);
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          };
        });
      }
    });
  }
};

export default Spotify;
