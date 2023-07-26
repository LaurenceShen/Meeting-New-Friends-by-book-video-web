import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Loading from './Loading.js'
export default function Searchlist({result}) {
	const [showresult,setShowresult]=useState([]);
	let location=useLocation();
	useEffect(()=>{
		setShowresult(result);
	},[result])
	useEffect(()=>{
		setShowresult([])
	},[location])
 return (
	<>
	{showresult.length>0 ? 
    <List sx={{ width: '70%', bgcolor: 'background.paper',pt:0 }} component='div'>
	{showresult.map((r)=><>
      <ListItem alignItems="flex-start"  >
        <ListItemAvatar
		 sx={{
			width:100,	
			height:130,
			mr:10,
			ml:2,
			display:"flex",
			alignItems:"center",
		}}>
			<img style={{height:"100%",maxWidth:100}} alt="book1" src={r.img}/>
        </ListItemAvatar>
		<Box sx={{pt:1}}>
        <ListItemText
          primary={
		  	<React.Fragment>
				<Typography
					variant="h6"
					>
		  		{r.name}
				</Typography>
				</React.Fragment>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {r.author}
              </Typography>
		{/*	{r.description.length>200?r.description.slice(0,199):r.description}*/}
            </React.Fragment>
          }
        />
		</Box>
      </ListItem>
      <Divider variant="inset" component="li" />
	  </>)}

    {/*  <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>*/}
    </List> : <Box sx={{
		width:"95%",
		height:"400px",
		backgroundColor:"#ffffff",
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	}}><Loading/></Box>}
	</>
  );
} 
