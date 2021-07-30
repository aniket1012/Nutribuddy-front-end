import React, {useState} from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Button
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
  },
  button: {
    ...theme.typography.signUp,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    

  }


}))

function Header() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo}/>
            <Tabs 
              value={value} 
              className={classes.tabContainer}
              onChange={handleChange}
            >
              <Tab 
                className={classes.tab} 
                label="Home" 
              />
              <Tab 
                className={classes.tab} 
                label="Create Meal" 
              />
              <Tab 
                className={classes.tab} 
                label="My Meals" 
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header
