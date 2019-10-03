import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { burgers, sideDishes, drinks } from '../../data/menu.json';

export default class Lunch extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: burgers,
      sideDish: sideDishes,
      drink: drinks,
    }
  }

  render() { 
    const burgersOptions = this.state.burger.map((item) => {
      return (
        <Grid item xs>
          <Button 
          variant="contained" 
          color="#ffffff" 
          key={item.id} 
          onClick={this.props.addOrder.bind(this, item)} 
          value={item.name}>
          {item.name}
          </Button>
        </Grid>
        
      )
    })
    const sideDishsOptions = this.state.sideDish.map((item) => {
      return (
        <Grid item xs>
          <Button 
          variant="contained" 
          color="#ffffff" 
          key={item.id} 
          onClick={this.props.addOrder.bind(this, item)} 
          value={item.name}>
          {item.name}
          </Button>
        </Grid>
      )
    })
    const drinksOptions = this.state.drink.map((item) => {
      return (
        <Grid item xs>
          <Button 
          variant="contained" 
          color="#ffffff" 
          key={item.id} 
          onClick={this.props.addOrder.bind(this, item)} 
          value={item.name}>
          {item.name}
          </Button>
        </Grid>
      )
    })
    return ( 
      <div>
        <div>
          <h3>Hamburgesas</h3>
          <Grid container spacing={1}>{burgersOptions}</Grid>
        </div>
        <div>
          <h3>Acompañamientos</h3>
          <Grid container spacing={1}>{sideDishsOptions}</Grid> 
        </div>
        <div>
          <h3>Bebestibles</h3>
          <Grid container spacing={1}>{drinksOptions}</Grid> 
        </div>
      </div>
     );
  }
}