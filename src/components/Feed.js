// import React, {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import SideBar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx: "row", md: 'column'}}}>
      <Box sx={{height: {md: '92vh'}, px: {sx: 0, md: 0.3}}}>      
        <SideBar/>
  
        <Typography variant='h4' fontWeight='bold' mt={2}>
          New <span>videos</span>
          
        </Typography>
       
        </Box>
    </Stack> 
  )
}

export default Feed
