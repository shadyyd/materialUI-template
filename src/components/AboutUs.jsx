import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
const services = [
  {
    icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-01.png",
    title: "Data Analysis",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipisicing eliter",
  },
  {
    icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-03.png",
    title: "Web Analytics",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipisicing eliter",
  },
  {
    icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-02.png",
    title: "Data Reporting",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipisicing eliter",
  },
  {
    icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-04.png",
    title: "SEO Suggestions",
    description: "Lorem ipsum dolor sit amet, ctetur aoi adipisicing eliter",
  },
];
export const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-bg.png)",
          height: {
            xs: "1350px",
            md: "900px",
            lg: "auto",
          },
          // paddingBottom: 10,
          // paddingLeft: 20,
          // paddingRight: 20,
          display: "flex",
          justifyContent: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Image */}
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                height: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-left-image.png"
                alt="Person working on laptop"
                sx={{
                  height: "auto",
                }}
              />
            </Grid>

            {/* Right Content */}
            <Grid item xs={12} md={12} lg={6}>
              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        src={service.icon}
                        alt={service.title}
                        sx={{ bgcolor: "transparent", width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#fff" }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{ fontSize: "0.8rem", color: "#fff" }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
