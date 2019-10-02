import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { coffee, sandwiches } from '../../data/menu.json'

  // const coffee = coffee
  // const sandwich = sandwiches

  export default class Breakfast extends React.Component{ 
    constructor() {
      super();
      this.state = {
        coffee: coffee,
        sandwich: sandwiches
      };
    }

    render() {
    const coffeOptions = this.state.coffee.map((item) => {
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
    const sandwishOptions = this.state.sandwich.map((item) => {
      return (
        <Grid item xs>
          <Button 
          variant="contained" 
          color="#ffffff" key={item.id} 
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
          <h5>Cafeteria</h5>
          <Grid container spacing={1}>{coffeOptions}</Grid>
        </div>
        <div>
          <h5>Sandwiches</h5>
          <Grid container spacing={1}>{sandwishOptions}</Grid> 
        </div>
      </div>
    )
  }
}

