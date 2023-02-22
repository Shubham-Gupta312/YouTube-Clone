import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos} from './Videos';
import {fetchFromAPI} from '../utils/fetchFromAPI';


const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(()=> {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]));
  }, [id]);

  // console.log(VideoDetail)
  return (
    <Box  ml={3} mt={2}  sx={{boxShadow:"inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)", width: '70vw'}} >
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%',position: 'sticky', top: '86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>

          <Typography variant='h5' fontWeight='bold' mt={1} ml={1} >
            {VideoDetail?.snippet.title}
          </Typography>

          <Typography color='gray' sx={{marginTop: '1px'}} ml={1} mt={0}>
            {VideoDetail?.snippet.channelTitle}
          </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
    
  )
}

export default VideoDetail
