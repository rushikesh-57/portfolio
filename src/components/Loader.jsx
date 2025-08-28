import React from 'react'
import Box from '@mui/material/Box'


export default function Loader(){
return (
<Box sx={{position:'fixed',inset:0,display:'grid',placeItems:'center',background:'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',zIndex:9999}}>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<div style={{width:48,height:48,display:'grid',placeItems:'center',borderRadius:8,background:'linear-gradient(90deg,#18a0b8,#00e5ff)'}}> <strong style={{color:'#041014'}}>&lt;R/&gt;</strong></div>
<div style={{color:'white'}}>Loading portfolio…</div>
</div>
</Box>
)
}