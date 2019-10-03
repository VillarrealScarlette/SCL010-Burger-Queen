import React, { Component } from 'react';

import '../App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LinkTab from './LinkTab';
import Breakfast from '../components/menu/Breakfast';
import Lunch from '../components/menu/Lunch';

//importando material-iu
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default class Menu extends Component {

    state = {
    title:'placeholder title',
    value:{},
    container: {
        display: 'flex',
        flexWrap: 'wrap',        
      },
    textField: {
        width: 200,       
      },
    rows:[],
    total: 0
    } 

  handleChange = name => event => {
    this.setState({value: {
        name:event.target.value
    }}); 
  };

  changeTheWorld = (newTitle) => {
      this.setState({title:newTitle});
  }

  addOrders = (e) => {
    let orders=this.state.rows;
    orders.push({products:e.name,
    price:`$${e.price}`});
    this.setState({rows:orders});
    let currentTotal = this.state.total;
    let addToTotal = e.price;
    let newTotal = currentTotal + addToTotal;
    this.setState({total: newTotal})
  }

  render() {
    return (
        
    <div className="menu2">
  
    <Router>
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12}>
        <Tabs className="barMenu2" variant="fullWidth" aria-label="nav tabs example">
          <LinkTab label="desayuno" to="/menu/breakfast"/>
          <LinkTab label="almuerzo" to="/menu/lunch"/>
        </Tabs>    
        </Grid>
        <Grid item xs={5}>
        <form className={this.container} noValidate autoComplete="off">
        <TextField
          className={this.textField}
          id="waiter"
          label="Nombre del Mesero"
          onChange={this.handleChange('name')}
          margin="normal"
        />
          <TextField
          className={this.textField}
          id="waiter"
          label="Mesa"
          onChange={this.handleChange('name')}
          margin="normal"
        />
        </form>
        <Route path="/menu/breakfast" render={(props) => <Breakfast {...props} addOrder={this.addOrders}/>}/>
        <Route path="/menu/lunch"render={(props) => <Lunch {...props} addOrder={this.addOrders}/>}/>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}> 
        <Paper>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Productos</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <TableRow key={row.product}>
                <TableCell>{row.products}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>
            ))}
          <TableCell><h3>Total:</h3></TableCell>
          <TableCell><h3>{`$${this.state.total}`}</h3></TableCell>
          </TableBody>
        </Table>
      </Paper>
      <Button>Enviar Pedido</Button>
        </Grid> 
        </Grid>
    </div>
    </Router>
    </div>
    );
  }
}