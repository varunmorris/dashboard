import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BestSellers } from './Sellers/BestSellers'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  fullHeight: {
    height: '100%',
  },
})

export const Sellers = () => {
  const classes = useStyles();
  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Grid>
        <Grid container p={{ xs: 2, sm: 3 }} spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.fullHeight}>
              <BestSellers showIcon={true} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.fullHeight}>
              <BestSellers showIcon={false} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
