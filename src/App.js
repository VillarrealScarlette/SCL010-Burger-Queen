import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

//importando material-iu
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//importando los componentes
import Menu from './views/Menu';
import OrdersReady from './views/OrdersReady';
import OrdersRecords from './views/OrdersRecords';
import OrdesInKitchen from './views/OrdesInKitchen';

function LinkTab(props) {
  return ( 
    <Tab component={Link} {...props}/>
  );
}
 //rerejillas
 const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

function App() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
    <Grid container spacing={12}>
      <Grid item xs={12}>
        <h1 className="title">Vurger queen</h1>
      </Grid>
     <Router>
      <div className={classes.root}>
      <Grid item xs={12}>
      <AppBar position="static">
        <Tabs className="barMenu"  
        value={value}
        onChange={handleChange}
        centered>
          <LinkTab label="MENU" to={"/menu"}/>
          <LinkTab label="COCINA" to="/ordesinkitchen"/>
          <LinkTab label="PEDIDO LISTO" to="/ordersready"/>
          <LinkTab label="HISTORIAL" to="/ordersrecords"/>
        </Tabs>
      </AppBar>
      </Grid>

        <Route path="/menu" component={Menu}/>
        <Route path="/ordesinkitchen" component={OrdesInKitchen}/>
        <Route path="/ordersready" component={OrdersReady}/>
        <Route path="/ordersrecords" component={OrdersRecords}/>
      </div>
    </Router>
      </Grid>
      </div>
  );
}

export default App;