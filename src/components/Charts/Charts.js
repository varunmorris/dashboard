import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import clsx from 'clsx'
import { TotalVisitorsHOC } from '../Dashboard/Graphs/TotalVisitors'
import { TotalUsersHOC } from '../Dashboard/Graphs/TotalUsers'


const useStyles = makeStyles({
  typography: {
    fontWeight: 'lighter',
  },
  sales: {
    padding: '40px',
  },
  totalStats: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '1rem',
  },
  totalPercent: {
    display: "flex"
  },
  salesCount: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 900,
    fontSize: 'xx-large',
  },
  percentageCountRed: {
    color: 'red',
  },
  percentageCountGreen: {
    color: 'green',
  },
})

export const Charts = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid container p={{ xs: 2, sm: 3 }} spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.sales}>
                <Typography className={classes.typography}>
                  {' '}
                  Total Sales
                </Typography>
                <Box className={classes.salesCount}>$1.2M</Box>
              </Box>
            </Paper>
            <Paper style={{ width: '26rem' }}>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.sales}>
                <Typography className={classes.typography}>
                  {' '}
                  Total balance
                </Typography>
                <Box className={classes.salesCount}>$1,534</Box>
              </Box>
              <Box
                className={clsx(
                  classes.totalPercent,
                  classes.percentageCountGreen
                )}
              >
                +7%
              </Box>
            </Paper>
            <Paper style={{ width: '26rem' }}>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.sales}>
                <Typography className={classes.typography}>
                  Total Visitors
                </Typography>
                <Box className={classes.salesCount}>$155K</Box>
              </Box>
            </Paper>
            <Paper style={{ width: '26rem' }}>
              <TotalVisitorsHOC />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.sales}>
                <Typography className={classes.typography}>
                  Total Users
                </Typography>
                <Box className={classes.salesCount}>4234</Box>
              </Box>
            </Paper>
            <Paper style={{ width: '26rem' }}>
              <TotalUsersHOC />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
