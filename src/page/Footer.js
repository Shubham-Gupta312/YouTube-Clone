import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    const date = new Date();
  return (
    <Box sx={{color: 'black', backgroundColor: 'yellow', height: '40px', textAlign: 'center'}}>
        &copy; {date.getFullYear()} <br />
        Made by Shubham Gupta
    </Box>
  )
}

export default Footer
