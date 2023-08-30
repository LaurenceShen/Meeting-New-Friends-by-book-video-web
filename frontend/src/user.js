import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes,useNavigate } from "react-router-dom";
import './user.css';
import SideBar from './sidebar.js';
/* mdb-react-ui-kit */
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import useRWD from './useRWD.js';
import {useChat} from './useChat.js';
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
  MDBTextArea,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

import {
  MDBCardTitle,
  MDBCardHeader,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

import { MDBBadge } from 'mdb-react-ui-kit';

import SidebarMenu from 'react-bootstrap-sidebar-menu';

import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';

function User(){
  const {books, status, post,profile, sendPost, getMyPost,sendToken}=useChat();
  const [mypost, setMyPost] = useState([]);
  const [newprofile, setnewProfile] = useState("Web Developer\nLives in New York\nPhotographer");
  const [textshow, setTextShow] = useState(false);
  const [change, setChange] = useState([true]);
  const device = useRWD();
  const navigate=useNavigate();	
  
  const handleTextShow = () => {
    setTextShow(!textshow);
    console.log(newprofile.split("\n"));
  }

  const handleTextSave = () => {
    handleTextShow();
  }

  useEffect(
    () => {
			if(!sendToken()){
				navigate('/login');				
			}
    },
    []
  )
  useEffect(
	()=>{
		if(profile.email){
			getMyPost(profile.email);
			setMyPost(post);
			//console.log('pp',profile);

		}
    },[profile]		
  )

  return (
    <div className="User">
            <div className = "User-block">
                <SideBar />
            </div>
    <div className = { device === "mobile" ? ("User-profile-mobile") : ("User-profile")}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="9">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  {/*https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp*/}
                  <MDBCardImage src={profile.picture}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{profile.name}</MDBTypography>
                  <MDBCardText>{profile.email}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">About</MDBCardText>
                  <MDBCardText className="mb-0">
                    {textshow ?
                    <i className="fas fa-pen-nib" onClick = {() => handleTextShow(true)}></i>
                    : <i className="fas fa-check" onClick = {() => handleTextSave()}></i>
                    }
                  </MDBCardText>
                  </div>
                  {textshow ? 
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    {newprofile.split('\n').map((i)=>
                       <ul>{i}</ul>
                    )}
                  </div>
                  : 
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                        <MDBTextArea label='About' id='textAreaExample' value ={newprofile} rows={4} onChange = {(e) => setnewProfile(e.target.value)} />
                  </div>
                  }
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent posts</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                    {post
                    .slice(0)
                    .reverse()
                    .map((i) => (<><Postcard content = {i}/><br /></>))}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>
  );
}

function Postcard(content) {
    //console.log("postcards:", content);
  return (
    <MDBCard alignment='center'>
      <MDBCardBody>
        <MDBCardText>{content.content}</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted' style = {{"font-size" : '1px'}} >2 days ago</MDBCardFooter>
    </MDBCard>
  );
}
export default User;
