import React from 'react'
import { Grid, Paper } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import clsx from 'clsx'


const useStyles = makeStyles({
  taskTitle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  totalStats: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '1rem',
  },
  totalCount: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  totalPercent: {},
  taskBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'lighter',
  },
  taskBoxNumber: {
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

export const Tasks = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid container p={{ xs: 2, sm: 3 }} spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.totalCount}>
                <FormatListBulletedIcon
                  sx={{ p: 4 }}
                  color="secondary"
                  fontSize="large"
                />
                <Box>
                  <Box className={classes.taskBox}>
                    Total Tasks
                    <Box className={classes.taskBoxNumber}>34</Box>
                  </Box>
                </Box>
              </Box>
              <Box className={clsx(classes.totalPercent, classes.percentageCountRed)}>-25%</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.totalCount}>
                <FormatListBulletedIcon
                  sx={{ p: 4 }}
                  color="secondary"
                  fontSize="large"
                />
                <Box>
                  <Box className={classes.taskBox}>
                    Tasks to do
                    <Box className={classes.taskBoxNumber}>14</Box>
                  </Box>
                </Box>
              </Box>
              <Box className={clsx(classes.totalPercent, classes.percentageCountGreen)}>+10%</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.totalCount}>
                <FormatListBulletedIcon
                  sx={{ p: 4 }}
                  color="secondary"
                  fontSize="large"
                />
                <Box>
                  <Box className={classes.taskBox}>
                    Tasks Overdue
                    <Box className={classes.taskBoxNumber}>34</Box>
                  </Box>
                </Box>
              </Box>
              <Box className={clsx(classes.totalPercent, classes.percentageCountRed)}>-10%</Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.totalStats} style={{ width: '24rem' }}>
              <Box className={classes.totalCount}>
                <FormatListBulletedIcon
                  sx={{ p: 4 }}
                  color="secondary"
                  fontSize="large"
                />
                <Box>
                  <Box className={classes.taskBox}>
                    Completed Tasks
                    <Box className={classes.taskBoxNumber}>7</Box>
                  </Box>
                </Box>
              </Box>
              <Box className={clsx(classes.totalPercent, classes.percentageCountGreen)}>+20%</Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
