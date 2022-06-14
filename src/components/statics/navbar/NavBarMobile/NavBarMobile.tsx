import { AppBar, Avatar, Box, Toolbar } from '@mui/material'
import React from 'react'
import MenuMobile from './MenuMobile/MenuMobile'

const NavBarMobile = () => {
  return (
    <AppBar position="static" className='cor-navbar'>
    <Toolbar>
      <Box marginX={3} >
        <Avatar 
          alt="Example Alt"
          sx={{ width: 80, height: 20 }}
          src="https://oombe.com/assets/img/mercadolivre_nova_logo.png" />
      </Box>
      <Box marginLeft="auto">
        <MenuMobile></MenuMobile>
      </Box>


    </Toolbar>
  </AppBar>
  )
}

export default NavBarMobile