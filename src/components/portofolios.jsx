import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import berita from "../assets/berita1.jpg";
import store from "../assets/store.jpg";
import listProduct from "../assets/listPorduct.jpg";
import movies from "../assets/movies.jpg";
import companyProfile from "../assets/company-profile.jpg";
import jobPortal from "../assets/jobportal.jpg";

import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiNodedotjs, SiExpress, SiBootstrap, SiMui, SiCss3, SiTailwindcss } from "react-icons/si";
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
      name: "NETMOVIES",
      img: movies,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiMui />,
      },
      link: {
        github: "https://github.com/Nanahandresaputra/net-movies.git",
        demo: "https://net-movies.netlify.app/",
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
      name: "Job Portal App",
      img: jobPortal,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiMui />,
      },
      link: {
        github: "https://github.com/Nanahandresaputra/job-portal-app.git",
        demo: "https://jobportal-app-nn.netlify.app/",
      },
    },
    {
      name: "List Product App",
      img: listProduct,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiCss3 />,
        icon3: <SiNodedotjs />,
        icon4: <SiExpress />,
        icon5: <SiMongodb />,
      },
      link: {
        frontend: "https://github.com/Nanahandresaputra/CRUD-product-list-frontend.git",
        backend: "https://github.com/Nanahandresaputra/CRUD-product-list-Backend.git",
        demo: "https://list-products-client.vercel.app/",
      },
    },
    {
      name: "Company Profile",
      img: companyProfile,
      icon: {
        icon1: <GrReactjs />,
        icon2: <SiTailwindcss />,
      },
      link: {
        github: "https://github.com/Nanahandresaputra/profile-company.git",
        demo: "https://profile-company-nana.netlify.app/",
      },
    },
  ];

  return (
    <Box sx={{ p: "50px 0 70px", bgcolor: "#111827", display: "flex", flexDirection: "column", alignItems: "center" }} id="Portofolio">
      <Typography variant="h4" fontWeight={600} m="0 25px 50px" fontFamily="monospace" color="primary.light" data-aos="fade-up" sx={{ mt: { xs: "0", sm: "4vh" }, alignSelf: "start" }}>
        Portofolios
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center" data-aos="fade-up" width="90%">
        {arr.map((idx, i) => (
          <Grid item key={i} sm={6} md={4}>
            <CardPortofolio idx={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portofolios;
