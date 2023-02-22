import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  }, 
}) => {
  // videoId
  // console.log(snippet)
  return (
    <Card
      sx={{
        // border: "1px solid #1e1e1e",
        borderRadius: "10px",
        boxShadow:
          "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
        width: { md: "300px", xs: "100%" },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : ""}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "60px" }}>
        <Link to={videoId ? `/video/${videoId}` : ""}>
          <Typography fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || ""}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || ""}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
          
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
