import React from 'react';
import { menu } from './menu.json';

class Lunch extends React.Component {
  constructor() {
    super();
    this.state = {
      burger: menu.burgers,
      sideDish: menu.sideDishs,
      drink: menu.drinks,
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select = (e) => {
    console.log(e.target.value);
  }

  render() { 
    const burgersOptions = this.state.burger.map((item) => {
      return (
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    const sideDishsOptions = this.state.sideDish.map((item, i) => {
      return (
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    const drinksOptions = this.state.drink.map((item, i) => {
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
        {burgersOptions}
        </div>
        <div>
        <h5>Acompañamientos</h5>
        {sideDishsOptions}
        </div>
        <div>
        <h5>Bebestibles</h5>
        {drinksOptions}
        </div>
      </div>
     );
  }
}

export default Lunch;