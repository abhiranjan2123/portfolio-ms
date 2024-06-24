import React from 'react'
import { Grid } from '@mui/material'
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
    sx={{ minHeight: '100vh' }}
  >
     <Grid item xs={3}>
      <h1>Portfolio Management Service</h1>
    </Grid>

   <Grid item>
    <Divider orientation="vertical"   flexItem  sx={{ m: 10,height:"50vh" }} />
    </Grid>

    <Grid item xs={3}>
      <RegisterForm />
    </Grid>
  </Grid>
  )
}

export default RegisterPage