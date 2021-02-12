import React from 'react'
import {Box,  Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    border: '1px solid #999',
    borderRadius: '12px',
    padding: "0 6px",
  }

})

export const Tag = ({label}) =>{
  const classes = useStyles();
  return(<Box className={classes.container}>
    <Typography variant={'overline'}>
      {label}
    </Typography>
  </Box>)


}