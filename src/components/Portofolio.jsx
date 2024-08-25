import { Box, Typography, Card, Container, Button } from "@mui/material";

const services = [
  {
    title: "SEO Analysis",
    description:
      "We provide in-depth SEO analysis to improve your website's visibility.",
    icon: "🚀",
    action: "Learn More",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and efficient websites tailored to your needs.",
    icon: "💻",
    action: "Get Started",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies to enhance your online presence and reach your target audience.",
    icon: "📊",
    action: "Explore",
  },
  {
    title: "Content Creation",
    description: "Creating engaging content to connect with your audience.",
    icon: "✍️",
    action: "Discover",
  },
];

const Portfolio = () => {
  return (
    <Container sx={{ marginBottom: 6 }}>
      <Box
        sx={{
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 8, fontWeight: "bold" }}>
          See What Our Agency{" "}
          <span style={{ color: "#03a4ed" }}>
            Offers <br />{" "}
          </span>{" "}
          & What We <span style={{ color: "#fe3f40" }}>Provide</span>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column for extra-small screens
              sm: "repeat(2, 1fr)", // 2 columns for small screens
              md: "repeat(4, 1fr)", // 4 columns for medium and larger screens
            },
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "40px",
                background: "#fff",
                color: "#000",
                cursor: "pointer",
                height: "280px", // Set a consistent height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {service.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {service.description}
              </Typography>

              <Button
                variant="contained"
                color="primary"
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
                {service.action}
              </Button>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Portfolio;
