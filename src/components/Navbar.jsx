import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link as ScrollLink } from 'react-scroll'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from "@mui/material/styles"
import { useColorMode } from "../context/ThemeContext"

const sections = ['home','about','skills','projects','experience','fun-facts']
// 🚨 make sure your section ids in HTML match these exactly

export default function Navbar(){
  const theme = useTheme()
  const colorMode = useColorMode()
  const [open, setOpen] = useState(false)

  return (
    <AppBar 
      position="sticky" 
      elevation={2} 
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(6px)'
      }}
    >
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        {/* Logo / Brand */}
        <Box sx={{display:'flex', alignItems:'center', gap:2}}>
          <Box sx={{fontWeight:700, fontSize:18}}>Rushi</Box>
        </Box>

        {/* Desktop Nav */}
        <Box sx={{display:{xs:'none', md:'flex'}, gap:1}}>
          {sections.map(s => (
            <ScrollLink 
              key={s} 
              to={s} 
              smooth={true} 
              offset={-80} 
              duration={400} 
              spy={true} 
              activeClass="active-link"
            >
              <Button 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&.active-link': { color: theme.palette.primary.main }
                }}
              >
                {s.replace('-', ' ').charAt(0).toUpperCase() + s.replace('-', ' ').slice(1)}
              </Button>
            </ScrollLink>
          ))}
          <IconButton sx={{ml:1}}>
            <LightModeIcon/>
          </IconButton>
        </Box>

        {/* Mobile Nav */}
        <IconButton sx={{display:{md:'none'}}} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
          <List sx={{width:240}}>
            {sections.map(s => (
              <ListItem key={s}>
                <ScrollLink 
                  to={s} 
                  smooth={true} 
                  offset={-80} 
                  duration={400} 
                  spy={true} 
                  activeClass="active-link"
                  onClick={() => setOpen(false)}
                >
                  <Button 
                    fullWidth 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)',
                      '&.active-link': { color: theme.palette.primary.main }
                    }}
                  >
                    {s.replace('-', ' ').charAt(0).toUpperCase() + s.replace('-', ' ').slice(1)}
                  </Button>
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
