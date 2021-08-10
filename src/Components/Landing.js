import React, {useState} from 'react'
import { 
    Grid,
    Typography,
    Button,
    Paper,
    TextField,
    InputLabel,
    MenuItem,
    Select
 } from '@material-ui/core'
 import { Link } from 'react-router-dom';
 import { makeStyles } from "@material-ui/core/styles";


 const useStyles = makeStyles((theme) => ({
   landingContainer: {},
   landingRight: {
     // backgroundColor: 'blue',
     color: theme.palette.common.lightGrey,
   },
   inputContainer: {
     marginLeft: '5px'
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


    const handleChange = (event) => {

    }

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
            <Grid item container direction="column" spacing={2} className={classes.inputContainer}>
              <Grid item>
                <TextField id="filled-basic" label="Age" variant="filled" value={age}/>
              </Grid>
              <Grid item>
                {/* <TextField id="filled-basic" label="Sex" variant="filled" /> */}
                <InputLabel id="demo-simple-select-filled-label">Sex</InputLabel>
                  <Select
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                  </Select>
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Height" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Weight" variant="filled" />
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Activity Level" variant="filled"/>
              </Grid>
              <Grid item>
                <TextField id="filled-basic" label="Goal" variant="filled" />
              </Grid>
              <Grid item>
                <Button variant='contained' color='secondary'>Enter</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default Landing
