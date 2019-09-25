import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//importando material-iu
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//importando los componentes
import Home from './components/Home';
import Menu from './components/Menu';
import OrdersReady from './components/OrdersReady';
import OrdersRecords from './components/OrdersRecords';
import OrdesInKitchen from './components/OrdesInKitchen';

function LinkTab(props) {
  return (
    <Tab component={Link} {...props}/>
  );
}

function App() {
  return (
    <Router>
      <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" aria-label="nav tabs example">
          <LinkTab label="INICIO" to="/"/>
          <LinkTab label="MENU" to={"/menu"}/>
          <LinkTab label="COCINA" to="/ordesinkitchen"/>
          <LinkTab label="LISTO" to="/ordersready"/>
          <LinkTab label="HISTOPED" to="/ordersrecords"/>
        </Tabs>
      </AppBar>
      
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