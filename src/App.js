import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//importando los componentes
import Home from './components/Home';
import Menu from './components/Menu';
import OrdersReady from './components/OrdersReady';
import OrdersRecords from './components/OrdersRecords';
import OrdesInKitchen from './components/OrdesInKitchen';


function App() {
  return (
    <Router>
      <div>
        <ul className='home'>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/ordesinkitchen">COCINA</Link>
          </li>
          <li>
            <Link to="/ordersready">LISTO</Link>
          </li>
          <li>
            <Link to="/ordersrecords">HISTOPED</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/ordesinkitchen" component={OrdesInKitchen}/>
        <Route path="/ordersready" component={OrdersReady}/>
        <Route path="/ordersrecords" component={OrdersRecords}/>
      </div>
    </Router>
  );
}

export default App;