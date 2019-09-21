import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakfast from './menu/Breakfast';
import Lunch from './menu/Lunch';

function Menu() {
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

export default Menu;