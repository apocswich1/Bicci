import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DetalleOrden, Ordenes, DetalleCliente, OrderActivity, DetalleRepartidor } from '../../components'
import firebase from 'utils/firebase';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

function TabPanel(props) {
  const { children, value, index, onChangeIndexBase, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 1300,
//   },
// }));

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 840,
  },
  seleccionado: {
    backgroundColor: '#b2ebf2'
  },
});

const Detalle = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { orden, valuePestana, ordenes,scheduled, setOpenDetalle, setOrden, grocery } = props;
  const [value, setValue] = React.useState(valuePestana);
  const [datos, setDatos] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anterior, setAnterior] = useState('');
  const [formState, setFormState] = useState({ anterior });
  const columns = [{ id: 'name', label: 'Lista de Ordenes', minWidth: 170 },];

  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeColor = (x) => {
    
    var id = x.currentTarget.id;
    
    document.getElementById(id).classList.add(classes.seleccionado);
    if(anterior!=="" && anterior !== id){
      
      document.getElementById(anterior).classList.remove(classes.seleccionado);
    }
    
    setAnterior(id);
    setOrden(id);
    setOpenDetalle(true);
    
    return;
  }

  useEffect(() => {
    let mounted = true;

    const fetchOrders = async () => {
      try {
        const ordenRef = await firebase.firestore().collection('orders').doc(orden).get();
        let resultado = await ordenRef.data();
        setDatos(resultado);
      } catch (error) {
        console.log(error);
      }

    };

    return () => {
      mounted = false;
    };
  }, []);
  const status = orden.length < 1 ? "disabled" : "";
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        {/* <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ahora" {...a11yProps(0)} />
          <Tab label="Programados" {...a11yProps(1)} /> 
        </Tabs> */}
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableBody>
                  {ordenes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow style={{ height: "100px" }} role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                              <OrderActivity row={row} changeColor={changeColor} />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableBody>
                  {scheduled.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow style={{ height: "100px" }} role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                              <OrderActivity row={row} changeColor={changeColor} />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Detalle;