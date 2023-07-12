import React, { useState } from 'react';
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
render(){
    //location!
    const { width } = this.state;
    const isMobile = width <= 500;
  if (isMobile){
  return (
    <div className='User-icon'>
        <nav className = "menu_mobile">
            <div className='icon-img'>
                <MDBIcon fas icon="user-circle" size = '2x'/>
            </div>
            <ul>
                <li><a href="user">User</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/#/login">Login</a></li>
            </ul>
        </nav>
  </div>
  );
  
  }else{
  return (
    <div className='User-icon'>
        <nav className = "menu">
            <div className='icon-img'>
                <MDBIcon fas icon="user-circle" size = '2x' />
            </div>
            <ul>
                <li><a href="#/user">User</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="#/login">Login</a></li>
            </ul>
        </nav>
  </div>
  );
  }
}
}
export default SideBar;
