import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Products = (props) => {
    let list = Array.from(props.orders)
    return (
        list.map((order) => {  
            return (
            <TableRow key={order.name}>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.price}</TableCell>
          </TableRow>
          )
      })
    );
  }

export default Products;