import React, {useState, useEffect} from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    paddingLeft: "10px",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.signUp,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  drawerIconContianer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: theme.palette.common.lightGreen,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    // color: theme.palette.common.lightGreen,
    color: "white",
  },
  drawerItemSignup: {
    backgroundColor: theme.palette.common.lightGreen
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

function Header() {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (e, newValue) => {
    setValue(newValue)
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


  // const routes = [
  //   {
  //     name: "Home",
  //     link: '/',
  //     activeIndex: 1,
  //     selectedIndex: 0
  //   },
  //   {
  //     name: "Create Meal",
  //     link: '/createmeal',
  //     activeIndex: 1,
  //     selectedIndex: 1
  //   },
  //   {
  //     name: "My Meals",
  //     link: '/mymeals',
  //     activeIndex: 1,
  //     selectedIndex: 2
  //   },
  //   {
  //     name: "Login",
  //     link: '/login',
  //     activeIndex: 1,
  //     selectedIndex: 3
  //   },
  // ]

  // useEffect =(()=> {
  //   [...routes].forEach(route => {
  //     switch(window.location.pathname) {
  //       case `${route.link}`: 
  //       if(value !== route.activeIndex){
  //         setValue(route.activeIndex)
  //         if(route.selectedIndex && route.selectedIndex !== selectedIndex){
  //           setSelectedIndex(route.selectedIndex)
  //         }
  //       }
  //       break;
  //     default:
  //       break
  //     }
  //   })
  // }, [value, selectedIndex, routes])

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

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          <ListItem
            component={Link}
            to="/"
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            selected={value === 0}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              classes={{selected:classes.drawerItemSelected}}
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/createmeal"
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            selected={value === 1}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              classes={{selected:classes.drawerItemSelected}}
            >
              Create Meal
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/mymeals"
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            selected={value === 2}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              classes={{selected:classes.drawerItemSelected}}
            >
              My Meals
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/login"
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            selected={value === 3}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              classes={{selected: classes.drawerItemSelected}}
            >
              Login
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/signup"
            divider
            button
            onClick={() => setOpenDrawer(false)}
            classes={{root: classes.drawerItemSignup}}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Sign Up
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContianer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header
