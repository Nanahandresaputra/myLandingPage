import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImHtmlFive2 } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiJavascript, SiCss3, SiBootstrap, SiNodedotjs, SiMui, SiExpress } from "react-icons/si";
const Skills = () => {
  const reactIcon = [
    {
      icon: <ImHtmlFive2 />,
      title: "Html",
    },
    {
      icon: <SiCss3 />,
      title: "Css",
    },
    {
      icon: <SiJavascript />,
      title: "Javascript",
    },
    {
      icon: <GrReactjs />,
      title: "React Js",
    },
    {
      icon: <SiBootstrap />,
      title: "Bootstrap",
    },
    {
      icon: <SiMui />,
      title: "Material UI",
    },
    {
      icon: <SiNodedotjs />,
      title: "Node Js",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDb",
    },
    {
      icon: <SiExpress />,
      title: "Express Js",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#14191f" }} p="20px" id="Skills">
      <Container>
        <Typography color="primary.light" p="30px" variant="h4" fontWeight={650} fontFamily="monospace" data-aos="fade-right">
          My skills
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
          {reactIcon.map((index, i) => (
            <Grid item container textAlign="center" xs={4} sm={3} md={2} direction="column" key={i} data-aos="fade-up">
              <Paper elevation={2} sx={{ bgcolor: "#293548" }}>
                <Typography variant="h3" mt="15px" sx={{ ":hover": { color: "orange" }, cursor: "pointer" }} color="secondary">
                  {index.icon}
                  <Typography variant="h6" component="p" fontWeight={600} fontFamily="monospace" mb="10px">
                    {index.title}
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
