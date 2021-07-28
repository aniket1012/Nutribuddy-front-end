import React from 'react'
import { 
  AppBar,
  Toolbar, 
  useScrollTrigger
} from '@material-ui/core'


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


function Header() {
  return (
    <AppBar position='fixed'>
      <ElevationScroll>
        <Toolbar>NutriBuddy</Toolbar>
      </ElevationScroll>
    </AppBar>
  )
}

export default Header
