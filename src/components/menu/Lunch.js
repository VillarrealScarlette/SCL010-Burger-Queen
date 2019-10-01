// import React from 'react';
// import Button from '@material-ui/core/Button';
// //import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import { menu } from './menu.json';

// class Lunch extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       burger: menu.burgers,
//       sideDish: menu.sideDishs,
//       drink: menu.drinks,
//     }
//   }

//   //f(x) que captura el nombre de la opción seleccionada
//   select = (e) => {
//     console.log(e.target.value);
//   }

//   render() { 
//     const burgersOptions = this.state.burger.map((item) => {
//       return (
//         <Grid item xs>
//          <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
//           {item.name}
//           </Button>
//           </Grid>
        
//       )
//     })
//     const sideDishsOptions = this.state.sideDish.map((item, i) => {
//       return (
//         <Grid item xs>
//        <Button variant="contained" color="#ffffff" key={item.name} onClick={this.select} value={item.name}>
//           {item.name}
//           </Button>
//           </Grid>
//       )
//     })
//     const drinksOptions = this.state.drink.map((item, i) => {
//       return (
//         <Grid item xs>
//         <Button variant="contained" color="ffffff" key={item.name} onClick={this.select} value={item.name}>
//           {item.name}
//           </Button>
//           </Grid>
//       )
//     })
//     return ( 
//       <div>
//         <div>
//         <h5>Hamburgesas</h5>
//         <Grid container spacing={1}>{burgersOptions}</Grid>
//         </div>
//         <div>
//         <h5>Acompañamientos</h5>
//         <Grid container spacing={1}>{sideDishsOptions}</Grid> 
//         </div>
//         <div>
//         <h5>Bebestibles</h5>
//         <Grid container spacing={1}>{drinksOptions}</Grid> 
//         </div>
//       </div>
//      );
//   }
// }
