import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import { ActivityFeed } from './userProfile/ActivityFeed';
import { NewUsers } from './userProfile/NewUsers';
import { Task } from './userProfile/Task';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fullHeight: {
    height: '100%'
  }
})

export const UserDetails = () => {
  const classes = useStyles()

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Grid container p={{ xs: 2, sm: 3 }} spacing={4}>
        <Grid item xs={12} sm={6} md={4} sx={{ height: '100%' }}>
          <Paper className={classes.fullHeight}>
            <ActivityFeed />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: '100%' }}>
          <Paper className={classes.fullHeight}>
            <NewUsers />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: '100%' }}>
          <Paper className={classes.fullHeight}>
            <Task />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
