import { Box, Typography, TextField, Button, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/contact-bg.png')",
        // paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: {
          lg: 20,
          xs: 5,
        },
        paddingRight: {
          lg: 20,
          xs: 5,
        },

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          flexWrap: "wrap",
          paddingTop: 5,
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: "1",
            maxWidth: "600px",
            marginRight: { xs: 0, md: "2rem" },
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: "2rem", md: 0 },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Feel Free To Send Us A Message About <br /> Your Website Needs
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer
            ket eiusmod tempor incididunt ut labore et dolores.
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            For any enquiry, Call Us: <PhoneIcon /> 0-100-389-6598
          </Typography>
        </Box>
        {/* Right Section */}
        <Box
          sx={{
            flex: "1",
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <Box component="form">
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "#d1f3ff",
                  },
                  "& fieldset": {
                    border: "none", // Remove the border
                  },
                }}
              />
              <TextField
                fullWidth
                label="Surname"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "#d1f3ff",
                  },
                  "& fieldset": {
                    border: "none", // Remove the border
                  },
                }}
              />
            </Box>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              sx={{
                marginBottom: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "#d1f3ff",
                },
                "& fieldset": {
                  border: "none", // Remove the border
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                marginBottom: "1rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#d1f3ff",
                },
                "& fieldset": {
                  border: "none", // Remove the border
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#03a4ed", //
                borderRadius: 33,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fe3f40",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        {/* Person Image */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: "auto", md: "-140px" },
            top: { xs: "auto", md: "120px" }, // Adjust this to fit your layout
            width: "200px", // Adjust the size as needed
            display: { xs: "none", lg: "block" }, // Hide on small screens
          }}
        >
          <img
            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/contact-decoration.png" // Replace with your actual image path
            alt="Person"
            style={{ width: "100%", height: "auto", zIndex: 4 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
