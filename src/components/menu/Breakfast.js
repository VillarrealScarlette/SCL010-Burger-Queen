import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const foods = (props) => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          <Button variant="contained" color="#ffffff" onClick={props.click}>{props.name}</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default foods;