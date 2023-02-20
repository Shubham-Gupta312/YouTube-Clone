import React from "react";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        // boxShadow:
        //   "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
        // borderRadius: "20px",
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width: {xs: '346px', md: '310px'},
        height: '306px',
        margin: 'auto'

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
          {}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
