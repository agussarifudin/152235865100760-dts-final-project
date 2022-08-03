import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box sx={{ color: "	#FFFFFF", marginTop: 5, background: "#2E3B55" }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box>
            <Button size="large" color="secondary" variant="outlined">
              AGUS SARIFUDIN
            </Button>
          </Box>
          <Typography variant="body">© 2022 Final Project, Pair 39</Typography>
        </Stack>
      </Container>
    </Box>
  );
};
