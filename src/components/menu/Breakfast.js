import React from 'react';
import { breakfast } from './breakfast.json';
import './menu.css';

class Breakfast extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfast
    }
  }
  //f(x) que captura el nombre de la opción seleccionada
  select(e) {
    console.log(e.target.value);
  }

  render() { 
    const breakfasts = this.state.breakfast.map((item) => {
      return (
        <button className="button-menu" key={item.name} onClick={this.select} value={item.name}>
          {item.name}
        </button>
      )
    })
    return ( 
      <div>
        {breakfasts}
      </div>
     );
  }
}

export default Breakfast;