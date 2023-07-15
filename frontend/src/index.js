import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './login.js';
import SideBar from './sidebar.js';
import Login from './login.js';
import User from './user.js';
import Dating from './dating.js';
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

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBListGroup,
  MDBListGroupItem,
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

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import {TransitionGroup} from 'react-transition-group';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

var items = ['1.jpeg','2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg']
//var items = ['1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
var items = [
            'https://mdbootstrap.com/img/new/standard/city/042.jpg',
            'https://mdbootstrap.com/img/new/standard/city/043.jpg',
            'https://mdbootstrap.com/img/new/standard/city/044.jpg',
            'https://mdbootstrap.com/img/new/standard/city/045.jpg',
            'https://mdbootstrap.com/img/new/standard/city/046.jpg',
            'https://mdbootstrap.com/img/new/standard/city/047.jpg',
            'https://mdbootstrap.com/img/new/standard/city/048.jpg',
            'https://mdbootstrap.com/img/new/standard/city/049.jpg',
            'https://mdbootstrap.com/img/new/standard/city/050.jpg',
            'https://mdbootstrap.com/img/new/standard/city/051.jpg',
            'https://mdbootstrap.com/img/new/standard/city/052.jpg',
        ]
*/
/*
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
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
  </div>
  );
  
  }else{
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
}
}
*/
function Table(){
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
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
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
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
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  
  return (
    <div className = "Search-Block">
    <div className = "Search-Column">
      <MDBInputGroup>
        <MDBInput label='Search' />
      </MDBInputGroup>
      </div>
      <div className = "Search-and-Post">
      <div className = "Search-Button">
        <MDBBtn size='lg'  floating style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
            <MDBIcon  icon='search' />
        </MDBBtn>
        &nbsp;
        &nbsp;
        <MDBBtn size='lg' onClick={toggleShow} floating style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
            <MDBIcon fas icon="edit" />
        </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Post!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
<MDBTextArea label='Post' id='textAreaExample' rows={4} />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
        <MDBBtn size='lg' floating style={{ background: 'linear-gradient(to right, #84fab0, #8fd3f4)' }}>
        <MDBIcon far icon="paper-plane" />
        </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
        <div className = "Post">
      </div>
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

function Tab() {
  const [basicActive, setBasicActive] = useState('tab1');
  const device = useRWD();
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className = {(device === "mobile") ? "Tab-mobile" : "Tab"}>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          New
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            For you
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Following
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}><Recommendation/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><Carousel items = {items} active={0} /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><Table /><Recommendation /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}><Table /></MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}

function SideList(){

  return (
  
    <div className = "New-Articles">
    <p> What New </p>
    <MDBListGroup list-group-transparent  numbered style={{ minWidth: '22rem', background: 'none' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Subheading</div>Cras justo odio
        </div>
        <MDBBadge pill light>
          14
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
    <br />
    <p> Follow them </p>

    <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'>
          View
        </MDBBtn>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Alex Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'>
          View
        </MDBBtn>
      </MDBListGroupItem>
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
          View
        </MDBBtn>
      </MDBListGroupItem>
    </MDBListGroup>
    </div>
  );
}
/*
function Carousel(){
  return (
    <div className = "Carousel">
        <h3 className = "Title"> Recommend </h3>
        <br />
    <MDBCarousel showIndicators showControls fade>
    <div className = "Carousel-inner">
      <MDBCarouselItem
        itemId={1}
        interval={700}
      >
    <div className = "Carousel-images">
      <li>
      <img
        src='x.jpeg'
        alt='...'
      />
       </li>
       <li>
       <img  
        className='w-100 d-block'
        itemId={2}
        interval={700}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      />
      </li>
      </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        interval={700}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
      </div>
    </MDBCarousel>
    </div>
  );
}
*/
class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = (this.state.active - 2); i <= this.state.active + 2; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    /*
                <div className="arrow arrow-left" onClick={this.leftClick}>
                    <MDBIcon fas icon="angle-double-left" />
                </div>
    */
    render() {
        return(
            <div id="carousel" className="noselect">
                <TransitionGroup
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </TransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}>
                    <MDBIcon fas icon="angle-double-right" />
                </div>
            </div>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                <img src = {this.props.id} style = {{width : "100%", height:"100%"}} />
            </div>
        )
    }
}

function FrontPage () {
        const device = useRWD();
        return(
            <div className = "FrontPage">
                <div className = "User-block">
                    <SideBar />
                </div>
                <h2 className = "Title"> Search! </h2>
                <div className = "Search-Bar">
                    <SearchBar />
                </div>
                {device === "mobile" ?
                (<div className = "Article_mobile">
                    <Tab />
                    <SideList />
                </div>
                    ):
                (<div className = "Articles">
                    <Tab />
                    <div className = "New">
                        <SideList />
                    </div>
                </div>)
                
                }
            </div>
        );
    }





// ========================================

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <FrontPage /> } />
        <Route path="/login" element={ <GoogleOAuthProvider clientId="325684444932-r6ba80mc6eong2p7dnn62flrqd3266c6.apps.googleusercontent.com">
        <React.StrictMode>
            <Login />
        </React.StrictMode>
    </GoogleOAuthProvider> } />
        <Route path="/user" element={ <User /> } />
        <Route path="/dating" element={ <Dating /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
       //<Route path="users/:userId" component={Users} />
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FrontPage />);
*/
