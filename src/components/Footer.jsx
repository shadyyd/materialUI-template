import { Box, Container, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginY: 8,
        }}
      >
        {" "}
        <Typography>
          <CopyrightIcon fontSize="small" /> Copyright 2024 ITI Port-Said
          Branch.
        </Typography>
        <Typography>Designed by : Shady Radwan</Typography>
      </Box>
    </Container>
  );
};
