import React, {useState, useEffect} from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery
} from '@material-ui/core'
import { useTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

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
    height: '8em',
    paddingLeft: '10px'
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: 'transparent'

    }
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/createmeal" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/mymeals" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/login" && value !== 3) {
      setValue(3);
    } 
  }, [value])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Create Meal"
          component={Link}
          to="/createmeal"
        />
        <Tab
          className={classes.tab}
          label="My Meals"
          component={Link}
          to="/mymeals"
        />
        <Tab
          className={classes.tab}
          label="Login"
          component={Link}
          to="/login"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="signup"
      >
        Sign Up
      </Button>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button 
              component={Link} 
              to='/'
              className={classes.logoContainer}
              onClick={()=> setValue(0)}
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo}/>
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header
