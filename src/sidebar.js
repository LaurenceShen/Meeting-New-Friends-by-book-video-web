import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './login.js';
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

class SideBar extends React.Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
    }

    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };
    
    logOut = () => {
        googleLogout();
        useState.setProfile(null);
    };

render(){
    //location!
    const { width } = this.state;
    const isMobile = width <= 500;
  return (
    <div className='User-icon'>
        <nav className = {isMobile ? ("menu_mobile") : ("menu")}>
            <div className='icon-img'>
                <MDBIcon fas icon="user-circle" size = '2x'/>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#/user">User</a></li>
                <li><a href="/#/user">For you</a></li>
                <li><a href="/#/login">Login</a></li>
            </ul>
        </nav>
  </div>
  );
  
  }
}

export default SideBar;
