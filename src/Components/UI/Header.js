import React from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger,
  Typography,
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
    height: '2em'
  }

}))

function Header() {
  const classes = useStyles()


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Typography variant='h3' >
              <img src={logo} alt='logo' className={classes.logo}/>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  );
}

export default Header
