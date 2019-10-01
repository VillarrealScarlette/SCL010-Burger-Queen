import React from 'react';
import { TableRow } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waiter: "negra",
            table: 4,
            hour: "18:00"
        };
      }
    render() {
        return (
            <div className="show-order">
                <TableRow>
                    <Grid item xs={3}>Mesero:</Grid>
                    <Grid item xs={3}>{`$${this.state.waiter}`}</Grid>
                </TableRow>
                <TableRow>
                    <Grid item xs={3}>Mesa:</Grid>
                    <Grid item xs={3}>{`$${this.state.table}`}</Grid>
                </TableRow>
                <TableRow>
                    <Grid item xs={3}>Hora:</Grid>
                    <Grid item xs={3}>{`$${this.state.hour}`}</Grid>
                </TableRow>
            </div>
        )
    }
}