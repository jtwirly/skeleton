import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Router } from "@reach/router";
import Feed from "./pages/Feed.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import Chatbook from "./pages/Chatbook.js";
import { jwtDecode } from 'jwt-decode';

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "645648346214-0t936jmbg6c4pbho8ns1u9iaja2oj4kg.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {userId ? (
          <button
            onClick={() => {
              googleLogout();
              handleLogout();
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
        )}
        <h1>Good luck on your project :)</h1>
        <h2> What you need to change in this skeleton</h2>
        <ul>
          <li>
            Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at
            http://weblab.is/clientid)
          </li>
          <li>Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)</li>
          <li>
            Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the
            MongoDB setup.
          </li>
          <li>Change the Database Name for MongoDB to whatever you put in the SRV (server.js)</li>
        </ul>
        <h2>How to go from this skeleton to our actual app</h2>
        <a href="https://docs.google.com/document/d/110JdHAn3Wnp3_AyQLkqH2W8h5oby7OVsYIeHYSiUzRs/edit?usp=sharing">
          Check out this getting started guide
        </a>
      </GoogleOAuthProvider>
    <div className="App-container">
        <Router>
          <Feed path="/" userId={userId} />
          <Profile path="/profile/:userId" />
          <Chatbook path="/chat/" userId={userId} />
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default Skeleton;
