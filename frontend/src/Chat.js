import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,HashRouter, Route, Routes,useNavigate,Link } from "react-router-dom";
import './index.css';
import './Chat.css';
import './login.js';
import SideBar from './sidebar.js';
import Login from './login.js';
import User from './user.js';
import Dating from './dating.js';
import useRWD from './useRWD.js';
import Search from './Search.js';
import BookProfile from './BookProfile.js';
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

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBListGroup,
  MDBListGroupItem,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from 'mdb-react-ui-kit';

import { MDBTextArea } from 'mdb-react-ui-kit';

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


import {ChatProvider,useChat} from './useChat.js'

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBTypography,
} from 'mdb-react-ui-kit';

import { TransitionGroup } from 'react-transition-group';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Chat(){
  return (
  <div className = "FrontPage">
    <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-Brown">
            Member
          </h5>

          <MDBCard className="mask-custom">
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                <li
                  className="p-2 border-bottom"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,.3) !important",
                  }}
                >
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">John Doe</p>
                        <p className="small text-black">
                          Hello, Are you there?
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small mb-1 text-black">Just now</p>
                      <span className="badge bg-danger float-end">1</span>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">Danny Smith</p>
                        <p className="small text-black">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-whites mb-1 text-black">5 mins</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">Ashley Evan</p>
                        <p className="small text-black">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-black mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">Kate Moss</p>
                        <p className="small text-black">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-black mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">Lora Croft</p>
                        <p className="small text-black">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-black mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a
                    href="#!"
                    className="d-flex justify-content-between link-light"
                  >
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0 text-black">Brad Pitt</p>
                        <p className="small text-black">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-black mb-1">Wednesday</p>
                      <span className="text-white float-end">
                        <MDBIcon fas icon="check" />
                      </span>
                    </div>
                  </a>
                </li>
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
        
        <div className="d-flex flex-row">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                width="60"
            /> 
                      <div className="pt-3">
                        <p className="fw-bold mb-0">Brad Pitt</p>
                        <p className="small text-muted">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
        </div>
        <br />
        
          <MDBTypography listUnStyled className="text-white">
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard className="mask-custom">
                <MDBCardBody>
                  <p className="mb-0 text-muted">
                  <p className="mb-0 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod 
                  </p>
                    <MDBIcon far icon="clock" /> 12 mins ago
                    </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100 mask-custom">
                <MDBCardBody>
                  <p className="mb-0 text-muted">
                  <p className="mb-0 text-black">
                    Sed ut perspiciatis unde omnis iste natus error sit
                  </p>
                    <MDBIcon far icon="clock" /> 11 mins ago
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard className="mask-custom">
                <MDBCardBody>
                  <p className="mb-0 text-muted">
                  <p className="mb-0 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                    <MDBIcon far icon="clock" /> 10 mins ago
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <div className = "message-group">
                <li className="mb-1">
                    <div className = "message-text">
                        <MDBTextArea label="Message" id="textAreaExample" rows={3}>
                        </MDBTextArea>
                    </div>
                </li>
                <li>
                    <div className="SendButton">
                        <MDBBtn color="warning" size="lg" rounded className="float-end">
                            Send
                        </MDBBtn>
                    </div>
                </li>
            </div>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
