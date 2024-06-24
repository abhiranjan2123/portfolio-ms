import { Box, TextField, Typography, Button, Link } from "@mui/material";
import React from "react";

const RegisterForm = () => {
  return (
    <Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "5vh", mb: 2 }}>Register</Typography>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          color="secondary"
          sx={{ width: "50vh", paddingBottom: 2 }}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          color="secondary"
          sx={{ width: "50vh", paddingBottom: 2 }}
        />

        <TextField
          id="phone"
          label="Phone number"
          variant="outlined"
          color="secondary"
          sx={{ width: "50vh", paddingBottom: 2 }}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          sx={{ width: "50vh" }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, width: "20vh" }}
          size="large"
        >
          Register
        </Button>
        <Link href="/" underline="none" sx={{ mt: 2, color: "grey" }}>
          Already have an account ? Signin Here!
        </Link>
      </Box>
    </Box>
  );
};

export default RegisterForm;
