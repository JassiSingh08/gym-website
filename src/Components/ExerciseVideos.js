import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="34px">
        Watch <span style={{ color: "#ff2625", textTransform: " capitalize" }}>
          {name}
        </span> Exercise Videos
      </Typography>
    </Box>
  );
};

export default ExerciseVideos;
