import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  const contactIcon = [
    {
      icon: <BsGithub />,
      title: "nanahandresaputra",
      link: "https://github.com/Nanahandresaputra",
    },
    {
      icon: <BsLinkedin />,
      title: "nanahandresaputra",
      link: "https://www.linkedin.com/in/nanahandresaputra/",
    },
    {
      icon: <BsInstagram />,
      title: "nanahandre15",
      link: "https://www.instagram.com/nanahandre15/",
    },
    {
      icon: <TfiEmail />,
      title: "nanaggmu@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=nanaggmu@gmail.com",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#14191f", p: "40px 0" }} id="Contact">
      <Container data-aos="fade-left">
        <Typography variant="h4" color="primary.light" fontFamily="monospace" fontWeight={600}>
          Contact Me
        </Typography>
      </Container>
      <Box data-aos="fade-left">
        {contactIcon.map((index, i) => (
          <Container key={i}>
            <IconButton
              color="secondary"
              size="large"
              onClick={() => {
                window.open(index.link, "_blank");
              }}
            >
              <Typography variant="h6" fontSize={30} sx={{ ":hover": { color: "orange" }, display: "flex" }}>
                {index.icon}
                <Typography ml="10px" component="p">
                  {index.title}
                </Typography>
              </Typography>
            </IconButton>
          </Container>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
