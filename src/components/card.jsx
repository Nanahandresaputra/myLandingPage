import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const CardPortofolio = ({ idx }) => {
  return (
    <Card
      sx={{
        bgcolor: "#293548",
        overflow: "hidden",
        ":hover #text": {
          height: "100%",
          opacity: 100,
        },
      }}
    >
      <CardActionArea component="span">
        <CardMedia component="img" height={200} image={idx.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p" color="primary.light">
            {idx.name}
          </Typography>
        </CardContent>
        <Typography
          variant="div"
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.8)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 1,
            opacity: 0,
            transition: ".5s",
          }}
          id="text"
        >
          <Typography variant="h2" fontWeight={800} color="warning.main" textAlign="center">
            {idx.icon.icon1}
            {idx.icon.icon2}
            {idx.icon.icon3}
            {idx.icon.icon4} <br />
            <Container>
              <Button
                onClick={() => {
                  window.open(idx.link.github, "_blank");
                }}
                variant="outlined"
                color="warning"
              >
                Github
              </Button>{" "}
              {idx.link.demo ? (
                <Button
                  onClick={() => {
                    window.open(idx.link.demo, "_blank");
                  }}
                  variant="outlined"
                  color="warning"
                >
                  Demo
                </Button>
              ) : null}
            </Container>
          </Typography>
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CardPortofolio;
