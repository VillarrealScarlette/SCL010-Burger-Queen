import React from 'react';
import {lunch} from './lunch.json';

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
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    const sideDishs = this.state.sideDish.map((item, i) => {
      return (
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    const drinks = this.state.drink.map((item, i) => {
      return (
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    return ( 
      <div>
        <div>
        <h5>Hamburgesas</h5>
        {burgers}
        </div>
        <div>
        <h5>Acompañamientos</h5>
        {sideDishs}
        </div>
        <div>
        <h5>Bebestibles</h5>
        {drinks}
        </div>
      </div>
     );
  }
}

export default Lunch;