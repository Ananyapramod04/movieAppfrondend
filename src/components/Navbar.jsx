import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static " style={{width:"700 px"}}>
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Link style={{color:'white'}}  to='/'><Button color="inherit">View movie</Button></Link>
        
        <Link style={{color:'white'}}  to='/'><Button color="inherit">Add movie</Button></Link>
        
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
