import React from 'react';
import Button from '@material-ui/core/Button';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import { menu } from './menu.json';
import './menu.css';

export default class Breakfast extends React.Component {
  constructor() {
    super();
    this.state = {
      coffe: menu.coffe,
      sandwish: menu.sandwish,
      mycoffe: " "
    };
  }
  //f(x) que captura el nombre de la opción seleccionada
  select = (e) => {
    this.setState({mycoffe: this.state.coffe[0].cost})
    console.log("uno", e.target.value, "dos", e.target);
  }

  render() { 
    const coffeOptions = this.state.coffe.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
          </Button>
          </Grid>
        
      )
    })
    const sandwishOptions = this.state.sandwish.map((item) => {
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
        <div>
        <h5>cafe</h5>
        <Grid container spacing={1}>{coffeOptions}</Grid>
        </div>
        <div>
        <h5>sandwish</h5>
        <Grid container spacing={1}>{sandwishOptions}</Grid> 
        </div>
      </div>
     );
  }
}
