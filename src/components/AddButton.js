import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AddButton = (props) => {
    const { classes } = props;
    return(
      <div className="AddButton">
         <Button variant="contained" color="primary" classes={{
         }}
         //onClick = {e =>{props.clickSendRequest()}}
        >
          追加
         </Button>

      </div>);
    }

  export default AddButton;
