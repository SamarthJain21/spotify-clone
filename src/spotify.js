export const authEndPoint = 'https://accounts.spotify.com/authorize';
const spotifyURL = "http://localhost:3000";
const spotifyClientID = "df17fd3e0f6f458a974bc941ca50c773";
const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromURL = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{});
}

export const loginURL = `${authEndPoint}?client_id=${spotifyClientID}&redirect_uri=${spotifyURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;