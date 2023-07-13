import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './login.css';
import './index.css';
import SideBar from './sidebar.js';
/* mdb-react-ui-kit */
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

import { MDBBadge } from 'mdb-react-ui-kit';

import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login(){
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <div className="Login">
            <div className = "User-block">
                <SideBar />
            </div>
                {profile ? (
                <div className="Login-Block">
                    <h2 className = "Title">Logged in!</h2>
                    <br />
                    <br />
                    <div className = "Google-Login">
                        <p>Welcome,  {profile.name}!<br /></p>
                        <a> Write your first post! &nbsp;</a>
                        <a href = '/#/post'><MDBIcon fas icon="pen-alt" /></a>
                    <br />
                    <br />
                        <button onClick={logOut}>Log out</button>
                    </div>
                </div>
                    ) : (
                <div className="Login-Block">
                    <h2 className = "Title">Login</h2>
                    <br />
                    <br />
                    <div className = "Google-Login">
                        <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    </div>
            </div>
                )}
        </div>
    );
}
export default Login;
