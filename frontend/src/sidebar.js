import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './login.js';
import useRWD from './useRWD.js';
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

function SideBar(){
  const device = useRWD();
  return (
    <div className='User-icon'>
        <nav className = {device==="mobile" ? ("menu_mobile") : ("menu")}>
            <div className='icon-img'>
                <MDBIcon fas icon="user-circle" size = '2x'/>
            </div>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#/user">User</a></li>
                <li><a href="/#/matching">Matching</a></li>
                <li><a href="/#/login">Login</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default SideBar;
