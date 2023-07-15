import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './dating.css';
import './index.css';
import SideBar from './sidebar.js';
import useRWD from './useRWD.js';
/* mdb-react-ui-kit */
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';


function Dating(){
    return(
    <div className = "Dating">
        <div className = "User-block">
            <SideBar />
        </div>
        <div className = "Card">
            <MDBCard style = {{width : '80%'}}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>This guy has the same interset as you ...</MDBCardTitle>
                    <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img
                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                        />
                        <div className='ms-3'>
                            <p className='fw-bold mb-1'>Kate Hunington</p>
                            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                        </div>
                    </div>
                    <MDBBtn size='sm' rounded color='link'>
                        Chat
                    </MDBBtn>
                </MDBListGroupItem>
            </MDBCardBody>
        </MDBCard>
    </div>
    </div>
  );
}

export default Dating;
