import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { List, ListItem } from '@mui/material'
import { Box, styled } from '@mui/system'

const useStyles = makeStyles({
  task: {
    borderBottom: '1px solid #E7EBF0',
    paddingBottom: '16px',
  },
})

const tasks = [
  {
    id: 1,
    checkbox: true,
    label: 'lorem ipsum is some dummy text',
    palletColor: 'blue',
  },
  {
    id: 2,
    checkbox: true,
    label: 'lorem ipsum is some dummy text',
    palletColor: 'green',
  },
  {
    id: 3,
    checkbox: false,
    label: 'lorem ipsum is some dummy text generator, lorem ipsum is some',
    palletColor: 'yellow',
  },
  {
    id: 4,
    checkbox: false,
    label: 'lorem ipsum is some dummy text',
    palletColor: 'black',
  },
  {
    id: 5,
    checkbox: false,
    label: 'lorem ipsum is some dummy text',
    palletColor: 'blue',
  },
]

export const Task = () => {
  const classes = useStyles()

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography className={classes.task}>Tasks</Typography>
      <Box>
        <List>
          {tasks.map((task) => {
            return <TaskListItem key={task.id} task={task} />
          })}
        </List>
      </Box>
    </Box>
  )
}

const useTaskListItemStyles = makeStyles({
  // timeBorderLeftTask: {
  //   borderLeft: ({task}) => `0.3rem solid ${task.palletColor}`,
  //   marginLeft: '1rem',
  // },
  cbBorderLeft: {
    marginLeft: '1rem',
  },
})

const StyledTaskListItem = styled(Box)(({ task }) => ({
  borderLeft: `0.3rem solid ${task.palletColor}`,
  marginLeft: '1rem',
}))

const TaskListItem = (props) => {
  const classes = useTaskListItemStyles()
  return (
    <ListItem>
      {/* <Box className={classes.timeBorderLeftTask}> */}
      <StyledTaskListItem task={props.task}>
        <FormControlLabel
          control={
            <Checkbox
              className={classes.cbBorderLeft}
              checked={props.task.checkbox}
            />
          }
          label={props.task.label}
        />
      </StyledTaskListItem>

      {/* </Box> */}
    </ListItem>
  )
}
