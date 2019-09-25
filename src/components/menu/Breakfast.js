import React from 'react';
import { menu } from './menu.json';
import Counter from './Counter.js';
import './menu.css';

class Breakfast extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfasts: menu.breakfast
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select = (e) => {
    console.log(e.target.value);
  }

  render() { 
    const breakfastOptions = this.state.breakfasts.map((item) => {
      return (
        <button className="button-menu" 
        key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    return ( 
      <div>
        {breakfastOptions}
        <div>
          <Counter />
        </div>
      </div>
     );
  }
}

export default Breakfast;