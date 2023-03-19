import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png'
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar() {

    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"   color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar>
          <IconButton
            size='small'
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
           onClick={()=>navigate('/')}
          >
            <img  style={{width:'35vh', height:'20vh', opacity:1}}  src={logo}/>
        
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}