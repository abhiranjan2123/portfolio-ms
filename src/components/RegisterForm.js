import { Box, TextField, Typography, Button, Link } from "@mui/material";
import React from "react";
import {RegisterUser} from "../network/networkHandler"

const RegisterForm = () => {
  const [username,setUsername]=React.useState("")
  const [email,setEmail]=React.useState("")
  const [phone,setPhone]=React.useState("")
  const [password,setPassword]=React.useState("")

  const registerHandler=()=>{
    let data = JSON.stringify({
      "username": username,
      "email": email,
      "phone": phone,
      "password": password
    });

   if (username && email && phone && password){
    RegisterUser(data).then(()=>{
      alert("successfully registered")
    })

   } else{
    console.log("values required")
    alert("required all fields ~ username & email & phone & password ")
   }
  }

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
        <Typography sx={{ fontSize: {md:'5vh',xs:'3vh'}, mb:{md:'2vh',xs:'30px'} }}>Register</Typography>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          color="secondary"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
          onChange={(e)=>{setUsername(e.target.value)}}
          />
        
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          color="secondary"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        <TextField
          id="phone"
          label="Phone number"
          variant="outlined"
          color="secondary"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
          onChange={(e)=>{setPhone(e.target.value)}}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          sx={{ width:{md:'50vh',xs:'40vh'}, paddingBottom: 2 }}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, width: "20vh" }}
          size="large"
          onClick={registerHandler}
        >
          Register
        </Button>
        <Link href="/" underline="none" sx={{ mt: 2, color: "grey"}}>
         Login ?
        </Link>
      </Box>
    </Box>
  );
};

export default RegisterForm;
