import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakfast from './menu/Breakfast';
import Lunch from './menu/Lunch';
import Total from './menu/Total';
import Foods from './menu/Breakfast';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {name: 'cafe americano', price: 1000},
        {name: 'cafe con leche', price: 1500},
        {name: 'vegetariano', price: 2000}
      ],
      total: 0
    };
  }

  addItem = (foodIndex) => {
    let currentTotal = this.state.total;
    let addToTotal = this.state.food[foodIndex].price;
    let newTotal = currentTotal + addToTotal;
    this.setState({total: newTotal})
  }

  showName = () => {
    let foodName = this.state.food.map((item) => {
      return item.name
    });
    return foodName;
  }

  sentOrder = () => {
    this.setState({total: 0});
  }

  menu = () => {
    return (
        <Router>
          <div>
            <ul className='menu'>
              <li>
                <Link to="/breakfast">DESAYUNO</Link>
              </li>
              <li>
                <Link to="/lunch">ALMUERZO</Link>
              </li>
            </ul>
            <hr/>
            <Route path="/breakfast" component={Breakfast}/>
            <Route path="/lunch" component={Lunch}/>
          </div>
        </Router>
      );
}

  render() { 
    let foods = (
      <div>
        {this.state.food.map((food, index) => {
          return <Foods 
          name={food.name}
          click={() => this.addItem(index)}/>
        })}
      </div>
    )
    return ( 
      <div>
        <ul>
          {foods}
        </ul>
        <div>
          <Total
          total={this.state.total}
          click={() => this.sentOrder}/>
        </div>
      </div>
     );
  }
}