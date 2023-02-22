import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    const date = new Date();
  return (
    <Box sx={{color: 'black'}}>
        &copy; {date.getFullYear()}
    </Box>
  )
}

export default Footer
