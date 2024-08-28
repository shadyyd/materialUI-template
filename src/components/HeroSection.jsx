import { Box, Typography, Button, TextField, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "-150px",
          zIndex: 1,
        }}
      >
        <img
          src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/baner-dec-right.png"
          alt="Left Decoration"
          style={{
            width: "300px",
            height: "auto",
            transform: "rotate(180deg)",
          }}
        />
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          right: "-150px",
        }}
      >
        <img
          src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/baner-dec-right.png"
          alt="Right Decoration"
          style={{
            width: "466px",
            height: "auto",
            transform: "rotate(-25deg)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 2, padding: "5px" }}>
        <Box
          id="home"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "transparent",
            padding: "40px",
            gap: "15px",
            flexDirection: {
              xs: "column",
              md: "row",
              lg: "row",
            },
          }}
        >
          {/* Text Section */}
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h6"
              sx={{ color: "#fe3f40", marginBottom: "10px" }}
            >
              WELCOME TO SPACE DYNAMIC
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              We Make{" "}
              <span style={{ color: "#2196F3" }}>
                Digital Ideas <br />
              </span>{" "}
              & <span style={{ color: "#fe3f40" }}>SEO</span> Marketing
            </Typography>

            {/* Input and Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <TextField
                placeholder="Your website URL..."
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  borderRadius: "50px",
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "50px",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fe3f40",
                  borderRadius: "50px",
                  padding: "10px 30px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#03a4ed",
                  },
                }}
              >
                Analyze Site
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            sx={{ width: "500px", display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/banner-right-image.png"
              alt="Hero"
              style={{
                width: "80%",
                height: "80%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
