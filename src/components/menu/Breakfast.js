import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { menu } from '../../data/menu.json';
import './menu.css';


  const coffe = menu.coffe
  const sandwish = menu.sandwish
  //f(x) que captura el nombre de la opción seleccionada

  export default class Breakfast extends React.Component{ 
    constructor() {
      super();
      this.state = {
        cofe: menu.cofe,
        sandwish: menu.sandwish,
      }
    }
    render() {
    const coffeOptions = coffe.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.props.addOrder.bind(this, item)} value={item.name}>
          {item.name}
          </Button>
          </Grid>
        
      )
    })
    const sandwishOptions = sandwish.map((item, i) => {
      return (
        <Grid item xs>
      <Button variant="contained" color="#ffffff" key={item.name} onClick={this.props.addOrder.bind(this, item)} value={item.name}>
          {item.name}
          </Button>
          </Grid>
      )
    })
    return ( 
      <div>
        <div>
        <h5>cafe</h5>
        <Grid container spacing={1}>{coffeOptions}</Grid>
        </div>
        <div>
        <h5>sandwish</h5>
        <Grid container spacing={1}>{sandwishOptions}</Grid> 
        </div>
        </div>
    )
  }
}

