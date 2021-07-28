import React from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/Logo Files/For Web/svg/Color logo - no background.svg";


function ElevationScroll(props) {
  const { children} = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em',
    paddingLeft: '10px'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }


}))

function Header() {
  const classes = useStyles()


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color='primary'>
          <Toolbar disableGutters>
            <img src={logo} alt='logo' className={classes.logo}/>
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label='Home'/>
              <Tab className={classes.tab} label='Create Meal'/>
              <Tab className={classes.tab} label='My Meals'/>
              <Tab className={classes.tab} label='Login/Sign Up'/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  );
}

export default Header
