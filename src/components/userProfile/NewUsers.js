import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Box } from '@mui/system'
import React, { useState } from 'react' 
import Peter_Orangatan from '../../../public/assets/TableImages/Peter_Orangatan.png'
import Tommy_Delware from '../../../public/assets/TableImages/Tommy_Delware.png'
import John_Dale from '../../../public/assets/TableImages/John_Dale.png'
import Jim_Halpert from '../../../public/assets/TableImages/Jim_Halpert.png'
import Michael_Smith from '../../../public/assets/TableImages/Michael_Smith.png'

const useStyles = makeStyles({
  typography: {
    borderBottom: '1px solid #E7EBF0',
    paddingBottom: '16px',
  },
})

export const NewUsers = () => {
  const [items] = useState([
    {
      id: 1,
      name: 'Peter Orangatan',
      updated: '2 hours ago',
      iconSrc: Peter_Orangatan,
      notifications: 1,
    },
    {
      id: 2,
      name: 'Tommy Delware',
      updated: '3 hours ago',
      iconSrc: Tommy_Delware,
    },
    {
      id: 3,
      name: 'John Dale',
      updated: '4 hours ago',
      iconSrc: John_Dale,
    },
    {
      id: 4,
      name: 'Jim Halpet',
      updated: '4 hours ago',
      iconSrc: Jim_Halpert,
    },
    {
      id: 5,
      name: 'Michael Smith',
      updated: '4 hours ago',
      iconSrc: Michael_Smith,
    },
  ])

  const classes = useStyles()

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography className={classes.typography}>New Users</Typography>
      <List>
        {items.map((item) => {
          return (
            <ListItem button key={item.id}>
              <ListItemIcon>
                <Avatar
                  variant="square"
                  alt="Bathing Shampoo"
                  src={item.iconSrc}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.updated} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
