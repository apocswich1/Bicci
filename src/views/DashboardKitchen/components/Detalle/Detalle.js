import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DetalleOrden,  DetalleCliente,  DetalleRepartidor } from '../../components'
import firebase from 'utils/firebase';

function TabPanel(props) {
  const { children, value, index, onChangeIndexBase,...other } = props;

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 865,
  },
}));

const Detalle = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { orden,valuePestana, grocery } = props;
  const [value, setValue] = React.useState(valuePestana);
  const [datos, setDatos] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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

   // fetchOrders();
    return () => {
      mounted = false;
    };
  }, []);
  const status = orden.length < 1 ? "disabled" : ""; 
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Detalle" {...a11yProps(0)} />
          {(orden.length) < 1 ? (
            <Tab label="Cliente" {...a11yProps(1)} disabled/>
          ) : (
            <Tab label="Cliente" {...a11yProps(1)} />
          )}
          {(orden.length) < 1 || (orden.driverID == undefined) ? (
            <Tab label="Repartidor" {...a11yProps(2)} disabled/>
          ) : (
            <Tab label="Repartidor" {...a11yProps(2)} />
          )}
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <DetalleOrden orden={orden} grocery={grocery}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <DetalleCliente orden={orden}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <DetalleRepartidor orden={orden}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Detalle;