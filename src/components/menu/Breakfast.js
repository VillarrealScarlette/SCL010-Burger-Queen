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
  render() { 
    const breakfasts = this.state.breakfast.map((item, i) => {
      return (
        <button className="menu-card">
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