import React from 'react';
import '../App.css';
import retrieve from '../data/data.js';
import firebase from '../data/firebase.js'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



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
              <div className="postfont">
             <p>mesero: {item.waiter}</p> 
             <p>mesa: {item.table}</p>  
             </div>
             <Button value={item.id} onClick={this.changeState}>para entregar</Button>
                 
        </div>        
      )
    })
    return ( 
      <div>
         <p className="barMenu3">PEDIDOS PARA ENTREGAR A CLIENTES</p>
          <Grid container spacing={1}>
             {orders}
            </Grid>
            
        </div>
     );
  }
}

export default OrdersReady;