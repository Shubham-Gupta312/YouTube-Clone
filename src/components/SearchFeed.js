import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const Feed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(()=> {
    //  setVideos(null);
    fetchFromAPI(`search?part=snippet&q=`).then((data)=> setVideos(data.items));
  }, [searchTerm])

  return (
    <Box>
    <Typography variant="h4" fontWeight="bold" mt={2} ml={1}>
          
          Search Result for: <span style={{ color: "#03fc98" }}>{searchTerm} videos</span>

          <Videos videos={videos} />
    </Typography>
    </Box>
  );
};

export default Feed;
