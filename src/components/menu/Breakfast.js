import React from 'react';
import { BtnOptions } from './Lunch';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import { coffee, sandwiches } from '../../data/menu.json';

export default class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: coffee,
      sandwich: sandwiches
    }
  }

  render() { 
        
    return ( 
      <div>
        <h3>Cafeteria</h3>
        {this.state.coffee.map(item => (
            <BtnOptions name={item.name} key={item.id}/>
        ))}
        <h3>Sandwiches</h3>
        {this.state.sandwich.map(item => (
            <BtnOptions name={item.name} key={item.id}/>
        ))}
      </div>
    );
  }
}
