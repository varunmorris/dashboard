import { makeStyles } from '@material-ui/core'
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import clsx from 'clsx';
import Peter from "../../../public/assets/TableImages/Peter.png"
import Tom from '../../../public/assets/TableImages/Tom.png'
import John from '../../../public/assets/TableImages/John.png'
import Tom_Peter from '../../../public/assets/TableImages/Tom_Peter.png'


const useStyles = makeStyles({
  typography: {
    borderBottom: '1px solid #E7EBF0',
    paddingBottom: '16px',
  },
  task: {
    borderBottom: '1px solid #E7EBF0',
    paddingBottom: '16px',
  },
  feed: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: '1rem',
  },
  feedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '1rem',
    marginTop: '0.75rem',
  },
  lineHeight: {
    paddingLeft: '0.25rem',
  },
  bold: {
    fontWeight: 'bold',
  },
})

export const ActivityFeed = () => {
  const [feeds] = useState([
    {
      id: 1,
      icon: '',
      feedTitle1: 'Peter',
      feedAction: 'ordered',
      feedTitle2: 'Toilet Paper',
      updated: '2 hours ago',
      desc: '',
      iconSrc: Peter,
    },
    {
      id: 2,
      icon: '',
      feedTitle1: 'Tom',
      feedAction: 'disliked and commented ...',
      feedTitle2: '',
      updated: '3 hours ago',
      desc: '',
      iconSrc: Tom,
    },
    {
      id: 3,
      icon: '',
      feedTitle1: 'John',
      feedAction: 'added 12 new products ...',
      feedTitle2: '',
      updated: '4 hours ago',
      desc: '',
      iconSrc: John,
    },
    {
      id:4,
      icon: '',
      feedTitle1: 'Tom',
      feedAction: 'commented on',
      feedTitle2: "Peter's",
      updated: '4 hours ago',
      desc: 'Lorem Ipsum dolor',
      iconSrc: Tom_Peter,
    },
  ])

  const classes = useStyles()

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography className={classes.typography}>Activity Feed</Typography>
      <List>
        {feeds.map((feed) => {
          return (
            <ListItem button key={feed.id}>
              <ListItemIcon>
                <Box className={classes.feed}>
                  <Avatar
                    variant="square"
                    alt="Bathing Shampoo"
                    src={feed.iconSrc}
                  />
                  <Box
                    className={clsx(classes.feedContainer)}
                  >
                    <Box>
                      <span className={clsx(classes.bold)}>
                        {feed.feedTitle1}
                      </span>
                      <span className={classes.lineHeight}>
                        {feed.feedAction}
                      </span>
                      <span className={clsx(classes.lineHeight, classes.bold)}>
                        {feed.feedTitle2}
                      </span>
                    </Box>
                    <Box>{feed.updated}</Box>
                    <Box>{feed.desc}</Box>
                  </Box>
                </Box>
              </ListItemIcon>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
