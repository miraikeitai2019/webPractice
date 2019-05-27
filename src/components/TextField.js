import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import '../App.css'

export const styles = (theme: Object) => ({
  positionTextField:{
    marginLeft: theme.spacing.unit,
    marginRight: "50px",
    width: 200,
  }
  });

const textField = (props) => {
    const { classes } = props;
    return(
      <div>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={props.defaultValue}
        onChange={e=>{props.handleChange(e)}}
        margin="normal"
        name="defaultValue"
      />
      </div>
    );
  }


export default withStyles(styles)(TextField);
