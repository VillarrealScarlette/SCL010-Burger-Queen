import React from 'react';
import {lunch} from './lunch.json';

class Lunch extends React.Component {
  constructor() {
    super();
    this.state = {
      lunch
    }
  }
  render() { 
    const lunchs = this.state.lunch.map((item, i) => {
      return (
        <button className="menu-card">
          {item.name}
        </button>
      )
    })
    return ( 
      <div>
        <div className="burgers">
        <h5>Hamburgesas</h5>
        {lunchs[0]}
        {lunchs[1]}
        {lunchs[2]}
        {lunchs[3]}
        {lunchs[4]}
        {lunchs[5]}
        {lunchs[6]}
        {lunchs[7]}
        </div>
        <div className="side-dishs">
        <h5>Acompañamientos</h5>
        {lunchs[8]}
        {lunchs[9]}
        </div>
        <div className="drinks">
        <h5>Bebestibles</h5>
        {lunchs[10]}
        {lunchs[11]}
        {lunchs[12]}
        {lunchs[13]}
        </div>
      </div>
     );
  }
}

export default Lunch;