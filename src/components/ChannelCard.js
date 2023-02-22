import React from "react";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#03fc98",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || ""}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              px: 1,
              mb: 2,
            }}
          ></CardMedia>

          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 18,
                textAlign: "center",
                color: "#acaca2",
                ml: "4px",
              }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
