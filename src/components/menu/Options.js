import React from 'react';
import { BtnOptions } from './Lunch';
// import Grid from '@material-ui/core/Grid';
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
      
    return ( 
      <div>
        <h3>Hamburguesas</h3>
        {this.state.burger.map(item => (
            <BtnOptions name={item.name} key={item.id}/>
        ))}
        <h3>Acompañamientos</h3>
        {this.state.sideDish.map(item => (
            <BtnOptions name={item.name} key={item.id}/>
        ))}
        <h3>Bebestibles</h3>
        {this.state.burger.map(item => (
            <BtnOptions name={item.name} key={item.id}/>
        ))}
      </div>
     );
  }
}