import React,{useState} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Breakfast from '../components/menu/Breakfast';
import Lunch from '../components/menu/Lunch';

//importando material-iu
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function LinkTab(props) {
  return (
    <Tab component={Link} {...props}/>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
   
  },  
}));

/*function createData(products, price) {
  return {products, price };
}

/*const rows = [
  createData('Frozen yoghurt', 1500),
  createData('Ice cream sandwich', 1500),

];

/*
function (product){
  rows.add(product);
}*/

const Menu = () => {


  // useEffect(() => {
  //   setRows([
  //     createData('Frozen yoghurt', 1500),
  //     createData('Ice cream sandwich', 1500),
  //   ])
  // },[])

  const classes = useStyles();
  const [values, setValues] = React.useState({
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [rows, setRows]=useState([])
  const addRow = name => event => {
    setRows({ ...rows, [name]: event.target.value } );
  };

  
  
  return (
  <Router>
    <div>
    <Grid container spacing={12}>
      <Grid item xs={12}>
      <Tabs className="barMenu2" variant="fullWidth" aria-label="nav tabs example">
        <LinkTab label="desayuno" to={"/menu/breakfast"}/>
        <LinkTab label="almuerzo" to="/menu/lunch"/>  
      </Tabs>
      </Grid>
      <Grid item xs={5}>
      <form className={classes.container} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        id="waiter"
        label="Nombre del Mesero"
        onChange={handleChange('name')}
        margin="normal"
      />
         <TextField
         className={classes.textField}
         id="waiter"
         label="Mesa"
         onChange={handleChange('name')}
         margin="normal"
      />
       </form>
       <Route path="/menu/breakfast" component={Breakfast} set={addRow.bind}  />
       <Route path="/menu/lunch" component={Lunch}/>
       </Grid>
       <Grid item xs={1}></Grid>
       <Grid item xs={6}>
       <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Productos</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.product}>
              <TableCell>{row.products}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
       </Grid> 
      </Grid>
    </div>
  </Router>
    );
  }

export default Menu;