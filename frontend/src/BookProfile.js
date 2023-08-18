import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,HashRouter, Route, Routes,useNavigate,Link } from "react-router-dom";
import {ChatProvider,useChat} from './useChat.js'
import './index.css';
import './BookProfile.css';
import SideBar from './sidebar.js';
import useRWD from './useRWD.js';
import Searchbar from './Searchbar.js';
import Box from '@mui/material/Box';
import Searchlist from './Searchlist.js';
import Typography from '@mui/material/Typography';
import Searchselector from './Searchselector.js';
import styled from 'styled-components';
import {useParams, useLocation} from 'react-router-dom';
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

import { MDBRipple } from 'mdb-react-ui-kit';

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import {TransitionGroup} from 'react-transition-group';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 30000;
const ROWS = 5;
const TAGS_PER_ROW = 5;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
      </div>
        <br />
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'> {text}</div>
);

function ShortComment(){
  const {books, status, post, sendPost}=useChat()
  const [basicModal, setBasicModal] = useState(false);
  const [newpost, setnewPost] = useState('');
  const toggleShow = () => setBasicModal(!basicModal);
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  const [email, setEmail] = useState('');

  const [keyin,setKeyin]=useState("")

  useEffect(
  () =>{
    setEmail(localStorage.getItem('useremail'))
  },
  [localStorage.getItem('useremail')]
  )

  let handlePost = () => {
    sendPost([newpost, email]);
    setnewPost('');
  }
    return(
    <>
                        <MDBTextArea label='Post' id='textAreaExample' value ={newpost} rows={4}  onChange = {(e) => setnewPost(e.target.value)} />
                        <br />
                        <MDBBtn size='lg' floating style={{ background: 'linear-gradient(to right, #84fab0, #8fd3f4)' }} onClick = {()=>handlePost([newpost, email])}>
                            <MDBIcon far icon="paper-plane" />
                        </MDBBtn>
        </>
        );
}
export default function BookProfile(r){
	const [rcount,setRcount]=useState(-1);
	const [key,setKey]=useState("");
	const {keyword}=useParams();
	let location = useLocation();

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };
    return (
	<div className = "FrontPage">
		<Searchbar rcount={rcount} keyword={keyword}/>
		 <Box
    		 sx={{
       		 width:"70%",
			padding:5,
			pt:2,
		/*	backgroundColor:"primary.dark",*/
			}}
		 >
  		{/*<Typography variant="subtitle1" sx={{pl:5,}} gutterBottom>
			{`About ${rcount} results`}
		</Typography>*/}
		</Box>
        <div className = "BookProfile">
            <div className = "image-and-comment">
                <div className = 'img'>
                    <img src = "../1.jpeg" style = {{height:"30%"}} />
                </div>
                <div className = "comment">
                    {[...new Array(ROWS)].map((_, i) => (
                        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                            <Tag text={tag} key={tag}/>
                            ))}
                         </InfiniteLoopSlider>
                    ))}
                </div>
            </div>
            </div>
    <div className = "content-and-comment">
        <div className = "content">
      <MDBTabs  className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            intro
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            comment
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}><ShortComment /></MDBTabsPane>
      </MDBTabsContent>
        </div>
        <div className = "shortcomment">
            <ShortComment />
	    </div>
	</div>
	</div>
	);
}





