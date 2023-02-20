import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, } from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const {id} = useParams();

  // console.log(channelDetail, videos)

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>
    setChannelDetail(data?.items[0]));
  },[id])

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items),[id])
  return (
    // console.log(id)
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(164,195,196,1) 0%, rgba(167,232,154,1) 35%, rgba(105,218,230,1) 100%)',
          height: '326px',
          zIndex: 10,
          margin: 'auto',
          marginTop: '-93px'
        }}/>
        <ChannelCard channelDetail={channelDetail}/>
      </Box>

    </Box>
    
    
  )
}

export default ChannelDetail
