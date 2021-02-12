import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import logo from '../../assets/logo.png'

const resolveURL = {
  solutions: 'рашэнні',
  problems: 'праблемы',
  ideas: 'iдэi'

}
const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  link: {
    maxHeight: '20px',

    fontSize: '20px',
    textDecoration: 'none',
    padding: '8px',
    border: '1px solid #999',
    marginLeft: '8px',
    borderRadius: '16px',
    minWidth: '50px',
    textAlign: 'center',
    color: '#000',
    '&:visited': {
      color: '#000'
    },
    '&:hover': {
      background: '#ccc',
      cursor: 'pointer'
    }
  },
  logo: {
    marginRight: '10px',
    borderRadius: '30px'
  }
})
export const Header = props => {
  const pathname = useLocation().pathname.split('/')[1];
  const classes = useStyles()
  return (<Grid container direction='row'  wrap={"nowrap"} spacing={2} className={classes.container}>
    <Grid item  container alignItems={"center"} >
      <img src={logo} className={classes.logo} alt={'logo'}/>
      <Typography component={"h4"} variant={"h4"} color={"textPrimary"}
      >{'Нашы ' + resolveURL[pathname]}</Typography>
    </Grid>
    <Grid item container alignItems={"center"} justify={"flex-end"}>
      <Link to='/' className={classes.link}>
        <Typography variant="button" display="block">
          iдэi
        </Typography>
      </Link>

      <Link to='/problems' className={classes.link}>
        <Typography variant="button" display="block">
          праблемы
        </Typography>
      </Link>

      <Link to='/solutions' className={classes.link}>
        <Typography variant="button" display="block">
          рашэнні
        </Typography>
      </Link>
    </Grid>
  </Grid>)
}