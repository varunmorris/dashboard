import { Box } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import { RecentReportsHOC } from './Graphs/RecentReports'
import { TasksHOC } from './Graphs/Tasks'

export const Dashboard = () => {

return (
  <Box>
    <Box p={{ xs: 2, sm: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={6} md={6}>
          <RecentReportsHOC />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <TasksHOC />
        </Grid>
      </Grid>
    </Box>
  </Box>
)
}
