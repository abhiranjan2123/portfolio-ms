import React from 'react'
import {Grid, Typography } from '@mui/material'
import LoginForm from '../components/LoginForm'
import Divider from "@mui/material/Divider";
const LoginPage = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    mt={"20vh"}
  >
     <Grid item >
      <Typography variant="h1" color="secondary" sx={{fontSize: {md:'5vh',xs:'3vh'},m:{md:"2vh",xs:"2vh"},fontWeight:"bold"}}>Portfolio Management Service</Typography>

    </Grid>

   <Grid item>
    <Divider orientation="vertical"   flexItem  sx={{display:{xs:"none",md:"block"},m:'3vh',height:{xs:'0',md:'50vh'} }} />
    </Grid>

    <Grid item>
      <LoginForm />
    </Grid>
  </Grid>

  )
}

export default LoginPage