import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { makeStyles } from '@material-ui/core'
import BathingShampoo from '../../public/assets/TableImages/Bathing_Shampoo.png'
import BathingShampoo2 from '../../public/assets/TableImages/Bathing_Shampoo(2).png'
import RunningShoes from '../../public/assets/TableImages/Running_Shoes.png'
import ToiletPapers from '../../public/assets/TableImages/Toilet_papers.png'

const useStyles = makeStyles({
  typography: {
    borderBottom: '1px solid #E7EBF0',
  },
  productCell: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productTitle: {
    marginLeft: '1rem',
  },
})

export const Products = () => {
  const classes = useStyles()

  const columns = [
    { id: 1, label: 'ID' },
    { id: 2, label: 'Product' },
    { id: 3, label: 'In Stock' },
    { id: 4, label: 'Price' },
    { id: 5, label: 'Sales' },
    { id: 6, label: 'Views' },
    { id: 7, icon: <RemoveRedEyeIcon /> },
  ]

  const rows = [
    {
      id: 356121,
      productLabel: 'Bathing shampoo',
      iconSrc: BathingShampoo,
      inStock: 451,
      price: `${654}`,
      sales: 822,
      views: 80451,
    },
    {
      id: 356122,
      productLabel: 'Bathing Shampoo',
      iconSrc: BathingShampoo2,
      inStock: 420,
      price: `${654}`,
      sales: 812,
      views: 15451,
    },
    {
      id: 356632,
      productLabel: 'Running Shoes',
      iconSrc: RunningShoes,
      inStock: 100,
      price: `${654}`,
      sales: 700,
      views: 11451,
    },
    {
      id: 356782,
      productLabel: 'Toilet papers',
      iconSrc: ToiletPapers,
      inStock: 560,
      price: `${654}`,
      sales: 500,
      views: 11451,
    },
  ]

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Paper className={classes.typography}>
        <Box p={3}>
          <Typography borderBottom={'1px solid #E7EBF0'} p={1}>
            Products
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  if (column.icon) {
                    return <TableCell key={column.id}>{column.icon}</TableCell>
                  } else {
                    return <TableCell key={column.id}>{column.label}</TableCell>
                  }
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Box className={classes.productCell}>
                        <Avatar
                          variant="square"
                          alt="Bathing Shampoo"
                          src={row.iconSrc}
                        />
                        <span className={classes.productTitle}>
                          {row.productLabel}
                        </span>
                      </Box>
                    </TableCell>
                    <TableCell>{row.inStock}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.sales}</TableCell>
                    <TableCell>{row.views}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Box>
  )
}
