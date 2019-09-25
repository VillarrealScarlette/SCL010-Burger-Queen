import React from 'react';
import { breakfast } from './breakfast.json';

import Button from '@material-ui/core/Button';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class Breakfast extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfast
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select(e) {
    console.log(e.target.value);
  }

  render() { 
    const breakfasts = this.state.breakfast.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </Button>
        </Grid>
      )
    })
    return ( 
      <div>
         <Grid container spacing={1}>{breakfasts}</Grid>   
      </div>
     );
  }
}

export default Breakfast;