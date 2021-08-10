import React, {useState} from 'react'
import { 
    Grid,
    Typography,
    Button,
    Paper,
    TextField,
 } from '@material-ui/core'
 import { Link } from 'react-router-dom';
 import { makeStyles } from "@material-ui/core/styles";


 const useStyles = makeStyles((theme) => ({
   landingContainer: {

   },
   landingRight:{
    // backgroundColor: 'blue',
    color: theme.palette.common.lightGrey
   }
 }));

function Landing() {
    const classes = useStyles()

    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [goal, setGoal] = useState('')
    const [activityLevel, setActivityLevel] = useState('')



    return (
      <Grid container className={classes.landingContainer} spacing={2}>
        <Grid item xs={12} className={classes.landingRight}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h3">MacroCaclulator</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Enter Credentials to Find BaseLine
              </Typography>
            </Grid>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <TextField id="filled-basic" label="Age" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Sex" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Height" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Weight" variant="filled" />
              </Grid>
              <Grid item>
                <TextField
                  id="filled-basic"
                  label="Activity Level"
                  variant="filled"
                />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Goal" variant="filled" />
              </Grid>
            </Grid>
            <Grid item>Button</Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default Landing
