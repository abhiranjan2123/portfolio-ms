import { Box, TextField, Typography, Button, Link } from "@mui/material";
import React from "react";


const LoginForm = () => {
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
        <Typography sx={{ fontSize: {md:'5vh',xs:'3vh'}, mb:{md:'2vh',xs:'30px'} }}>Login</Typography>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
           color="secondary"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, width: "20vh" }}
          size="large"
        >
          Login
        </Button>
        <Link href="/register" underline="none" sx={{mt:2,color:"grey"}}>
          Not have an account ? Register Here!
        </Link>
        
      </Box>
    </Box>
  );
};

export default LoginForm;
