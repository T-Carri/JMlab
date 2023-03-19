import React from 'react'
import './welcome.css'
import Grid from '@mui/material/Grid';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
export const Welcome = () => {
 const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault();
        window.location.href = "https://wa.me/5533996830";
      } 

      
    function handleClick1(e) {
        e.preventDefault();
        window.location.href = "https://www.instagram.com/jmlab_147/";
      } 
      
    
  return (
    <div class="full-screen-container"> 
    
      <div class="bottom-right-container">
      <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-end"
>
<Grid item xs={3} sm={5} >
  <div id='explora' ><p id='soluciones' onClick={()=>navigate('servicios')}>Explora soluciones <NorthEastIcon/></p> </div>
  </Grid>


  <Grid item xs>
  <div id='cotiza'> 
  <ul>
    <li onClick={handleClick1} href="https://www.instagram.com/jmlab_147/"><a onClick={handleClick1} href="https://www.instagram.com/jmlab_147/"><i onClick={handleClick1} href="https://www.instagram.com/jmlab_147/" class="fa-brands fa-instagram"></i></a></li>
    <li  onClick={handleClick} href="https://wa.me/5533996830"   ><a  onClick={handleClick} href="https://wa.me/5533996830" ><i  onClick={handleClick} href="https://wa.me/5533996830"    class="fa-brands fa-whatsapp"></i></a></li> 
    
    <li><a><i class="fa-brands fa-facebook"></i>
    
    </a></li>

    
  </ul>
  
  </div>
  </Grid>


  
</Grid>
      </div>

  </div>
  )
}
