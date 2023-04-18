import { Box, Grid, Typography, Card, CardMedia, Container } from "@mui/material";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import personal from "../assets/myPhoto.png";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Box pt={{ xs: "18vh", sm: "11vh" }} bgcolor="#111827">
      <Grid container spacing={0} pb="10vh" height={{ sm: "auto", md: "90vh" }} direction={{ xs: "column-reverse", sm: "row" }}>
        <Grid item xs={12} sm={6} container direction="column" align={{ xs: "center", sm: "start" }} justifyContent="center" alignItems={{ xs: "center", sm: "end", md: "center" }} pt={{ xs: "3vh", sm: "0" }} data-aos="fade-right">
          <Box>
            <Typography variant="h4" fontFamily="monospace" color="primary.light">
              Hi my name is
            </Typography>
            <Typography variant="h2" fontFamily="monospace" fontWeight="600" color="primary.light" display={{ xs: "none", sm: "block" }}>
              <Typewriter
                options={{
                  strings: ["Nana handre <br/>saputra"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography variant="h2" fontFamily="monospace" fontWeight="600" color="primary.light" display={{ xs: "block", sm: "none" }}>
              Nana handre <br />
              saputra
            </Typography>
            <Typography variant="p" fontSize="20px" fontFamily="monospace" color="primary.light">
              I'm junior web developer
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} direction="column" container justifyContent="center" alignItems={{ xs: "center", sm: "center" }} data-aos="fade-left">
          <Card variant="outline" sx={{ width: { xs: "220px", sm: "300px", md: "500px" } }}>
            <CardMedia src={personal} component="img" sx={{ bgcolor: "#111827" }} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
