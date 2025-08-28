import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function Contact(){
const { register, handleSubmit, reset } = useForm()
const onSubmit = data => {
// Placeholder: integrate EmailJS or your backend here
console.log('contact form', data)
alert('Message sent (demo). Replace with EmailJS or backend).')
reset()
}


return (
<Box>
<Typography variant='h5' gutterBottom>Contact</Typography>
<form onSubmit={handleSubmit(onSubmit)} style={{display:'grid',gap:12,maxWidth:560}}>
<TextField {...register('name')} label='Name' variant='filled' InputLabelProps={{shrink:true}} />
<TextField {...register('email')} label='Email' variant='filled' InputLabelProps={{shrink:true}} />
<TextField {...register('message')} label='Message' variant='filled' multiline rows={4} InputLabelProps={{shrink:true}} />
<Box sx={{display:'flex',gap:2,alignItems:'center'}}>
<Button type='submit' variant='contained' className='gradient-btn'>Send Message</Button>
<Box sx={{ml:'auto'}}>
<a href='mailto:you@example.com'>Email</a> • <a href='https://github.com/yourhandle' target='_blank' rel='noreferrer'>GitHub</a> • <a href='https://www.linkedin.com'>LinkedIn</a>
</Box>
</Box>
</form>
</Box>
)
}