import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import clsx from 'clsx'

const useStyles = makeStyles({
  typography: {
    borderBottom: '1px solid #E7EBF0',
    padding: '1rem',
    fontWeight: 'lighter',
  },
  sales: {
    padding: '40px',
  },
  salesCount: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 900,
    fontSize: 'xx-large',
  },
  salesPercentage: {
    alignItems: 'center',
    display: 'flex',
    padding: '10px',
    justifyContent: 'flex-start',
  },
  percentageCountRed: {
    color: 'red',
  },
  percentageCountGreen: {
    color: 'green',
  },
})

export const Sales = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid container p={{ xs: 2, sm: 3 }} spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Typography className={classes.typography}>
                Total Sales
              </Typography>
              <Box className={classes.sales}>
                <Box className={classes.salesCount}>$1.2M</Box>
                <Box
                  className={clsx(
                    classes.salesPercentage,
                    classes.percentageCountRed
                  )}
                >
                  -25%
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Typography className={classes.typography}>
                Total Balance
              </Typography>
              <Box className={classes.sales}>
                <Box className={classes.salesCount}>$1,534</Box>
                <Box
                  className={clsx(
                    classes.salesPercentage,
                    classes.percentageCountGreen
                  )}
                >
                  +7%
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Typography className={classes.typography}>
                Total Visitors
              </Typography>
              <Box className={classes.sales}>
                <Box className={classes.salesCount}>$155</Box>
                <Box
                  className={clsx(
                    classes.salesPercentage,
                    classes.percentageCountGreen
                  )}
                >
                  +25%
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Typography className={classes.typography}>
                Total Users
              </Typography>
              <Box className={classes.sales}>
                <Box className={classes.salesCount}>4234</Box>
                <Box
                  className={clsx(
                    classes.salesPercentage,
                    classes.percentageCountRed
                  )}
                >
                  -19%
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
