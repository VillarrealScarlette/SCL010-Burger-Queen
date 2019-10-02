import React from 'react';
import '../App.css';
import retrieve from '../data/data.js';
import Button from '@material-ui/core/Button';

class OrdersInKitchen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     orders:[]
    }
  }

  componentDidMount() {
    retrieve("cocina")
    .then(orders => this.setState({ orders: orders }))
  }

  render() { 

    const orders = this.state.orders.map((item) => {
      return (
        <div>
             
             <h1>mesero: {item.mesero}</h1> 
             <h1>mesa: {item.mesa}</h1>  
            
        </div>        
      )
    })
    return ( 
      <div>
        <h2>COCINAAAA</h2>
        <Button>Pedido Listo</Button>
        {orders} 
      </div>
     );
  }
}

export default OrdersInKitchen;