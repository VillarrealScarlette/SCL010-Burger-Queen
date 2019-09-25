import React from 'react';
import {lunch} from './lunch.json';
import Button from '@material-ui/core/Button';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class Lunch extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: lunch.burgers,
      sideDish: lunch.sideDishs,
      drink: lunch.drinks,
    }
  }

  //f(x) que captura el nombre de la opción seleccionada
  select(e) {
    console.log(e.target.value);
  }

  render() { 
    const burgers = this.state.burger.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
          </Button>
          </Grid>
        
      )
    })
    const sideDishs = this.state.sideDish.map((item, i) => {
      return (
        <Grid item xs>
       <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
          </Button>
          </Grid>
      )
    })
    const drinks = this.state.drink.map((item, i) => {
      return (
        <Grid item xs>
        <Button variant="contained" color="ffffff" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
          </Button>
          </Grid>
      )
    })
    return ( 
      <div>
        <div>
        <h5>Hamburgesas</h5>
        <Grid container spacing={1}>{burgers}</Grid>
        </div>
        <div>
        <h5>Acompañamientos</h5>
        <Grid container spacing={1}>{sideDishs}</Grid> 
        </div>
        <div>
        <h5>Bebestibles</h5>
        <Grid container spacing={1}>{drinks}</Grid> 
        </div>
      </div>
     );
  }
}

export default Lunch;