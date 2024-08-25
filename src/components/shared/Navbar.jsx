import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                color: "black",
              }}
            >
              <span style={{ color: "#2196F3" }}>SPAC</span>
              <span style={{ color: "#fe3f40" }}>DYNA</span>
            </Typography>
            <Box
              sx={{
                marginLeft: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Blog",
                "Message Us",
              ].map((item, index) => (
                <Button
                  key={index}
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`} // Convert button text to id
                  sx={{
                    marginLeft: 4,
                    color: "#333",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#fe3f40", // Change text color to red on hover
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                href="#contactnow"
                sx={{
                  backgroundColor: "#fe3f40",
                  borderRadius: 20,
                  marginLeft: 4,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#03a4ed", // Slightly darker red on hover
                  },
                }}
                variant="contained"
              >
                Contact Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
