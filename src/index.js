import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

function App() {
    const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  return (
    <div className='User-icon'>
        <nav className = "menu">
            <div className='icon-img'>
                <MDBIcon fas icon="user-circle" size = '2x'/>
            </div>
            <ul>
                <li><a href="user">User</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
  </div>
  );
}

function NavBar(){
    const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar fixed = "top" expand='lg' light bgColor='none'>
      <MDBContainer fluid show={showNavRight}>
        <MDBNavbarNav  className='d-flex flex-row'>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon='shopping-cart' />
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
              <MDBIcon fab icon='twitter' />
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <MDBNavbarNav right fullWidth={false} className='d-flex flex-row'>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon= "cat" />
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

function SearchBar(){

  const [showSearchAlert, setShowSearchAlert] = useState(false);
  return (
    <div className = "Search-Block">
    <div className = "Search-Column">
      <MDBInputGroup>
        <MDBInput label='Search' />
      </MDBInputGroup>
      </div>
      <div className = "Search-Button">
        <MDBBtn size='lg'  floating style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
            <MDBIcon  icon='search' />
        </MDBBtn>
      </div>

    </div>
  );
}

class Recommendation extends React.Component {
    render(){
        return(
            <div className = "Recommend">
                <h3 className = "Title"> Recommend </h3>
                <Books />
            </div>
        )
    }
}

function Books(){
    let imgs = [
        [
            'https://mdbootstrap.com/img/new/standard/city/041.jpg',
            'https://mdbootstrap.com/img/new/standard/city/042.jpg',
            'https://mdbootstrap.com/img/new/standard/city/043.jpg',
        ],
        [
            'https://mdbootstrap.com/img/new/standard/city/044.jpg',
            'https://mdbootstrap.com/img/new/standard/city/045.jpg',
            'https://mdbootstrap.com/img/new/standard/city/046.jpg',
        ],
        [
            'https://mdbootstrap.com/img/new/standard/city/047.jpg',
            'https://mdbootstrap.com/img/new/standard/city/048.jpg',
            'https://mdbootstrap.com/img/new/standard/city/049.jpg',
        ],
        [
            'https://mdbootstrap.com/img/new/standard/city/050.jpg',
            'https://mdbootstrap.com/img/new/standard/city/051.jpg',
            'https://mdbootstrap.com/img/new/standard/city/052.jpg',
        ],
    ]

    let imgs_post = imgs.map((i)=>
        <MDBRow>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img
            src={i[0]}
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src={i[1]}
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src={i[2]}
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
          />
        </MDBCol>
        </MDBRow>
    )
    console.log(imgs_post)
  return (
    <MDBContainer>
        {imgs_post}
    </MDBContainer>
  )
}

class FrontPage extends React.Component {
    render(){
        return(
            <div className = "FrontPage">
                <div className = "User-block">
                    <App />
                </div>
                <h2 className = "Title"> Search! </h2>
                <div className = "Search-Bar">
                    <SearchBar />
                </div>
                <div className = "Recommend-Block">
                    <Recommendation 
                    />
                </div>
            </div>
        );
    }
}





// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FrontPage />);
