import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    //  setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items));
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "row", md: "column" } }}>
      <Box sx={{ height: { md: "92vh" }, px: { sx: 0, md: 0.3 } }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="h4" fontWeight="bold" mt={2} ml={1}>
          <span style={{ color: "#acaca2" }}>{selectedCategory} </span>
          <span style={{ color: "#03fc98" }}>videos</span>

          <Videos videos={videos} />
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
