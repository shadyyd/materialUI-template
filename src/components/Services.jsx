import { Box, Container, LinearProgress, Typography } from "@mui/material";
export const Services = () => {
  const services = [
    { name: "Website Analysis", value: 84 },
    { name: "SEO Reports", value: 88 },
    { name: "Page Optimizations", value: 94 },
  ];

  return (
    <Container sx={{ marginTop: 14, marginBottom: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "transparent",
        }}
      >
        {/* Left Side: Image or Illustration */}
        <Box sx={{ flex: 1 }}>
          {/* Placeholder for the illustration */}
          <img
            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/services-left-image.png"
            alt="SEO Services"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Right Side: Text Content */}
        <Box sx={{ flex: 1, paddingLeft: "2rem" }}>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
            Grow Your Website With Our{" "}
            <span style={{ color: "#03a4ed" }}>
              SEO <br />
            </span>{" "}
            Service & <span style={{ color: "#fe3f40" }}>Project Ideas</span>
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliterLorem ipsum
            dolor sit amet, ctetur aoi adipiscing eliterLorem ipsum dolor sit
            amet, ctetur aoi adipiscing eliterLorem ipsum dolor sit amet, ctetur
            aoi adipiscing
          </Typography>

          {/* Progress Bars */}
          {services.map((service, index) => (
            <Box key={index} sx={{ marginBottom: "1rem" }}>
              <Typography
                variant="p"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                {service.name}
                {"    "}
                <span style={{ color: "#03a4ed" }}> {service.value}%</span>
              </Typography>
              <LinearProgress
                variant="determinate"
                value={service.value}
                color="secondary"
                sx={{
                  height: "8px",
                  borderRadius: "5px",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#fe3f40", // Custom bar color
                  },
                  backgroundColor: "#e0e0e0",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
