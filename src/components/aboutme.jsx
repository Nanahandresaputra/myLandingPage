import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutME = () => {
  return (
    <Box sx={{ bgcolor: "#14191f", py: { xs: "10vh", sm: "3vh" } }} id="About Me">
      <Container data-aos="fade-up">
        <Typography textAlign="center" variant="h4" color="secondary" fontWeight={650} fontFamily="monospace" sx={{ mb: { xs: "2vh", sm: "5vh" }, mt: { xs: "0", sm: "9vh" } }}>
          About Me
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: { xs: "12px", sm: "20px" } }} color="secondary" fontWeight={650} fontFamily="monospace">
          I am a vocational high school graduate with an interest in IT, especially programming. I learned programming at Eduwork by taking Fullstack web developer classes using MongoDB, Express.JS, React.JS, and Node.JS technologies, and I
          have created several projects to implement my knowledge.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutME;
