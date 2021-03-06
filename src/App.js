import React,{useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        // getMe return all spotify data of the user
        console.log(user );
      })
    }
  }, [])

  return (



    <div className="App">
      {
      token? 
        <Player/>
      :
        <Login/>
      }
    </div>
  );
}

export default App;
