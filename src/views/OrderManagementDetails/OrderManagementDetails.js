import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import firebase from 'utils/firebase';
import { Page } from 'components';
import { Header, Summary, User, Washer, Billing, Ubicacion, Invoices, Logs } from './components';
import VenueManagementList from '../VenueManagementList';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const OrderManagementDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [usuario, setUsuario] = React.useState([]);
  const [washer, setWasher] = React.useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchOrder = async () => {
      const refOrder = await firebase.firestore().collection('orders').doc(id).get();
      const datos = await refOrder.data();
      console.log(datos);
      let uid = datos.userID;
      let driverID = datos.driverID;
      setUsuario(datos);
      setWasher(datos);

      // fetch('https://us-central1-prowashgo-firebase.cloudfunctions.net/listOrdersAdminByOrderId', {
      //   method: 'post',
      //   mode: 'cors',
      //   body: JSON.stringify({ 'id': id }),
      // }).then(function (respuesta) {
      //   respuesta.json().then(body => {
      //     console.log(body);
      //     let uid = body.data.userID;
      //     let washerID = body.data.washerID;
          
      //     // usuario
      //     const refUsuario = firebase.firestore().collection('users').doc(uid);
      //     let usuario = [];
      //     refUsuario.get().then(async data => {
      //       await usuario.push(data.data());
      //       console.log(usuario[0]);
      //       setUsuario(usuario[0]);
      //     }).catch(err => console.log(err));
          
      //     // washer
      //     const refWasher = firebase.firestore().collection('washers').doc(washerID);
      //     let washer = [];
      //     refWasher.get().then(async data => {
      //       await washer.push(data.data());
      //       console.log(washer[0]);
      //       setWasher(washer[0]);
      //     }).catch(err => console.log(err));
      //   });
      // }).catch(function (err) {
      //   console.log(err);
      // });
    };

    fetchOrder();

    return () => {
      mounted = false;
    };
  }, []);

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'user', label: 'User Data' },
    { value: 'driver', label: 'Driver Data' },
    { value: 'billing', label: 'Billing' },
    // { value: 'ubicacion', label: 'Ubicación' },
    //{ value: 'invoices', label: 'Order Venues' },
    // { value: 'logs', label: 'Logs' }
  ];

  if (!tab) {
    return <Redirect to={`/management/orders/${id}/summary`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Order Management Details"
    >
      <Header id={id} />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'summary' && <Summary id={id} />}
        {tab === 'user' && <User id={id} usuario={usuario}/>}
        {tab === 'driver' && <Washer id={id}  washer={washer}/>}
        {tab === 'billing' && <Billing id={id} />}
        {/* {tab === 'ubicacion' && <Ubicacion id={id} />} */}
        {/*tab === 'invoices' && <Invoices id={id}/>*/}
        {/*tab === 'logs' && <Logs id={id}/>*/}
        {/* {tab === 'logs' && <Logs id={id}/>} */}
      </div>
    </Page>
  );
};

OrderManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default OrderManagementDetails;
