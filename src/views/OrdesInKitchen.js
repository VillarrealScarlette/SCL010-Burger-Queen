import React from 'react';
import '../App.css';
import retrieve from '../data/data.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Products from './products';
import firebase from '../data/firebase.js'



class OrdersInKitchen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     orders:[]
    }
  }

  componentDidMount() {
    retrieve("kitchen")
    .then(orders => this.setState({ orders: orders }))
  }
   
  changeState=(e)=>{
    let id= e.currentTarget.value

    const db = firebase.firestore();
    const data = db.collection('orders');
    data.doc(id).set({
      state:"ready"
  }, { merge: true })
  .then (
    ()=>{
      this.componentDidMount();
    }
  )
  }

  render() { 

    const orders = this.state.orders.map((item, ) => {
      let date = new Date (Date(item.date))
      let month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      let dateCreate= (date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear());
      let time = date.getHours() + ":" + date.getMinutes();   
      return (

        <div className="post">
       
             <h4>mesero: {item.waiter}</h4> 
             <h4>mesa: {item.table}</h4> 
             <h4>fecha: {dateCreate}</h4> 
             <h4>hora: {time}</h4>  
             <h5>pedido:</h5> 
            
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
     
             <Button value={item.id} onClick={this.changeState}>Pedido Listo</Button>
                 
        </div>        
      )
    })
    return ( 
      <div>
        <p className="barMenu3">PEDIDOS PROCESANDOSE</p>

          <Grid container spacing={1}>
             {orders}
            </Grid>
            
        </div>
     );
  }
}

export default OrdersInKitchen;