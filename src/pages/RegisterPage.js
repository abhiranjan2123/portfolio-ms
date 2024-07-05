import React from 'react'
import { Grid,Typography } from '@mui/material'
import RegisterForm from '../components/RegisterForm';
import Divider from "@mui/material/Divider";
const RegisterPage = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    mt={"15vh"}
  >
     <Grid item >
      <Typography variant="h1" color="secondary" sx={{fontSize: {md:'5vh',xs:'3vh'},m:{md:"2vh",xs:"2vh"},fontWeight:"bold"}}>Portfolio Management Service</Typography>

    </Grid>

    <Grid item>
    <Divider orientation="vertical"   flexItem  sx={{display:{xs:"none",md:"block"},m:'3vh',height:{xs:'0',md:'50vh'} }} />
    </Grid>

    <Grid item xs={3}>
      <RegisterForm />
    </Grid>
  </Grid>
  )
}

export default RegisterPage