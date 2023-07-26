import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,HashRouter, Route, Routes,useNavigate,Link } from "react-router-dom";
import {ChatProvider,useChat} from './useChat.js'
import './index.css';
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



import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import {TransitionGroup} from 'react-transition-group';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function BookProfile(){
	const [rcount,setRcount]=useState(-1);
	const [key,setKey]=useState("");
	const {keyword}=useParams();
	let location = useLocation();
    
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
            
        </div>
	</div>
	);
}
