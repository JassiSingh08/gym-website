import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="20px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography className="style" fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{BackgroundColor:'#ff2625', padding:"10px"}}>
        Explore Exercises
      </Button>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Typography
        fontWeight="600"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
