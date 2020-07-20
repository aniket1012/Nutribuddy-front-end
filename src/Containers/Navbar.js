import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" style={{backgroundImage:'linear-gradient(to right, #434343,#8e9eab, #212121)', boxShadow: 'inset 0 0 20px #212121'}}> */}
      <AppBar className='Appbar' position="static" style={{backgroundColor:'#616161', boxShadow: 'inset 0 0 20px #ffffff'}}>
        <Toolbar>
          <Link to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
              <HomeIcon style={{color: 'white'}}/>
            </IconButton>
          </Link>
          <Typography variant="h4" className={classes.title} style={{marginLeft: '280px'}}>
            Nutribuddy
          </Typography>

          <Link to='/my_meals' style={{textDecoration: 'none'}}><Button color="inherit" style={{color: 'white'}}>My Meals</Button></Link>
          <Link to='create_a_meal' style={{textDecoration: 'none'}}><Button color="inherit" style={{color: 'white'}}>Create A Meal</Button></Link>
          <Link to='/login' style={{textDecoration: 'none'}}><Button color="inherit" style={{color: 'white'}}>Login</Button></Link>

      
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar