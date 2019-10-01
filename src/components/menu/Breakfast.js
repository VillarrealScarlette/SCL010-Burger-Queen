import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { menu } from '../../data/menu.json';
import './menu.css';

export default class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffe: menu.coffe,
      sandwish: menu.sandwish,
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select = (e) => {
    let rows = this.props.rows;
    rows.add({
      products:e.target.value,
      price:""
    })
    this.props.set(rows);
    console.log(e.target.value);
  }

  render() { 
    const coffeOptions = this.state.coffe.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.props.set} value={item.name}>
          {item.name}
          </Button>
          </Grid>
        
      )
    })
    const sandwishOptions = this.state.sandwish.map((item, i) => {
      return (
        <Grid item xs>
       <Button label="pr" variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
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
