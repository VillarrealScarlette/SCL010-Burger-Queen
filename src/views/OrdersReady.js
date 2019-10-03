import React from 'react';
import '../App.css';
import retrieve from '../data/data.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import firebase from '../data/firebase.js'


class OrdersReady extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     orders:[]
    }
  }

  componentDidMount() {
    retrieve("ready")
    .then(orders => this.setState({ orders: orders }))
  }
  changeState=(e)=>{
    let id= e.currentTarget.value

    const db = firebase.firestore();
    const data = db.collection('orders');
    data.doc(id).set({
      state:"record"
  }, { merge: true })
  .then (
    ()=>{
      this.componentDidMount();
    }
  )
  }

  

  render() { 

    const orders = this.state.orders.map((item, ) => {
      return (

        <div className="post">
       
             <h4>mesero: {item.waiter}</h4> 
             <h4>mesa: {item.table}</h4>  
      
             <Button value={item.id} onClick={this.changeState}>para entregar</Button>
                 
        </div>        
      )
    })
    return ( 
      <div>
        <h2>PEDIDOS PROCESANDOSE</h2>

          <Grid container spacing={1}>
             {orders}
            </Grid>
            
        </div>
     );
  }
}

export default OrdersReady;