import React from 'react';
import '../App.css';
import retrieve from '../data/data.js';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Products from './products';

class OrdersRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     orders:[]
    }
  }

  componentDidMount() {
    retrieve("record")
    .then(orders => this.setState({ orders: orders }))
  }


  

  render() { 

    const orders = this.state.orders.map((item, ) => {
      let date = new Date (Date(item.date))
      let month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      let dateCreate= (date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear());
      let time = date.getHours() + ":" + date.getMinutes();   
      return (

        <div className="post">
             <div className="postfont">
             <p>mesero: {item.waiter}</p> 
             <p>mesa: {item.table}</p> 
             <p>fecha: {dateCreate}</p> 
             <p>hora: {time}</p>  
             <h4>pedido:</h4> 
             </div>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Productos</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Products orders={item.order}></Products>
        </TableBody>
      </Table>
    </Paper>
                 
        </div>        
      )
    })
    return ( 
      <div>
      <p className="barMenu3">HISTORIAL DE PEDIDOS </p>
          <Grid container spacing={1}>
             {orders}
            </Grid>     
        </div>
     );
  }
}

export default OrdersRecords;