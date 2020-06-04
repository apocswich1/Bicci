import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import firebase from 'utils/firebase';
import axios from 'utils/axios';
import { RequestInfo, Invoices, SendEmails, OtherActions } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [request, setRequest, uid, setUid, name, setName, email, setEmail, dni, setDni, phone, setPhone, airport, setAirport, agree, setAgree, isActive, setIsActive ] = useState();
  const [drivers, setDrivers ] = useState();
  useEffect(() => {
    let mounted = true;

    const fetchRequest = async () => {
      let requests = [];
      const refRequest = firebase.firestore().collection('requests').doc(props.id);
      refRequest.get().then(async data=>{
        await requests.push(data.data());        
        requests[0].id = props.id;
        setRequest(requests[0]);
      }).catch(err => console.log(err));

      /*fetch('https://us-central1-travelsafe-firebase.cloudfunctions.net/listUsersAdminById', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({ 'uid':'3aSoowU693eXtCIrFjjzifkz4xu2' }),
        headers: {
          "Access-Control-Allow-Credentials":"true",
          "Access-Control-Allow-Methods":"POST",
          "Access-Control-Allow-Origin" : "*",
          "Content-type": "application/json",
        },
      }).then(function (respuesta) {
        respuesta.json().then(body => {
          console.log(body.usuarios);
        });
      }).catch(function (err) {
        // Error :(
      });*/  
    };

    const fetchDrivers = async () => {
      let driversNames = [];
      const refDriver = firebase.firestore().collection('drivers');
      refDriver.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          driversNames.push(doc.data());
        });
        setDrivers(driversNames);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    };

    fetchDrivers();
    fetchRequest();

    return () => {
      mounted = false;
    };
  }, []);

  const actualizar = async () => {
    let requests = [];
    const refRequest = firebase.firestore().collection('requests').doc(props.id);
    refRequest.get().then(async data=>{
      await requests.push(data.data());        
      requests[0].id = props.id;
      setRequest(requests[0]);
    }).catch(err => console.log(err));
  }  

  if (!request) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <RequestInfo request={request} driversNames={drivers}  actualizar={actualizar}/>
      </Grid>
      {/*<Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices request={request} />
      </Grid>*/}
    {/*}  <Grid
        item
        lg={4}
        md={4}
        xl={4}
        xs={4}
      >
        <SendEmails request={request} />
    </Grid>*/}
      <Grid
        item
        lg={8}
        md={8}
        xl={8}
        xs={12}
      >
        <OtherActions request={request} actualizar={actualizar}/>
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
