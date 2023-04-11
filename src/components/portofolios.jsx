import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import berita from "../../public/berita1.jpg";
import store from "../../public/store.jpg";
import listProduct from "../../public/listPorduct.jpg";
import { GrReactjs } from "react-icons/gr";
import { DiSass } from "react-icons/di";
import { SiMongodb, SiNodedotjs, SiExpress, SiBootstrap } from "react-icons/si";
import CardPortofolio from "./card";

const Portofolios = () => {
  const arr = [
    {
      name: "Food Store",
      img: store,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiBootstrap />,
        icon3: <SiNodedotjs />,
        icon4: <SiExpress />,
        icon5: <SiMongodb />,
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
    {
      name: "List Product App",
      img: listProduct,
      icon: {
        icon1: <GrReactjs />,
        icon2: <DiSass />,
        icon3: <SiNodedotjs />,
        icon4: <SiExpress />,
        icon5: <SiMongodb />,
      },
      link: {
        frontend: "https://github.com/Nanahandresaputra/CRUD-product-list-frontend.git",
        backend: "https://github.com/Nanahandresaputra/CRUD-product-list-Backend.git",
        demo: "https://product-list-app.up.railway.app/",
      },
    },
  ];

  return (
    <Box sx={{ p: "50px 0 70px", bgcolor: "#111827" }} id="Portofolio">
      <Typography variant="h4" fontWeight={600} m="0 25px 50px" fontFamily="monospace" color="primary.light" data-aos="fade-up" sx={{ mt: { xs: "0", sm: "4vh" } }}>
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
