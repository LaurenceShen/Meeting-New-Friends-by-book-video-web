import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import styled from 'styled-components';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
}));
export default function Searchselector(){
	  const [chipData, setChipData] = React.useState([
	      { key: 0, label: 'Angular' },
		  { key: 1, label: 'jQuery' },
		  { key: 2, label: 'Polymer' },
		  { key: 3, label: 'React' },
		  { key: 4, label: 'Vue.js' },
      ]);

	  const handleDelete = (chipToDelete) => () => {
			setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
	  };
	
	return(
		<div style={{width:"25%",marginLeft:"20px"}}>
		   <Box sx={{
		   		display:'flex',
				alignItems:'center',
				flexDirection:'column',
				width:"99%",
				backgroundColor:"#ffffff",
				borderRadius:3,
				transition:"0.5s",
				'&:hover':{
					boxShadow:3,
				}
		   }}>
		   <Typography variant="h6">
		   	Selector
		   </Typography>
		  <hr style={{
				border:"1px solid #aaa",
				width:"80%",
				margin:"4px",
		   }}/>
		   <Paper
			  sx={{
			      display: 'flex',
			      justifyContent: 'center',
			      flexWrap: 'wrap',
			      listStyle: 'none',
			      p: 0.5,
			      m: 0.5,
				 /* backgroundColor:"#eeeeee",
				  borderRadius:'5%',*/
			     }}
			 component="ul"
			 elevation={0}
	     >
		{chipData.map((data) => {
		    let icon;
            if (data.label === 'React') {
	          icon = <TagFacesIcon />;
	        }
            return (
	            <ListItem key={data.key}>
     	            <Chip
		              icon={icon}
	                  label={data.label}
					  onClick={()=>{}}
																											              />
			    </ListItem>
			 );
		   })}
		</Paper>
		</Box>
		<FormGroup>
		      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
		      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
		      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        </FormGroup>
		</div>
	);

}
