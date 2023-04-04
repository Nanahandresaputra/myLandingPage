import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import berita from "../../public/berita1.jpg";
import store from "../../public/store.jpg";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiNodedotjs, SiExpress, SiBootstrap } from "react-icons/si";
import CardPortofolio from "./card";

const Portofolios = () => {
  const arr = [
    {
      name: "Eduwork Store",
      img: store,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiNodedotjs />,
        icon3: <SiExpress />,
        icon4: <SiMongodb />,
      },
      link: {
        github: "https://github.com/Nanahandresaputra/Eduwork-store.git",
      },
    },
    {
      name: "Portal Berita",
      img: berita,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiBootstrap />,
      },
      link: {
        github: "https://github.com/Nanahandresaputra/reactjs-portalBeritaFunctional.git",
        demo: "https://reactjs-portal-berita-functional.vercel.app/",
      },
    },
  ];

  return (
    <Box sx={{ p: "50px 0 70px", bgcolor: "#111827" }} id="Portofolio">
      <Typography variant="h4" fontWeight={600} m="0 25px 50px" fontFamily="monospace" color="primary.light" data-aos="fade-right">
        Portofolios
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center" data-aos="fade-up">
        {arr.map((idx, i) => (
          <Grid item key={i} justifyContent="center" alignItems="center">
            <CardPortofolio idx={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portofolios;
