import React from 'react';
import Button from '@material-ui/core/Button';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { menu } from './menu.json';
import Counter from './Counter.js';
import './menu.css';

class Breakfast extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfasts: menu.breakfast
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select = (e) => {
    console.log(e.target.value);
  }

  render() { 
    const breakfastOptions = this.state.breakfasts.map((item) => {
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
         <Grid container spacing={1}>{breakfastOptions}</Grid>   
      </div>
     );
  }
}

export default Breakfast;