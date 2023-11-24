import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
import { auth } from '../firebase/setup';


 function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#45514D", height:100}} position="static">
        <Toolbar variant="dense">
          <Avatar src={auth.currentUser?.photoURL}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default Navbar;