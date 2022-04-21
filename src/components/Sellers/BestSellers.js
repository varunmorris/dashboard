import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core'
import { Avatar, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import { Box, display } from '@mui/system'
import BathingShampoo from '../../../public/assets/TableImages/Bathing_Shampoo.png'
import BathingShampoo2 from '../../../public/assets/TableImages/Bathing_Shampoo(2).png'
import RunningShoes from '../../../public/assets/TableImages/Running_Shoes.png'
import ToiletPapers from '../../../public/assets/TableImages/Toilet_papers.png'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack';
import clsx from 'clsx'


const useStyles = makeStyles({
  typography: {
    borderBottom: '1px solid #E7EBF0',
    padding: '16px',
  },
  width: {
    width: '1rem',
  },
  alignProgress: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
  },
  saleIconContainer: {
    justifyContent: 'flex-start',
    alignItem: 'flex-start',
    display: 'flex',
  },
  iconContainer: {
    flex: '1 1 auto',
  },
  saleContainer: {
    justifyContent: 'flex-start',
    alignItem: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    flex: '20 1 auto',
  },
  padding: {
    padding: '1rem',
  },
  bold: {
    fontWeight: 'bold',
  },
  spaceBetween: {
    justifyContent: "space-between",
    display: "flex",
  },
  fullHeight: {
    height: '100%'
  }
})

export const BestSellers = ({ showIcon = false}) => {
  const classes = useStyles()

  const bestSellers = [
    {
      id: 1,
      label: 'Bathing Shampoo',
      sales: '80451',
      iconSrc: BathingShampoo,
      variant: 'determinate',
      value: '50',
      width: 80,
    },
    {
      id: 2,
      label: 'Bathing Shampoo',
      sales: '15451',
      iconSrc: BathingShampoo2,
      variant: 'determinate',
      value: '50',
      width: 50,
    },
    {
      id: 3,
      label: 'Running Shoes',
      sales: '11451',
      iconSrc: RunningShoes,
      variant: 'determinate',
      value: '50',
      width: 50,
    },
    {
      id: 4,
      label: 'Toilet papers',
      sales: '11451',
      iconSrc: ToiletPapers,
      variant: 'determinate',
      value: '50',
      width: 50,
    },
  ]
  
  return (
    <>
      <Typography className={classes.typography}>BestSellers</Typography>
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        {bestSellers.map((sale) => (
          <Box
            key={sale.id}
            className={clsx(classes.saleIconContainer, classes.padding, classes.fullHeight)}
          >
            {showIcon && (
              <Box
                className={clsx(classes.iconContainer, classes.alignProgress)}
              >
                <Avatar
                  variant="square"
                  alt="Bathing Shampoo"
                  src={sale.iconSrc}
                />
              </Box>
            )}
            <Box className={clsx(classes.saleContainer)}>
              {showIcon ? (
                <Fragment>
                  <Box className={classes.bold}>{sale.label}</Box>
                  <Box>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={sale.width}
                    />
                  </Box>
                  <Box>{`${sale.sales} sales`}</Box>
                </Fragment>
              ) : (
                <Fragment>
                  <Box className={classes.spaceBetween}>
                    <Box className={classes.bold}>{sale.label}</Box>
                    <Box>{`${sale.sales} sales`}</Box>
                  </Box>
                  <Box>
                    <LinearProgress
                      variant="determinate"
                      color="primary"
                      value={sale.width}
                    />
                  </Box>
                </Fragment>
              )}
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  )
}



