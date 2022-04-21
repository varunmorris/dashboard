import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { Products } from '../components/Products';
import { UserDetails } from '../components/UserDetails';
import { Sellers } from '../components/Sellers';
import { Tasks } from '../components/Tasks/Tasks';
import { Dashboard } from '../components/Dashboard'
import { Sales } from '../components/Sales/Sales';
import { Charts } from '../components/Charts/Charts';


export const Home = () => {


  return (
    <Box>
      <Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Tasks />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Sales />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Charts />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Dashboard />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Sellers />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <Products />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8} md={12}>
            <UserDetails />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
