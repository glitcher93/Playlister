import axios from "axios";

const clientId = 'bd4bc88a5d234fc3ac3e5891a64b06d2';
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl
        }
    },
    search(term) {
        const token = Spotify.getAccessToken();
        return axios
                    .get(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        if (!response.data.tracks) {
                            return [];
                        }
                        return response.data.tracks.items.map(track => ({
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            album: track.album.name,
                            uri: track.uri
                        }));
                    })
                    .catch(err => console.log(err));
    },
    savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {
            authorization: `Bearer ${accessToken}`
        };
        let userId;
        return axios
                    .get('https://api.spotify.com/v1/me', {
                        headers
                    })
                    .then(response => {
                        userId = response.data.id;
                        return axios
                                    .post(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                                        name: name
                                    }, {
                                        headers
                                    })
                                    .then(response => {
                                        const playlistId = response.data.id;
                                        return axios
                                                    .post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                                                        uris: trackUris
                                                    } ,{
                                                        headers
                                                    })
                                                    .catch(err => console.log(err));
                                    })
                    })
    }
}

export default Spotify;