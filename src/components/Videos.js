import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos, channelDetail}) => {
    // console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={4} mt={2} ml={2}>
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard channelDetail={channelDetail} video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos 
