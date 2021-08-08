import React from 'react';
import { loginURL } from '../spotify';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
            <a href={loginURL}>Login with Spotify</a>
        </div>
    )
}

export default Login
