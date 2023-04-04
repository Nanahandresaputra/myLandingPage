import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Navbar() {
  const pages = ["Skills", "Portofolio", "Contact"];
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: { xs: "center", md: "end" }, pr: { md: "15em", sm: "0" } }}>
            <Button sx={{ my: 2, color: "white", display: "block", fontWeight: "600", mr: { xs: 0, md: "4em" } }} href={"#"}>
              Home
            </Button>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: "white", display: "block", mr: { xs: 0, md: "2em" } }} href={`#${page}`}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
